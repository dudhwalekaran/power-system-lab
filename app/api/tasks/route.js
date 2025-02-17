// app/api/projects/route.js
import mongoose from 'mongoose';
import Task from '@/app/models/Task';

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
  const { name, task, description, deadline } = await req.json(); // Use req.json() to get JSON data in Next.js 13+

  if (!name || !task || !description || !deadline) {
    return new Response(
      JSON.stringify({ message: 'All fields are required' }),
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    const newTask = new Task({ name, task, description, deadline });
    const savedTask = await newTask.save();

    return new Response(
      JSON.stringify({
        message: 'Task Assigned successfully!',
        task: savedTask,
      }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error Assigning task', error }),
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const tasks = await Task.find();
    return new Response(JSON.stringify(tasks), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error assigning tasks', error }),
      { status: 500 }
    );
  }
}
