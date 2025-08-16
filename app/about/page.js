import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18191a] px-4 py-10">
      <div className="max-w-4xl w-full">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-white mb-8 text-center">
          About Nextvent
        </h1>

        {/* Card */}
        <div className="bg-[#242526] rounded-3xl shadow-2xl p-8 space-y-6 border border-gray-700">
          <h2 className="text-3xl font-semibold text-purple-500">Nextvent</h2>

          <p className="text-gray-300 text-lg">
            Nextvent is a modern event management platform developed to simplify
            event creation, management, and participation. It leverages Next.js
            for a fast and dynamic frontend experience and provides a sleek
            interface for users to browse, register, and manage events
            seamlessly.
          </p>

          <p className="text-gray-300 text-lg font-medium">
            Key Features of Nextvent:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Dynamic event listing with responsive design</li>
            <li>Interactive registration and booking system</li>
            <li>Real-time notifications for upcoming events</li>
            <li>Admin dashboard for easy event management</li>
            <li>Integration with email and social media platforms</li>
          </ul>

          <p className="text-gray-300 text-lg">
            The platform aims to provide both event organizers and participants
            with a seamless and engaging experience, ensuring no important
            update or opportunity is missed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
