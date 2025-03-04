import React, { useState } from "react";
import imgone from "../images/imgFour.png";
import img2 from "../images/imgThree.png";
import img3 from "../images/imgTwo.jpg";
import img1 from "../images/imgone.png";

function ForBusinessInquiries() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, phone, message });
    alert("Form Submitted Successfully!");
  };

  return (
    // <div className="flex w-full justify-center items-center  bg-gray-200 p-4">
    <div className="w-full block lg:flex  justify-center items-center  bg-gray-300  pb-20">
      {/* First Div */}
      <div className="pt-9 w-full lg:w-1/2 lg:mt-12 bg-gray-300 block  lg:flex flex-col justify-center items-center">
        <div className="lg:flex block p-9 gap-4 bordder-4 border-blue-900">
          <div className="rounded-lg w-full  lg:w-1/2 h-auto">
            <img src={imgone} alt="" className="rounded-lg" />
          </div>
          <div className=" rounded-lg  w-full mt-9 lg:mt-0  lg:w-1/2  h-auto">
            <img src={img1} alt="" className="rounded-lg" />
          </div>
        </div>

        <div className="lg:flex block p-9 gap-4 bordder-4 border-blue-900">
          <div className="rounded-lg w-full  lg:w-1/2 h-auto">
            <img src={img2} alt="" className="rounded-lg" />
          </div>
          <div className=" rounded-lg w-full  mt-9 lg:mt-0  lg:w-1/2  h-auto">
            <img src={img3} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full lg:w-1/2 mt-9 md:pt-24 px-4 lg:pr-5"
      >
        <h1 className="text-2xl font-bold text-pink-800 mb-6 text-center">
          For Business Inquiries
        </h1>

        <div>
          <label className="block text-gray-700 font-semibold">
            Enter Name:
          </label>
          <input
            className="border border-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Enter Email:
          </label>
          <input
            className="border border-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">
            Phone Number:
          </label>
          <input
            className="border border-gray-400 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Message:</label>
          <textarea
            className="border border-gray-400 rounded-lg p-3 w-full h-32 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-700 text-white font-semibold py-3 rounded-lg hover:bg-black  transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ForBusinessInquiries;
