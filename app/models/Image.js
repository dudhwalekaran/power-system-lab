import mongoose from 'mongoose';

// Define the Image Schema
const ImageSchema = new mongoose.Schema({
  cloudinaryId: {
    type: String,
    required: true,
  },
  secureUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Directly create the Image model
const Image = mongoose.model('Image', ImageSchema); // No OR condition

export default Image;
