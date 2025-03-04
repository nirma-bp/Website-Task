import React from "react";

function Footer() {
  return (
    <div className=" block md:flex gap-14 bg-gray-300 ">
      <div className="py-16 px-6 md:px-12 lg:px-20 w-full md:w-1/2 ">
        <div className=" gap-12 items-center ">
          <div className="text-center md:text-left pt-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-800">
              Testimonials
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mt-4 border-l-4 border-pink-600 pl-4 inline-block">
              What our clients say about us
            </h2>
          </div>

          <div className="p-6 border-l-4 border-pink-600 w-auto">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-700 text-justify">
              THe best services diving freight International has rendered
              excellent by handling transportation of metro buses services from
              karachi to lahore we found their services{" "}
            </p>
          </div>

          {/* first div */}
          <div className=" p-4 ">
            {/* First Row */}
            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-lg font-semibold text-gray-800">Daweoo</p>
              <p className="text-gray-600">Salman Mehbob</p>
            </div>

            {/* Second Row */}
            <div className="flex justify-between">
              <p className="text-gray-700">Express</p>
              <p className="text-gray-700">SCMg Procurement Dept</p>
            </div>
          </div>
          {/* second div  */}
          {/* first div */}
          <div className=" p-4 ">
            {/* First Row */}
            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-lg font-semibold text-gray-800">
                Excellent Services
              </p>
            </div>
          </div>
          {/* 3rd div  */}
          <div className=" p-4 ">
            {/* First Row */}
            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-lg font-semibold text-gray-800">Daweoo</p>
              <p className="text-gray-600">Salman Mehbob</p>
            </div>

            {/* Second Row */}
            <div className="flex justify-between">
              <p className="text-gray-700">
                Genix Parma private Limited has been working with Divine freight
                International private limited since last few years and found
                them very professional
              </p>
            </div>
          </div>

          {/* foursth div  */}
          <div className=" p-4 ">
            {/* First Row */}
            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-lg font-semibold text-gray-800">Genix </p>
              <p className="text-gray-600">Wajid Hussain</p>
              <p>Business Manager & Supply Chain</p>
            </div>

            {/* Second Row */}
            <div className="flex justify-between">
              <p className="text-gray-700">Express</p>
              <p className="text-gray-700">SCMg Procurement Dept</p>
            </div>
          </div>
        </div>
      </div>
      {/* div 2  */}
      <div className="py-16 px-6 md:px-12 lg:px-20  w-full md:w-1/2">
        <div className=" items-left">
          <div className="text-left md:text-left pt-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-pink-800">
              WE ARE TRUSTED
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-black mt-4 border-l-4 border-pink-600 pl-4 inline-block">
              our clients
            </h2>
          </div>
          <div className=" p-4 ">
            {/* First Row */}
            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-lg font-semibold text-gray-800">Gul Ahmed</p>
              <p className="text-gray-600">GHANDHARA</p>
            </div>

            {/* Second Row */}
            <div className="flex justify-between">
              <p className="text-gray-700">DAEWOO EXPRESS</p>
              <p className="text-gray-700">SECMC</p>
            </div>
          </div>

          {/* 2nd  */}

          <div className=" p-4 ">
            {/* First Row */}
            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-lg font-semibold text-gray-800">VPL</p>
              <p className="text-gray-600">SOORTY Manuchar</p>
            </div>

            {/* Second Row */}
            <div className="flex justify-between">
              <p className="text-gray-700">VGOTEL</p>
              <p className="text-gray-700">NISHAT MILLS Hilton</p>
            </div>
          </div>
          {/* 3rd  */}
          <div className=" p-4 ">
            {/* First Row */}
            <div className="flex justify-between border-b pb-2 mb-2">
              <p className="text-lg font-semibold text-gray-800">Sunham </p>
              <p className="text-gray-600">Foroze 1888</p>
            </div>

            {/* Second Row */}
            <div className="flex justify-between">
              <p className="text-gray-700">Home Fashion</p>
              <p className="text-gray-700">Mills Limited</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
