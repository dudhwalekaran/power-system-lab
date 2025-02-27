"use client";

import { useEffect, useState } from "react";
import Link from 'next/link';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from the API when the component is mounted
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        setProjects(data); // Store the fetched projects in the state
      } catch (err) {
        setError(err.message); // Handle any errors that occur during the fetch
      } finally {
        setLoading(false); // Set loading state to false once the request is done
      }
    };

    fetchProjects();
  }, []); // The empty dependency array means this effect runs once when the component mounts

  // Function to delete a task
  const handleDelete = async (projectId) => {
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete project");
      }

      // Remove the deleted task from the state
      setProjects(projects.filter((project) => project._id !== projectId));
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
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">IIT Power Systems Lab</div>
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
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Projects</h1>

        {/* Display the list of projects */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            All Projects
          </h3>
          <ul>
            {projects.length === 0 ? (
              <p>No projects available</p>
            ) : (
              projects.map((project) => (
                <li key={project._id} className="mb-4">
                  <div className="border p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition duration-300">
                    <h4 className="text-2xl font-bold text-blue-900 mb-2">
                      {project.name}
                    </h4>
                    <p className="text-gray-700 mb-2">{project.goals}</p>
                    <p className="text-gray-500 text-sm font-medium mb-4">
                      <span className="font-semibold">Deadline:</span>{" "}
                      {new Date(project.deadline).toLocaleDateString()}
                    </p>
                    <button
                      onClick={() => handleDelete(project._id)}
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
