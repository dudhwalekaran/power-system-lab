import { MongoClient } from 'mongodb';

// MongoDB connection URI and Database Name
const client = new MongoClient(process.env.MONGODB_URI);
let db;

async function connectToDB() {
  if (!db) {
    await client.connect();
    db = client.db('pslab'); // Replace with your database name if different
  }
  return db;
}

export async function GET() {
  try {
    const db = await connectToDB();
    const videos = await db.collection('videos').find({}).toArray();
    
    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching videos:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
