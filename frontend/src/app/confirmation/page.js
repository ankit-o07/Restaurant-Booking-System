"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const page = () => {
  const searchParams = useSearchParams();
  const [reservationData, setReservationData] = useState({});

  useEffect(() => {
    setReservationData({
      name: searchParams.get('name'),
      email: searchParams.get('email'),
      contact: searchParams.get('contact'),
      date: searchParams.get('date'),
      time: searchParams.get('time'),
      guests: searchParams.get('guests'),
    });
  }, [searchParams]);

  useEffect(() => {
    if (reservationData.name) {
      
      print();
    }
  }, [reservationData]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-3xl font-bold text-teal-600 mb-4 text-center">Booking Confirmation</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">Thank you for your reservation!</p>
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-800">Name:</p>
            <p className="text-gray-600">{reservationData.name}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-800">Email:</p>
            <p className="text-gray-600">{reservationData.email}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-800">Contact:</p>
            <p className="text-gray-600">{reservationData.contact}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-800">Date:</p>
            <p className="text-gray-600">{reservationData.date}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-800">Time:</p>
            <p className="text-gray-600">{reservationData.time}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold text-gray-800">Guests:</p>
            <p className="text-gray-600">{reservationData.guests}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
