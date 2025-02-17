"use client";

import { useState, useEffect } from "react";

export default function Projects() {
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [taskData, setTaskData] = useState([]); // Changed to an array to store tasks
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch tasks on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/tasks");
        if (res.ok) {
          const data = await res.json();
          setTaskData(data); // Set tasks in state
        } else {
          setError("Failed to fetch tasks");
        }
      } catch (err) {
        setError("Failed to fetch tasks");
      }
    };

    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !task || !description || !deadline) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, task, description, deadline }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Task Assigned successfully!");
        setName("");
        setTask("");
        setDescription("");
        setDeadline("");
        // Optionally, add the new task to the state directly
        setTaskData((prevTasks) => [...prevTasks, data]);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to assign task.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">MIT Power Systems Lab</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/home" className="hover:text-gray-300">Home</a>
            </li>
            <li>
              <a href="/all-projects" className="hover:text-gray-300">Projects</a>
            </li>
            <li>
              <a href="/reserved-equip" className="hover:text-gray-300">Equipment</a>
            </li>
            <li>
              <a href="/all-task" className="hover:text-gray-300">Tasks</a>
            </li>
            <li>
              <a href="/resources" className="hover:text-gray-300">Upload video</a>
            </li>
            <li>
              <a href="/lab-resources" className="hover:text-gray-300">Lab Resources</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Manage Your Tasks</h1>

        {/* Task Assignment Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Assign a Task</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Assign task to</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Student name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Task</label>
              <textarea
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter a task"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter a description"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Deadline</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded">
              Assign Task
            </button>
          </form>

          {/* Display errors or success */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </div>
      </div>
    </div>
  );
}
