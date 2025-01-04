import React from 'react';

function Page() {
  return (
    <div className="container mx-auto p-6">
      {/* Title Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-700">About Savory Haven</h1>
      </header>

      {/* History Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our History</h2>
        <p className="text-lg text-gray-700">
          Founded in 2005, Savory Haven has been serving delicious and authentic cuisines for over 15 years. 
          Our goal is to provide a memorable dining experience with a touch of tradition and innovation in every dish.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to deliver top-quality food, exceptional service, and a warm, welcoming atmosphere to all our guests. 
          We believe in using fresh, locally sourced ingredients to create dishes that satisfy both the body and soul.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Meet Our Team</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <img src="https://plus.unsplash.com/premium_photo-1664392388804-d728a3637d7f?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chef" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-600">Head Chef</p>
          </div>
          <div className="text-center">
            <img src="https://plus.unsplash.com/premium_photo-1682432517956-9c3c4f26ec0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <p className="font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-600">Restaurant Manager</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Our Location</h2>
        <p className="text-lg text-gray-700 mb-4">
          Located in the heart of the city, Savory Haven is easily accessible and provides a cozy ambiance perfect for any occasion.
        </p>
        <p className="text-lg text-gray-700">
          Address: 456, Food Street, Connaught Place, New Delhi, Delhi, 110001
        </p>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-semibold text-teal-600 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-4">
          Have any questions? We'd love to hear from you. Reach out to us for reservations, events, or any inquiries!
        </p>
        <p className="text-lg text-gray-700">
          Phone: +91 9876543210 <br />
          Email: contact@savoryhaven.com
        </p>
      </section>
    </div>
  );
}

export default Page;
