"use client";

import React, { useEffect, useState } from 'react';

function page() {
  const [bookings, setBookings] = useState([]); // State to store bookings
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  // Fetch bookings from the database
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings');
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data); // Set bookings data
        setLoading(false);
      } catch (err) {
        console.error('Error fetching bookings:', err.message);
        setError('Failed to fetch bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Handle loading and error states
  if (loading) {
    return <p className="text-center text-lg">Loading bookings...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-lg">{error}</p>;
  }

  // Function to handle deletion of a booking
  const handleDelete = async (bookingId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete booking');
      }

      // Remove the deleted booking from the list of bookings
      setBookings(bookings.filter(booking => booking._id !== bookingId));
    } catch (err) {
      console.error('Error deleting booking:', err.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-semibold mb-8">Admin Panel</h1>
      <table className="min-w-full table-auto border-collapse shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-4 text-left">S.No</th>
            <th className="px-6 py-4 text-left">Date</th>
            <th className="px-6 py-4 text-left">Time</th>
            <th className="px-6 py-4 text-left">Name</th>
            <th className="px-6 py-4 text-left">Contact</th>
            <th className="px-6 py-4 text-left">Email</th>
            <th className="px-6 py-4 text-left">Actions</th> 
          </tr>
        </thead>

        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking._id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{booking.slot?.date || 'N/A'}</td>
              <td className="px-6 py-4">{booking.slot?.slotTime || 'N/A'}</td>
              <td className="px-6 py-4">{booking.name}</td>
              <td className="px-6 py-4">{booking.contact}</td>
              <td className="px-6 py-4">{booking.email}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleDelete(booking._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
