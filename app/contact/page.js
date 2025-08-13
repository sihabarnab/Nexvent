"use client"; // <- Important for useState and hooks
import React, { useState } from "react";

const FloatingInput = ({ label, type = "text" }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative mt-6">
      {type !== "textarea" ? (
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" "
          className="block w-full px-3 pt-4 pb-5 border border-gray-700 rounded-md bg-[rgba(20,20,20,0.8)] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
      ) : (
        <textarea
          rows="4"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" "
          className="block w-full px-3 pt-5 pb-2 border border-gray-700 rounded-md bg-[rgba(20,20,20,0.8)] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
        />
      )}

      <label
        className={`absolute left-3 px-1 bg-[rgba(30,30,30,0.85)] transition-all duration-200 ${
          value
            ? "-top-2 text-purple-500 text-xs"
            : "top-5 text-gray-400 text-base"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 bg-[rgba(30,30,30,0.85)] backdrop-blur-md rounded-3xl shadow-2xl p-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6 animate-fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 text-lg">
            We'd love to hear from you! Fill out the form or reach us via the
            details below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-purple-500 text-2xl">📍</span>
              <p className="text-gray-300">123 Street Name, City, Country</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-500 text-2xl">📧</span>
              <p className="text-gray-300">info@example.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-500 text-2xl">📞</span>
              <p className="text-gray-300">+123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="flex flex-col gap-6">
          <FloatingInput label="Name" />
          <FloatingInput label="Email" type="email" />
          <FloatingInput label="Message" type="textarea" />

          <button
            type="submit"
            className="bg-purple-500 text-white font-semibold py-2 rounded-md shadow hover:bg-purple-600 transition mt-4"
          >
            Send Message
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        `}
      </style>
    </div>
  );
};

export default ContactPage;
