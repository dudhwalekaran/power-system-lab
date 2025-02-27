"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from the API when the component is mounted
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("/api/tasks");
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        const data = await res.json();
        setTasks(data); // Store the fetched tasks in the state
      } catch (err) {
        setError(err.message); // Handle any errors that occur during the fetch
      } finally {
        setLoading(false); // Set loading state to false once the request is done
      }
    };

    fetchTasks();
  }, []); // The empty dependency array means this effect runs once when the component mounts

  // Function to delete a task
  const handleDelete = async (taskId) => {
    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete task");
      }

      // Remove the deleted task from the state
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (err) {
      setError(err.message); // Handle any errors during deletion
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading tasks...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white shadow-md">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">MIT Power Systems Lab</div>
          <ul className="flex space-x-6">
            <li>
              <a href="/home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/all-projects" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="/reserved-equip" className="hover:text-gray-300">
                Equipment
              </a>
            </li>
            <li>
              <a href="/all-task" className="hover:text-gray-300">
                Tasks
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-gray-300">
                Upload video
              </a>
            </li>
            <li>
              <a href="/lab-resources" className="hover:text-gray-300">
                Lab resources
              </a>
            </li>
            <li>
              <Link href="/upload-documents" className="hover:text-gray-300">
                Documents
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Tasks</h1>

        {/* Display the list of tasks */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            All Tasks
          </h3>
          <ul>
            {tasks.length === 0 ? (
              <p className="text-center text-gray-500">No tasks available</p>
            ) : (
              tasks.map((task) => (
                <li key={task._id} className="mb-4">
                  <div className="flex items-center justify-between border p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="flex flex-col space-y-2">
                      <h4 className="text-2xl font-bold text-blue-900">
                        {task.name}
                      </h4>
                      <p className="text-gray-800 text-lg font-medium">
                        {task.task}
                      </p>
                      <p className="text-gray-600">{task.description}</p>
                      <p className="text-gray-500 text-sm">
                        <span className="font-semibold">Deadline:</span>{" "}
                        {new Date(task.deadline).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-200 ease-in-out"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
