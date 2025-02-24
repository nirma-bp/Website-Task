import React, { useState } from "react";
import img from "../images/logo.png";
import { IoMdCall } from "react-icons/io";
import {
  MdAttachEmail,
  MdAccessTimeFilled,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

function SectionTwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-200 relative">
      <div className="flex justify-between items-center p-3 ">
        <img src={img} alt="Logo" className="w-16 h-16 rounded-full" />
        <ul className="hidden md:flex gap-7 font-bold">
          <NavLink className="flex items-center gap-2 cursor-pointer">
            <IoMdCall className="text-pink-500" />
            <span>Call us</span>
          </NavLink>

          <NavLink className="flex items-center gap-2 cursor-pointer">
            <MdAttachEmail className="text-pink-500" />
            <span>Email us</span>
          </NavLink>

          <NavLink className="flex items-center gap-2 cursor-pointer">
            <MdAccessTimeFilled className="text-pink-500" />
            <div>
              Opening Time
              <span className="block font-light text-sm">
                Mon-Sun 9:00am-6:00pm
              </span>
            </div>
          </NavLink>
        </ul>

        <MdMenu
          className="text-3xl cursor-pointer md:hidden text-pink-800"
          onClick={() => setIsOpen(true)}
        />
      </div>

      <div>
        <ul className="flex hidden md:flex gap-4 md:gap-10 text-lg font-bold justify-center items-center mt-4">
          {/*  <NavLink className="cursor-pointer hover:text-pink-500">Home</li> */}
          <NavLink to="/" className="cursor-pointer hover:text-pink-500">
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="cursor-pointer hover:text-pink-500"
          >
            Services
          </NavLink>
          <NavLink to="/about" className="cursor-pointer hover:text-pink-500">
            About
          </NavLink>
          <NavLink to="/blog" className="cursor-pointer hover:text-pink-500">
            Blog
          </NavLink>
          <NavLink to="/contact" className="cursor-pointer hover:text-pink-500">
            Contact
          </NavLink>
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
              <NavLink
                to="/"
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/blog"
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className="cursor-pointer hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default SectionTwo;
