"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useRouter } from 'next/navigation';

function page() {
  const [value, setValue] = useState(new Date());
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [formData, setFormData] = useState({
    guests: '',
    name: '',
    email: '',
    contact: '',
  });
  const router = useRouter(); 
  const formattedDate = value.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const disablePastDates = ({ date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const checkAvailability = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/check-availability?date=${formattedDate}`);
      const data = await response.json();
      if (response.ok) {
        setAvailability(data.slots);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
    setLoading(false);
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const bookingData = {
      ...formData,
      date: formattedDate,
      time: selectedSlot?.slotTime || '',
    };
    

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        router.push(`/confirmation?name=${bookingData.name}&email=${bookingData.email}&contact=${bookingData.contact}&date=${bookingData.date}&time=${bookingData.time}&guests=${bookingData.guests}`);    
        setFormData({
          guests: '',
          name: '',
          email: '',
          contact: '',
        });
        setSelectedSlot(null);
      } else {
        alert('Failed to book, please try another slot.');
      }
    } catch (error) {
      console.error('Error booking slot:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="mt-5 flex flex-col space-y-8">
      {/* Calendar and Slot Selection */}
      <div className="mt-5 flex space-x-4">
        <div className="flex flex-col w-1/2 items-center">
          <Calendar onChange={setValue} value={value} tileDisabled={disablePastDates} />
          <div className="mt-5 flex justify-center">
            <button
              onClick={checkAvailability}
              className="bg-teal-100 hover:bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500"
            >
              {loading ? 'Checking Availability...' : 'Check Availability'}
            </button>
          </div>
          <p className="mt-3">Selected date: {value.toDateString()} {formattedDate}</p>
        </div>

        <div className="flex flex-col w-1/2 items-center">
          <div className="mt-4">
            {availability.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {availability.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlotSelection(slot)}
                    className={`p-2 rounded ${slot.isBooked ? 'bg-gray-300 cursor-not-allowed' : 'bg-teal-500 hover:bg-teal-700'}`}
                    disabled={slot.isBooked}
                  >
                    {slot.slotTime}: {slot.isBooked ? 'Booked' : 'Available'}
                  </button>
                ))}
              </div>
            ) : (
              <p>No slots available for the selected date.</p>
            )}
          </div>

          {selectedSlot && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Selected Slot:</h3>
              <p>Time: {selectedSlot.slotTime}</p>
              <p>Status: {selectedSlot.isBooked ? 'Booked' : 'Available'}</p>
            </div>
          )}
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
              Confirm Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              min="1"
              max="10"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Enter your contact details"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Book Table
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
