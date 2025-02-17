// models/Project.js
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    goals: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // This adds createdAt and updatedAt fields automatically
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
