import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Book from '@/app/models/Book';

const MONGODB_URI = process.env.MONGODB_URI; // Replace with your connection string

// MongoDB connection setup
const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Use the existing connection
  }
  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

// GET request to fetch all books
export async function GET() {
  await connectToDatabase(); // Ensure the database is connected

  try {
    const books = await Book.find();
    return NextResponse.json(books);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
  }
}

// POST request to add a new book
export async function POST(request) {
  await connectToDatabase(); // Ensure the database is connected

  try {
    const body = await request.json();
    const newBook = await Book.create(body);
    return NextResponse.json(newBook, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add book' }, { status: 500 });
  }
}
