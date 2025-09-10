import React from "react";
import Profile from "./components/Profile";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Sidebar */}
      <Profile />

      {/* Main Content */}
      <main className="flex-1 space-y-6">
        <Summary />
        {/* TODO: Add Experience, Skills, Education as new components later */}
      </main>
    </div>
  );
}

export default App;
