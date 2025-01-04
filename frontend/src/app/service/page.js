import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Introduction Section */}
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-950 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">We offer a variety of dining experiences to make your meal memorable.</p>
      </section>

      {/* Menu Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-950 mb-6">Our Specialities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300" alt="Dish 1" className="mb-4 w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold text-blue-950 mb-2">Grilled Salmon</h3>
            <p className="text-gray-600">A delicately grilled salmon served with a side of vegetables.</p>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300" alt="Dish 2" className="mb-4 w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold text-blue-950 mb-2">Veggie Burger</h3>
            <p className="text-gray-600">A delicious plant-based burger served with crispy fries.</p>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300" alt="Dish 3" className="mb-4 w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold text-blue-950 mb-2">Pasta Primavera</h3>
            <p className="text-gray-600">Fresh pasta mixed with seasonal vegetables and a light pesto sauce.</p>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-blue-950 mb-4">Make a Reservation</h2>
        <p className="text-lg text-gray-600 mb-4">Book your table now and enjoy a delightful dining experience with us.</p>
        <Link href="/book-date" className="bg-blue-500 text-white font-bold py-2 px-6 rounded-xl hover:bg-blue-600 transition duration-200">
          Reserve Now
        </Link>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold text-blue-950 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600 mb-4">Have any questions? Get in touch with us!</p>
        <p className="text-lg text-blue-500">Phone: +91 9876543210</p>
        <p className="text-lg text-blue-500">Email: contact@savoryhaven.com</p>
      </section>
    </div>
  );
}

export default page;
