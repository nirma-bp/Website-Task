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

// import React from "react";

// function Footer() {
//   return (
//     <div className="block md:flex gap-14 bg-gray-200 p-10">
//       {/* Left Section - Testimonials */}
//       <div className="w-full md:w-1/2 p-6">
//         <div className="text-center md:text-left">
//           <h1 className="text-4xl font-bold text-pink-800">Testimonials</h1>
//           <h2 className="text-2xl font-semibold text-black mt-4 border-l-4 border-pink-600 pl-4 inline-block">
//             What our clients say about us
//           </h2>
//         </div>

//         {/* Testimonial Cards */}
//         <div className="space-y-6 mt-8">
//           {/* Testimonial 1 */}
//           <div className="bg-white shadow-md rounded-lg p-5 border-l-4 border-pink-600">
//             <p className="text-lg font-medium text-gray-700 leading-relaxed">
//               "The best services! Divine Freight International has rendered
//               excellent handling of transportation of metro buses from Karachi
//               to Lahore. We found their services exceptional."
//             </p>
//             <div className="mt-4 text-right">
//               <p className="font-semibold text-gray-800">Daewoo</p>
//               <p className="text-gray-600">Salman Mehbob</p>
//             </div>
//           </div>

//           {/* Testimonial 2 */}
//           <div className="bg-white shadow-md rounded-lg p-5 border-l-4 border-pink-600">
//             <p className="text-lg font-medium text-gray-700 leading-relaxed">
//               "Excellent service and professionalism!"
//             </p>
//             <div className="mt-4 text-right">
//               <p className="font-semibold text-gray-800">Genix Pharma</p>
//               <p className="text-gray-600">Wajid Hussain</p>
//               <p className="text-sm text-gray-500">
//                 Business Manager & Supply Chain
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Section - Clients */}
//       <div className="w-full md:w-1/2 p-6">
//         <div className="text-left">
//           <h1 className="text-4xl font-semibold text-pink-800">
//             We Are Trusted
//           </h1>
//           <h2 className="text-2xl font-semibold text-black mt-4 border-l-4 border-pink-600 pl-4 inline-block">
//             Our Clients
//           </h2>
//         </div>

//         {/* Client List */}
//         <div className="grid grid-cols-2 gap-6 mt-8">
//           {/* Row 1 */}
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <p className="text-lg font-semibold text-gray-800">Gul Ahmed</p>
//             <p className="text-gray-600">GHANDHARA</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <p className="text-lg font-semibold text-gray-800">
//               DAEWOO EXPRESS
//             </p>
//             <p className="text-gray-600">SECMC</p>
//           </div>

//           {/* Row 2 */}
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <p className="text-lg font-semibold text-gray-800">VPL</p>
//             <p className="text-gray-600">SOORTY Manuchar</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <p className="text-lg font-semibold text-gray-800">VGOTEL</p>
//             <p className="text-gray-600">NISHAT MILLS Hilton</p>
//           </div>

//           {/* Row 3 */}
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <p className="text-lg font-semibold text-gray-800">Sunham</p>
//             <p className="text-gray-600">Foroze 1888</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-4">
//             <p className="text-lg font-semibold text-gray-800">Home Fashion</p>
//             <p className="text-gray-600">Mills Limited</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
