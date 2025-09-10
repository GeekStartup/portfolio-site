import React from "react";

export default function Profile() {
  return (
    <aside className="w-full md:w-1/3 bg-gray-100 p-6 shadow-lg rounded-lg">
      <div className="flex flex-col items-center text-center">
        <img
          src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">Ashish K Nayak</h1>
        <p className="text-gray-600">Senior Technical Lead</p>

        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <p>📍 Bengaluru, India</p>
          <p>📧 ashish@example.com</p>
          <p>📞 +91 98765 43210</p>
          <p>🌐 linkedin.com/in/ashishnayak</p>
        </div>
      </div>
    </aside>
  );
}
