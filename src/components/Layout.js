import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar */}
      <aside className="w-1/3 md:w-1/4 bg-white shadow-lg p-6">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <MainContent />
      </main>
    </div>
  );
}
