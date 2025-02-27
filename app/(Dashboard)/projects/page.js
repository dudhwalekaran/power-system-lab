'use client';

import { useState } from 'react';

export default function Projects() {
  const [name, setName] = useState('');
  const [goals, setGoals] = useState('');
  const [projectData, setProjectData] = useState([]);
  const [deadline, setDeadline] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!name || !goals || !deadline) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, goals, deadline }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess('Project created successfully!');
        setName('');
        setGoals('');
        setDeadline('');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to create project.');
    }
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">MIT Power Systems Lab</div>
          <ul className="flex space-x-6">
            <li><a href="/home" className="hover:text-gray-300">Home</a></li>
            <li><a href="/all-projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="/reserved-equip" className="hover:text-gray-300">Equipment</a></li>
            <li><a href="/all-task" className="hover:text-gray-300">Tasks</a></li>
            <li><a href="/resources" className="hover:text-gray-300">Upload video</a></li>
            <li><a href="/lab-resources" className="hover:text-gray-300">Lab resources</a></li>
            <li><a href="/upload-documents" className="hover:text-gray-300">Documents</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Manage Your Projects</h1>

        {/* Project Creation Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Create a New Project</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Project Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter project name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Goals</label>
              <textarea
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Define project goals"
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
            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded">Create Project</button>
          </form>

          {/* Display errors or success */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </div>
      </div>
    </div>
  );
}
