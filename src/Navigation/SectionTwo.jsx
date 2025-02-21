// import React from "react";
// import img from "../images/logo.png";
// import { IoMdCall } from "react-icons/io";
// import { MdAttachEmail, MdAccessTimeFilled } from "react-icons/md";

// function SectionTwo() {
//   return (
//     <div className="bg-gray-100 p-4">
//       <div className="flex flex-col md:flex-row justify-between items-center p-3 px-4 text-center md:text-left">
//         <img
//           src={img}
//           alt="Logo"
//           className="w-16 h-16 rounded-full mb-4 md:mb-0"
//         />

//         <ul className="flex flex-col md:flex-row gap-4 md:gap-7 font-bold hidden md:block">
//           <li className="flex items-center gap-2">
//             <IoMdCall className="text-pink-500" />
//             <span>Call us</span>
//           </li>

//           <li className="flex items-center gap-2">
//             <MdAttachEmail className="text-pink-500" />
//             <span>Email us</span>
//           </li>

//           <li className="flex items-center gap-2">
//             <MdAccessTimeFilled className="text-pink-500" />
//             <div>
//               Opening Time
//               <span className="block font-light text-sm">
//                 Mon-Sun 9:00am-6:00pm
//               </span>
//             </div>
//           </li>
//         </ul>
//       </div>

//   <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-lg font-bold justify-center items-center mt-4">
//     <li className="cursor-pointer hover:text-pink-500">Home</li>
//     <li className="cursor-pointer hover:text-pink-500">Services</li>
//     <li className="cursor-pointer hover:text-pink-500">About</li>
//     <li className="cursor-pointer hover:text-pink-500">Blog</li>
//     <li className="cursor-pointer hover:text-pink-500">Contact</li>
//   </ul>
//     </div>
//   );
// }

// export default SectionTwo;

import React, { useState } from "react";
import img from "../images/logo.png";
import { IoMdCall } from "react-icons/io";
import {
  MdAttachEmail,
  MdAccessTimeFilled,
  MdMenu,
  MdClose,
} from "react-icons/md";

function SectionTwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-200 p-4 relative">
      <div className="flex justify-between items-center p-3 px-4">
        <img src={img} alt="Logo" className="w-16 h-16 rounded-full" />
        <ul className="hidden md:flex gap-7 font-bold">
          <li className="flex items-center gap-2 cursor-pointer">
            <IoMdCall className="text-pink-500" />
            <span>Call us</span>
          </li>

          <li className="flex items-center gap-2 cursor-pointer">
            <MdAttachEmail className="text-pink-500" />
            <span>Email us</span>
          </li>

          <li className="flex items-center gap-2 cursor-pointer">
            <MdAccessTimeFilled className="text-pink-500" />
            <div>
              Opening Time
              <span className="block font-light text-sm">
                Mon-Sun 9:00am-6:00pm
              </span>
            </div>
          </li>
        </ul>

        <MdMenu
          className="text-3xl cursor-pointer md:hidden text-pink-800"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 text-lg font-bold justify-center items-center mt-4">
          <li className="cursor-pointer hover:text-pink-500">Home</li>
          <li className="cursor-pointer hover:text-pink-500">Services</li>
          <li className="cursor-pointer hover:text-pink-500">About</li>
          <li className="cursor-pointer hover:text-pink-500">Blog</li>
          <li className="cursor-pointer hover:text-pink-500">Contact</li>
        </ul>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          {/* Side Drawer */}
          <div className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-full bg-white shadow-lg p-6 transition-all">
            {/* Close Button */}
            <MdClose
              className="text-3xl text-pink-800 cursor-pointer absolute top-5 right-5"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Items */}
            <ul className="flex flex-col gap-6 mt-10 text-lg font-bold">
              <li
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </li>
              <li
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                Services
              </li>
              <li
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </li>
              <li
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </li>
              <li
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SectionTwo;
