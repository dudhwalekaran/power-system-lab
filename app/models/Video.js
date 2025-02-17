import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  professorName: { type: String, required: true },
  videoLink: { type: String, default: null },
  videoFile: { type: String, default: null },
  keywords: { type: String, required: true },
  videoType: { type: String, enum: ["normal", "playlist"], required: True },  // New field
  playlistName: { type: String, default: null, required: false },  // New field (optional)
});

const Video = mongoose.models.Video || mongoose.model("Video", videoSchema);

export default Video;
