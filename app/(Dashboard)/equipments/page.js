'use client';

import { useState } from 'react';

export default function ReserveEquipment() {
  const [equipment, setEquipment] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate fields
    if (!equipment || !fromDate || !toDate) {
      setError('Please fill out all fields.');
      return;
    }

    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ equipment, fromDate, toDate }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess('Equipment reserved successfully!');
        setEquipment('');
        setFromDate('');
        setToDate('');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to reserve equipment.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">MIT Power Systems Lab</div>
          <ul className="flex space-x-6">
            <li><a href="/home" className="hover:text-gray-300">Home</a></li>
            <li><a href="/reserved-equip" className="hover:text-gray-300">Equipment</a></li>
            <li><a href="/resources" className="hover:text-gray-300">Upload video</a></li>
            <li><a href="/lab-resources" className="hover:text-gray-300">Lab resources</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Reserve Equipment</h1>

        {/* Equipment Reservation Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Reserve Equipment</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Equipment</label>
              <input
                type="text"
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter equipment name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">From Date</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">To Date</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded">Reserve Equipment</button>
          </form>

          {/* Display errors or success */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </div>
      </div>
    </div>
  );
}
