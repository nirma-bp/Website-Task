import React, { useState } from "react";
import imgOne from "../images/imgone.png";
import imgTwo from "../images/imgTwo.jpg";
import SeaFreightCommonComponent from "./SeaFreightCommonComponent";
import {
  FaTruck,
  FaTrain,
  FaBox,
  FaSnowflake,
  FaShippingFast,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function SpecialServices() {
  const [loginData, setLoginData] = useState({
    phoneNumber: "",
    password: "",
  });
  // const [message, setMessage] = useState("");

  const handleChange = (e) => {
    console.log("Event: ", e);
    const { name, value } = e.target;
    console.log("name ", name, "values", value);
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginData({
      password: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <div className="w-full  grid grid cols-1   pt-9 ">
        {/* Content Section */}
        <div className="w-full block md:flex shadow-lg rounded-lg p-2  m-auto  ">
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <img src={imgOne} alt="" className="w-full h-auto" />
          </div>

          <div className="w-full lg:w-1/2  lg:p-20">
            <h1 className="text-xl md:text-2xl font-bold p-2">
              Price advantage
            </h1>
            <p className="text-xl md:text-lg md:text-xl leading-loose p-2 text-left pr-4">
              <span className="text-pink-400 font-semibold">
                Divine Freight International
              </span>
              (Private) Limited is taking care of all all the prices and the
              tries to deliver the soltution in much lesser cost than any other
              logistic solution providers . We take care of our customer money
            </p>
          </div>
        </div>
        {/* second section */}
        <div className="w-full block md:flex shadow-lg rounded-lg p-2 m-auto ">
          {/* Text Container */}
          <div className="w-full lg:w-1/2  lg:p-20 p-4">
            <h1 className="text-xl md:text-2xl font-bold">Our Effectiveness</h1>
            <p className="text-xl md:text-lg md:text-xl leading-loose text-left pr-4">
              <span className="text-pink-400 font-semibold">
                One logistics setup
              </span>
              Our logistics setup is capable of providing an optimized array of
              value-added logistical services with the provision of quality
              customer service.
            </p>
          </div>
          {/* Image Container */}
          <div className=" flex justify-center items-center w-full lg:w-1/2">
            <img src={imgTwo} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* third section  */}
        <div className="w-full block md:flex shadow-lg rounded-lg p-2 m-auto ">
          {/* Image Container */}
          <div className=" flex justify-center items-center w-full lg:w-1/2">
            <img src={imgTwo} alt="" className="w-full h-auto" />
          </div>

          {/* Text Container */}
          <div className="w-full lg:w-1/2  lg:p-20 p-4">
            <h1 className="text-xl md:text-2xl font-bold">Our Solutions</h1>
            <p className="text-xl md:text-lg md:text-xl leading-loose text-left pr-4">
              We have come a long way to develop our logistics skills at par
              with international standards and requirements. We deal in all
              kinds of logistics solutions.
            </p>
          </div>
        </div>

        {/* fourth  */}
        <div className="w-full block md:flex shadow-lg rounded-lg p-2 m-auto b">
          {/* Text Container */}
          <div className="w-full lg:w-1/2 lg:px-20 p-4">
            <h1 className="text-xl md:text-2xl font-bold">Special Solutions</h1>
            <p className="text-base md:text-xl leading-loose text-left pr-4">
              Our main objective is for your products to arrive always on time
              and in good order, allowing you to concentrate on your business
              challenges.
            </p>
            <ul className="text-lg md:text-xl leading-loose text-left list-disc ml-6">
              <li>Pre-planned Delivery Schedules</li>
              <li>Pick up and local roads deliveries</li>
              <li>Supply chain solution</li>
              <li>Door to door moves</li>
              <li>Express Deliveries</li>
              <li>Customs Brokerage</li>
              <li>Prompt Availability of price</li>
            </ul>
          </div>

          {/* Image Container */}
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <img src={imgTwo} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* fifth section */}
        <div className="block lg:flex  gap-4 ">
          <div className="w-full p-2 lg:w-1/2">
            <SeaFreightCommonComponent
              hTwo="A freight Solution which is focused on your supply chain goals"
              p=" Divine Freight International (private) limited offers a full of array
          of global ocear freight and transportaion services .We can handle
          almost any size of shipping , from less thank container loads ,
          special equipment and oversized cargo our advanced tracking provides
          visibilty of critical milestones throughouy the journey . We provide
          you fully confiure , comprehensive and multi-moal solutions"
            />
          </div>

          <div className=" rounded-lg w-full lg:w-1/2 p-2 lg:p-6 md:p-10">
            <h1 className="text-3xl font-bold text-pink-700  pl-3">
              Special Services
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 mt-2">
              Special Solutions
            </h2>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 border-b-2 border-blue-500 inline-block pb-1">
                Our Capabilities
              </h3>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex item-start gap-2 text-gray-700">
                  <FaTruck className="text-pink-700" /> Road Trucking
                </li>
                <li className="flex item-start gap-2 text-gray-700">
                  <FaTrain className="text-pink-700" /> Rail Services
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <FaBox className="text-pink-700" /> Conventional Loaded Dry
                  Containers
                </li>
                <li className="flex item-start gap-2 text-gray-700">
                  <FaShippingFast className="text-pink-700" /> Empty Container
                  Repositioning
                </li>
                <li className="flex item-start gap-2 text-gray-700">
                  <FaSnowflake className="text-pink-700" /> Refrigerated
                  Container Transportation
                </li>
                <li className="flex item-start gap-2 text-gray-700">
                  <FaTruck className="text-pink-700" /> Low Bed Vehicle
                </li>
                <li className="flex item-start gap-2 text-gray-700">
                  <FaTruck className="text-pink-700" /> Special Equipment
                  Trucking
                </li>
                <li className="flex item-start gap-2 text-gray-700">
                  <FaTruck className="text-pink-700" /> Out of Gauge
                </li>
                <li className="flex item-start gap-2 text-gray-700">
                  <FaTruck className="text-pink-700" /> Small Trucks for Swift
                  Deliveries
                </li>
                <li className="flex item-start gap-2 text-gray-700">
                  <FaShippingFast className="text-pink-700" /> Supply Chain
                  Deliveries
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Road Transport   */}
        <div className="w-full block lg:flex shadow-lg rounded-lg lg:p-8 m-auto">
          {/* Text & Component Container */}
          <div className="w-full p-2  lg:w-1/2 ">
            <SeaFreightCommonComponent
              hTwo="Road Transport"
              p="It ensures your product arrives where it needs. Whether you need to handle a single load, a spike in volume, or achieve a higher level of availability in your transportation speed, we know what it takes to get your business moving. Our services deliver coverage of more freight through one source by utilizing a comprehensive portfolio of transportation solutions, including truckloads, Intermodal, Refrigerated, and Less-than-Truckload (LTL) services. We provide a complete transportation outsource solution for even the toughest loads to move."
            />
          </div>

          <div className=" w-full lg:w-1/2">
            <h1 className="text-4xl p-3 text-black font-semibold ">
              Welcome to Divine
            </h1>
            <div>
              <h1 className="text-2xl text-pink-700 font-semibold ">
                Login with Password
              </h1>
              <form onSubmit={handleSubmit} className=" w-full px-4">
                <div className=" mt-3 w-full flex flex-col ">
                  <label className="pb-2 ">Phone Number / Email</label>
                  <input
                    name="phoneNUmber"
                    onChange={handleChange}
                    value={loginData.phoneNumber}
                    placeholder="Enter your phone number or email"
                    type="text"
                    className="border-[1px] border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 "
                  />
                </div>
                <div className=" mt-3 w-full flex flex-col ">
                  <div className="flex justify-between">
                    <label className="pb-2 ">Password</label>
                    <NavLink to={"/"} className="text-blue-800  text-sm">
                      Forgot Password?
                    </NavLink>
                  </div>

                  <input
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    type="password"
                    className="border-[1px] border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 "
                  />
                </div>

                <button
                  type="submit"
                  className=" w-full mt-9 bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 "
                >
                  Login
                </button>
                <div className=" flex justify-between gap-7">
                  <button className=" w-full mt-9 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 ">
                    FaceBook
                  </button>
                  <button className=" w-full mt-9 bg-black text-white py-3 rounded-lg font-semibold hover:bg-pink-600 ">
                    Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* AIr freight  */}
        <div className=" lg:flex gap-4 block">
          <div className="w-full p-3 lg:w-1/2 lg:p-2 ">
            <SeaFreightCommonComponent
              hOne="Air freight"
              hTwo=" A quality time -definite to the world "
              p={
                "With u rcomprehensive range of time definite guaranted and cost saving options , Divine freight international can meet you air freight requirements with reliability and profesionalism . We can address any challenges you have with transporting your air freight by providing innovative ideas and the means to develop and implemnt solutions . to get th ejob done . We are specialized in providing safe speedy and the cost-effective solutions for all international air feight routes . Our air freight services are adjustable as urgency or requirement change , because our air products , has been designed to meet all logistics challenges you make your supply chain goals more effective and successfull."
              }
            />
          </div>

          <div className="w-full p-3 lg:w-1/2 lg:p-2 lg:mt-9 ">
            <h1 className="font-semibold text-2xl text-pink-700 my-3  ">
              Multimodal product (Sea _ Air , Air - Sea traffic )
            </h1>
            <p className="text-lg md:text-xl leading-loose text-left justify-align">
              When air freight is over the budget and sea freight will be
              toolate . MUltimodal logistics will be th eright solutions, by
              combining sea amd air freight modes , you achieve many benefits in
              terms of posibilty to adjust transmit time and cost to your
              requirement s , enabling the organizating to make the best
              posisible use of transportation option an drealizing actual cost
              saving through the process . Divine freight international is
              providing is an effective balanced between the speed of air
              tranport and the economical benifits of ocean transport{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialServices;
