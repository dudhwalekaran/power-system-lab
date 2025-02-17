import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  subject: String,
  edition: String,
  copies: Number,
});

export default mongoose.models.Book || mongoose.model('Book', BookSchema);
