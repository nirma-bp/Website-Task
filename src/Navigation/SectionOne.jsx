// import React from "react";

// function SectionOne() {
//   return (
//     <div className="flex flex-col  md:flex-row justify-between items-center  bg-black w-full ">
//       <h2 className="font-bold text-xl text-pink-400 text-center md:text-left ">
//         DIVINE FREIGHT INTERNATIONAL
//       </h2>

//       <ul className="flex flex-col md:flex-row gap-2 md:gap-6 font-bold mt-2 md:mt-0 text-center">
//         <li className="text-pink-400 cursor-pointer hover:text-white">
//           Tracking
//         </li>
//         <li className="text-pink-400  cursor-pointer hover:text-white">
//           Contact
//         </li>
//         <li className="text-pink-400  cursor-pointer hover:text-white">
//           Get a Quote
//         </li>
//         <li className="text-pink-400  cursor-pointer hover:text-white">FAQ</li>
//       </ul>
//     </div>
//   );
// }

// export default SectionOne;

import React from "react";

function SectionOne() {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-between items-center py-4">
        <h2 className="font-bold text-xl text-pink-400 text-center md:text-left">
          DIVINE FREIGHT INTERNATIONAL
        </h2>

        <ul className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-6 font-bold mt-2 md:mt-0 text-center">
          <li className="text-pink-400 cursor-pointer hover:text-white">
            Tracking
          </li>
          <li className="text-pink-400 cursor-pointer hover:text-white">
            Contact
          </li>
          <li className="text-pink-400 cursor-pointer hover:text-white">
            Get a Quote
          </li>
          <li className="text-pink-400 cursor-pointer hover:text-white">FAQ</li>
        </ul>
      </div>
    </div>
  );
}

export default SectionOne;
