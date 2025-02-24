import React from "react";

function Box({ heading }) {
  return (
    <div>
      <div className="w-full pt-12 h-full  border-2 border-gray-100  p-8 flex bg-pink-50 flex-col items-center text-center rounded-lg shadow-xl bg-white transition-transform hover:scale-105 duration-300">
        <h1 className="mt-4 text-xl font-bold text-pink-800 justify-center item-center text-center flex  ">
          {heading}
        </h1>
      </div>
    </div>
  );
}

export default Box;
