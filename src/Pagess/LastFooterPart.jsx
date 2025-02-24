import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

function LastFooterPart() {
  return (
    <div className="border-4 border-black flex justify-center items-center justify-between p-4 gap-24 pt-9 pb-9 bg-black ">
      <div className="flex gap-2 ">
        <span className="text-pink-700 text-2xl ">
          <IoCallSharp />
        </span>
        <p className="font-semibold text-white">+92-313-9114418</p>
      </div>
      <div className="flex gap-2 ">
        <span className="text-pink-700 text-2xl ">
          <MdAttachEmail />
        </span>
        <p className="font-semibold text-white">Sales@divinefreightintl.com</p>
      </div>
      <div className="flex gap-2 ">
        <span className="text-pink-700 text-2xl ">
          <IoTimeSharp />
        </span>
        <p className="font-semibold text-white">
          Monday to Friday: 9:00 AM to 10:00 PM
        </p>
      </div>
    </div>
  );
}

export default LastFooterPart;
