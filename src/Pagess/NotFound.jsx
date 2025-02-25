import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-pink-600 text-white">
      <h1 className="text-7xl font-extrabold animate-bounce mb-4">404</h1>
      <p className="text-2xl font-semibold mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-black font-bold rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
      >
        Go Back Home
      </Link>
      
    </div>
  );
}

export default NotFound;
