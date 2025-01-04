import React from 'react';

function page() {
  return (
    <div className="h-screen flex items-center justify-center bg-teal-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-teal-800">Coming Soon</h1>
        <p className="mt-4 text-lg text-teal-600">We're working hard to bring something amazing your way!</p>
        <div className="mt-6">
          <p className="text-teal-600">Stay tuned for updates!</p>
          <p className="text-sm text-teal-500">Follow us on our social media for the latest news.</p>
        </div>
      </div>
    </div>
  );
}

export default page;
