"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"

function BookTable() {
  const [guests, setGuests] = useState(1);
  const router = useRouter();

  const handleBooking = () => {
    // Navigate to the second page with the number of guests as a query parameter
    router.push(`/book-date?guests=${guests}`);
  };

  return (
    <>
      <div className="mt-5 flex justify-center">
        <label htmlFor="NoOfGuest" className="mr-3">
          No of guests:
        </label>
        <input
          type="number"
          id="NoOfGuest"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      <div className="mt-5 flex justify-center">
        <button
          onClick={handleBooking}
          className="bg-teal-100 hover:bg-white text-teal-800 rounded-full py-3 px-8 shadow-md hover:shadow-2xl transition duration-500"
        >
          Book Seat Now
        </button>
      </div>
    </>
  );
}

export default BookTable;
