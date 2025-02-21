// import React from "react";

// function WhoWeAre({ para, heading, headingtwo }) {
//   return (
//     <div className="border-4 border-black pt-36 p-4 block md:flex w-full justify-between items-center mt-10 ">
//       <div className="w-full md:w-1/2 ">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-800 text-center">
//           {heading}
//         </h1>
//         <h1 className="text-2xl mt-5 border-l-4 border-pink-800 md:text-3xl border-2 border-black lg:text-3xl font-bold text-black text-center">
//           {headingtwo}
//         </h1>
//       </div>
//       <div className="w-full md:w-1/2 ">
//         <p className="text-justify text-2xl font-semibold leading-relaxed">
//           {para}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default WhoWeAre;

import React from "react";

function WhoWeAre({ para, heading, headingtwo }) {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 rounded-xl shadow-lg">
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
