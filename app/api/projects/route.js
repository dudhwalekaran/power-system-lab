// app/api/projects/route.js
import mongoose from 'mongoose';
import Project from '@/app/models/Project';

const MONGO_URI = process.env.MONGODB_URI;

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export async function POST(req) {
  // Handle project creation
  const { name, goals, deadline } = await req.json(); // Use req.json() to get JSON data in Next.js 13+

  if (!name || !goals || !deadline) {
    return new Response(
      JSON.stringify({ message: 'All fields are required' }),
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    const newProject = new Project({ name, goals, deadline });
    const savedProject = await newProject.save();

    return new Response(
      JSON.stringify({
        message: 'Project created successfully!',
        project: savedProject,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error creating project', error }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const projects = await Project.find();
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error fetching projects', error }),
      { status: 500 }
    );
  }
}
