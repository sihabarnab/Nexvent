import Link from "next/link";
import React from "react";

const ActionButton = ({ fromDetails }) => {
  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails ? "flex-1" : ""}`}>
      <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 active:scale-95">
        Interested
      </button>

      <Link
        href="/payment"
        className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white font-medium border border-gray-500 shadow hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 active:scale-95 text-center"
      >
        Going
      </Link>
    </div>
  );
};

export default ActionButton;
