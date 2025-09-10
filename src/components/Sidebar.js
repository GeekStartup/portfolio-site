import React from "react";

export default function Sidebar() {
  return (
    <div>
      {/* Profile Photo */}
      <div className="flex flex-col items-center">
        <img
          src="/profile.jpg"
          alt="Ashish K Nayak"
          className="w-32 h-32 rounded-full border-4 border-primary mb-4"
        />
        <h1 className="text-xl font-bold text-gray-800">Ashish K. Nayak</h1>
        <p className="text-sm text-gray-600">Technology Leader</p>
      </div>

      {/* Contact */}
      <div className="mt-6">
        <h2 className="font-semibold text-gray-700">Contact</h2>
        <p className="text-sm">📧 ashish.k.nayak@email.com</p>
        <p className="text-sm">📱 +91-XXXXXXXXXX</p>
        <p className="text-sm">📍 India</p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="font-semibold text-gray-700">Skills</h2>
        <ul className="text-sm list-disc list-inside">
          <li>Agile Delivery</li>
          <li>Product Engineering</li>
          <li>Generative AI</li>
          <li>Cloud & DevOps</li>
        </ul>
      </div>

      {/* Education */}
      <div className="mt-6">
        <h2 className="font-semibold text-gray-700">Education</h2>
        <p className="text-sm">
          Bachelor of Engineering (CSE) <br />
          Visvesvaraya Technological University
        </p>
      </div>
    </div>
  );
}
