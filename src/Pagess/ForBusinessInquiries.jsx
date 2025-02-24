import React, { useState } from "react";

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
    <div className="w-full flex flex-col md:flex-row justify-center items-center  bg-gray-300  pb-20">
      {/* First Div */}
      <div className="pt-9 w-full md:w-1/2  bg-gray-300  gap-5 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
          <div className="border-2 border-gray-400 rounded-lg w-46 h-40"></div>
          <div className="border-2 border-gray-400 rounded-lg w-46 h-40"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
          <div className="border-2 border-gray-400 rounded-lg w-46 h-40"></div>
          <div className="border-2 border-gray-400 rounded-lg w-46 h-40"></div>
        </div>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-full md:w-1/2 mt-9 md:pt-24 px-4 lg:pr-5"
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
