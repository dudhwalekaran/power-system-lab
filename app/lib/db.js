// app/lib/db.js
import mongoose from 'mongoose';

const connectDb = async () => {
  // Check if already connected
  if (mongoose.connection.readyState === 1) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    console.log('Connecting to MongoDB...');
    // Ensure MONGODB_URI is defined
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in .env.local');
    }

    // Connect with Mongoose, including necessary options for MongoDB Atlas
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      connectTimeoutMS: 10000, // Connection timeout
      socketTimeoutMS: 45000, // Socket timeout
    });

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message, error.stack);
    throw new Error(`Failed to connect to MongoDB: ${error.message}`);
  }
};

export default connectDb;