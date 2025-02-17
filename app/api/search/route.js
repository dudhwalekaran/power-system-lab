import { NextResponse } from 'next/server';
import Video from '@/app/models/Video';  // Adjust the path to your Video model
import mongoose from 'mongoose';  // <-- Add mongoose import
import fetch from 'node-fetch';

// MongoDB Connection URI (ensure to have this in your .env file)
const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase() {
  if (mongoose.connections[0].readyState) return;  // Already connected

  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    throw new Error('Failed to connect to MongoDB');
  }
}

// Helper function to get YouTube Video Data from the YouTube API
async function getYouTubeVideoData(videoLink) {
  const videoIdMatch = videoLink.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/); // Extract YouTube Video ID from iframe URL
  
  if (videoIdMatch) {
    const videoId = videoIdMatch[1];
    
    // Fetching metadata from YouTube using their public API
    const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=YOUR_YOUTUBE_API_KEY`);
    
    if (response.ok) {
      const data = await response.json();
      if (data.items && data.items[0]) {
        const snippet = data.items[0].snippet;
        return {
          title: snippet.title,
          description: snippet.description,
        };
      }
    }
  }

  return { title: '', description: '' };  // If no data or not a valid video, return empty metadata
}

export async function GET(request) {
  const { search } = request.nextUrl.searchParams;  // Search term from the frontend

  await connectToDatabase();  // Ensure MongoDB connection

  try {
    // Step 1: Search for user-provided titles and descriptions in the database
    const userSearchResults = await Video.find({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ],
    });

    // Step 2: Fetch metadata from YouTube and combine results with user search results
    const iframeSearchResults = await Video.find({ videoLink: { $regex: search, $options: 'i' } });

    const iframeMetadataResults = await Promise.all(
      iframeSearchResults.map(async (video) => {
        const { title, description } = await getYouTubeVideoData(video.videoLink);
        return {
          ...video.toObject(),
          youtubeTitle: title,
          youtubeDescription: description,
        };
      })
    );

    // Step 3: Combine both user search and iframe metadata results
    const allResults = [...userSearchResults, ...iframeMetadataResults];

    return NextResponse.json(allResults);  // Send back all the results
  } catch (error) {
    console.error('Error fetching search results', error);
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }
}
