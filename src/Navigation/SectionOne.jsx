import React from "react";

function SectionOne() {
  return (
    <div className="flex flex-col  md:flex-row justify-between items-center p-4 bg-pink-100 w-full">
      <h2 className="font-bold text-xl text-brown-400 text-center md:text-left">
        DIVINE FREIGHT INTERNATIONAL
      </h2>

      <ul className="flex flex-col md:flex-row gap-2 md:gap-6 font-bold mt-2 md:mt-0 text-center">
        <li className="cursor-pointer hover:text-pink-500">Tracking</li>
        <li className="cursor-pointer hover:text-pink-500">Contact</li>
        <li className="cursor-pointer hover:text-pink-500">Get a Quote</li>
        <li className="cursor-pointer hover:text-pink-500">FAQ</li>
      </ul>
    </div>
  );
}

export default SectionOne;
