import React from "react";
import pic from "../images/logo.png";

function SectionTwo() {
  return (
    <div className="h-full w-full bg-gray-50 py-16 px-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink-800 text-center">
        Divine Freight International
      </h1>

      <div className="mt-12 grid gap-10 md:grid-cols-2 items-center mx-auto max-w-6xl">
        <div className="relative bg-black p-6 rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
          <div className="relative">
            <img
              src={pic}
              alt="Shipping"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 rounded-xl"></div>
          </div>
          <p className="mt-4 text-white text-center text-lg font-medium leading-relaxed">
            Break Bulk shipping of{" "}
            <span className="font-bold">2000 units CO2 tanks</span>
            (202 CBM/42MT) from Shanghai to Karachi on chartered VSI MV HONG
            BO6.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-black p-6 rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
          <div className="relative">
            <img
              src={pic}
              alt="Shipping"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 rounded-xl"></div>
          </div>
          <p className="mt-4 text-white text-center text-lg font-medium leading-relaxed">
            Break Bulk shipping of{" "}
            <span className="font-bold">2000 units CO2 tanks</span>
            (202 CBM/42MT) from Shanghai to Karachi on chartered VSI MV HONG
            BO6.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
