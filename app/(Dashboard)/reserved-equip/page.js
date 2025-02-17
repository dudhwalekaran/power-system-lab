'use client';

import { useEffect, useState } from 'react';

export default function ViewReservations() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');

  // Fetch all reservations when the component is mounted
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch('/api/reserve');  // Fetch reservations from API
        
        // Check if the response body is empty
        if (!res.ok) {
          const data = await res.text(); // Use res.text() to log raw response text
          setError(data || 'Something went wrong');
          return;
        }

        // Check if the response body is empty or not JSON
        const data = await res.json();

        if (Object.keys(data).length === 0) {
          setError('No reservations found.');
        } else {
          setReservations(data);  // Store the reservations data in state
        }
      } catch (err) {
        console.error('Error fetching reservations:', err);
        setError('Failed to fetch reservations.');
      }
    };

    fetchReservations();
  }, []);  // Empty dependency array means this runs once when the component is mounted

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">IIT Power Systems Lab</div>
          <ul className="flex space-x-6">
            <li><a href="/home" className="hover:text-gray-300">Home</a></li>
            <li><a href="/reserved-equip" className="hover:text-gray-300">Equipment</a></li>
            <li><a href="/resources" className="hover:text-gray-300">Upload video</a></li>
            <li><a href="/lab-resources" className="hover:text-gray-300">Lab resources</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">View Reservations</h1>

        {/* Display errors or success */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Reservations Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">All Equipment Reservations</h3>

          {reservations.length === 0 ? (
            <p>No reservations found.</p>
          ) : (
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-2 text-left text-gray-700">Equipment</th>
                  <th className="px-6 py-2 text-left text-gray-700">From Date</th>
                  <th className="px-6 py-2 text-left text-gray-700">To Date</th>
                </tr>
              </thead>
              <tbody>
                {reservations.map((reservation) => (
                  <tr key={reservation._id} className="border-t border-gray-300">
                    <td className="px-6 py-4">{reservation.equipment}</td>
                    <td className="px-6 py-4">{reservation.fromDate}</td>
                    <td className="px-6 py-4">{reservation.toDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
