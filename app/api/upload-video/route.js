import { MongoClient } from "mongodb";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dipmjt9ta/video/upload";
const UPLOAD_PRESET = "pslab_videos";

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 60000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, { ...options, signal: controller.signal });
  clearTimeout(id);
  return response;
}

async function uploadToCloudinary(file) {
  const videoFileBlob = new Blob([await file.arrayBuffer()], { type: file.type });
  const formData = new FormData();
  formData.append("file", videoFileBlob);
  formData.append("upload_preset", UPLOAD_PRESET);
  formData.append("chunk_size", 6000000);

  const response = await fetchWithTimeout(CLOUDINARY_URL, { method: "POST", body: formData, timeout: 120000 });
  const data = await response.json();

  if (!data.secure_url) throw new Error("Failed to upload video to Cloudinary.");
  return data.secure_url;
}

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db("pslab");

    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const professorName = formData.get("professorName");
    let videoLink = formData.get("videoLink");
    const videoFile = formData.get("videoFile");
    const keywords = formData.get("keywords");
    const playlist = formData.get("playlist") || null;

    if (!title || !description || !professorName || (!videoLink && !videoFile) || !keywords) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required, including a video link or file." }),
        { status: 400 }
      );
    }

    if (!videoLink && videoFile) {
      console.log("Uploading video to Cloudinary...");
      videoLink = await uploadToCloudinary(videoFile);
    }

    const result = await db.collection("videos").insertOne({
      title,
      description,
      professorName,
      videoLink,
      keywords,
      playlist,
      createdAt: new Date(),
    });

    await client.close();

    return new Response(
      JSON.stringify({ success: true, message: "Video uploaded successfully!", videoUrl: videoLink }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading video:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error", error: error.message }),
      { status: 500 }
    );
  }
}