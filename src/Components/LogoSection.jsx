import React from "react";
import logo from "../images/logo.png";

function LogoSection({ para, headingtwo }) {
  return (
    <div className=" p-3 flex bg-pink-50 flex-col items-center text-center rounded-lg shadow-xl bg-white transition-transform hover:scale-105 duration-300">
      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 rounded-full border-2 border-pink-500 mt-6 "
      />
      <h2 className="mt-4 text-xl font-bold text-pink-800">{headingtwo}</h2>
      <p className="mt-2 text-gray-700 text-lg leading-relaxed">{para}</p>
    </div>
  );
}

export default LogoSection;
