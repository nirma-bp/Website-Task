import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";

function LastFooterPart() {
  return (
    <div className="border-4 border-black flex flex-wrap justify-center w-full items-center gap-8 md:gap-24 px-6 py-6 bg-black">
      {/* Phone */}
      <div className="flex items-center gap-2 text-center">
        <span className="text-pink-700 text-2xl">
          <IoCallSharp />
        </span>
        <p className="font-semibold text-white text-sm md:text-base">
          +92-313-9114418
        </p>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2 text-center">
        <span className="text-pink-700 text-2xl">
          <MdAttachEmail />
        </span>
        <p className="font-semibold text-white text-sm md:text-base break-all">
          Sales@divinefreightintl.com
        </p>
      </div>

      {/* Working Hours */}
      <div className="flex items-center gap-2 text-center">
        <span className="text-pink-700 text-2xl">
          <IoTimeSharp />
        </span>
        <p className="font-semibold text-white text-sm md:text-base">
          Monday to Friday: 9:00 AM - 10:00 PM
        </p>
      </div>
    </div>
  );
}

export default LastFooterPart;
