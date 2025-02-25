import React, { useState } from "react";

function SeaFreightCommonComponent({ hTwo, p  ,hOne}) {
  const [message, setMessage] = useState();
  return (
    <div>
      <div className="max-w-4xl rounded-lg p-8 border-l-4 border-pink-500 mt-6">
        <h1 className="text-2xl font-bold p-3">{hOne}</h1>
        <label className="block text-gray-700 font-semibold mb-3 ">
          Message:
        </label>
        <textarea
          className="border border-gray-400 rounded-lg p-3 w-full h-32 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <h2 className="font-semibold text-2xl text-pink-700 my-3  ">{hTwo}</h2>
        <p className="text-lg md:text-xl leading-loose text-left justify-align">
          {p}
        </p>
      </div>
    </div>
  );
}

export default SeaFreightCommonComponent;
