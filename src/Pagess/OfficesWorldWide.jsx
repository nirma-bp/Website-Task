import React from "react";

function OfficesWorldWide() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center pt-9 gap-12  bg-gray-300  ">
      {/* <div className="flex  items-center text-center gap-6 bg-white p-6 rounded-lg "> */}
      {/* First Box */}
      <div className=" p-4 rounded-lg">
        <h1 className="text-4xl font-bold">8</h1>
        <p className="font-semibold mt-2">Offices Worldwide</p>
      </div>

      {/* Second Box */}
      <div className="p-4 rounded-lg">
        <h1 className="text-4xl font-bold">310</h1>
        <p className="font-semibold mt-2">Hard Working People</p>
      </div>

      {/* Third Box */}
      <div className=" p-4 rounded-lg">
        <h1 className="text-4xl font-bold">22</h1>
        <p className="font-semibold mt-2">Countries Covered</p>
      </div>

      {/* Fourth Box */}
      <div className="bp-4 rounded-lg">
        <h1 className="text-4xl font-bold">18</h1>
        <p className="font-semibold mt-2">Years of Experience</p>
      </div>
    </div>
    // </div>
  );
}

export default OfficesWorldWide;
