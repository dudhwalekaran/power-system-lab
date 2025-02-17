// models/Project.js
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    task: {
      type: String,
      required: true,
    },
    description: {
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

const Task =
  mongoose.models.Task || mongoose.model("Task", TaskSchema);

export default Task;
