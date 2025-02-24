import React from "react";

function WhoWeAre({ para, heading, headingtwo }) {
  return (
    <div className=" py-16 px-6 md:px-12 lg:px-20 rounded-xl ">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left pt-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-800">
            {heading}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mt-4 border-l-4 border-pink-600 pl-4 inline-block">
            {headingtwo}
          </h2>
        </div>

        <div className="p-6 border-l-4 border-pink-600 pt-24">
          <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-700 text-justify">
            {para}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
