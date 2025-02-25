import React, { useState } from "react";
import SeaFreightCommonComponent from "./SeaFreightCommonComponent";
import {
  FaTruck,
  FaTrain,
  FaBox,
  FaSnowflake,
  FaShippingFast,
} from "react-icons/fa";

function SpecialServices() {
  const [message, setMessage] = useState("");
  return (
    <div>
      <div className="grid grid cols-1 md:grid-cols-2 gap-12 pt-9 ">
        {/* Content Section */}
        <div className="max-w-4xl shadow-lg rounded-lg p-8 border-l-4 border-pink-500">
          <h1 className="text-2xl font-bold">Price advantage</h1>
          <p className="text-lg md:text-xl leading-loose text-left">
            <span className="text-pink-400 font-semibold">
              Divine Freight International
            </span>
            (Private) Limited is taking care of all all the prices and the tries
            to deliver the soltution in much lesser cost than any other logistic
            solution providers . We take care of our customer money
          </p>
        </div>

        <div className="max-w-4xl shadow-lg rounded-lg p-8 border-l-4 border-pink-500 mt-6">
          <h1 className="text-2xl font-bold">Our Effectiveness</h1>
          <p className="text-lg md:text-xl leading-loose text-left">
            <span className="text-pink-400 font-semibold">
              One logistics setup
            </span>
            Our logistics setup which is capable to provide optimized array o
            value added logistical services with the provision of quality
            customer services
          </p>
        </div>

        <div className="max-w-4xl shadow-lg rounded-lg p-8 border-l-4 border-pink-500 mt-6">
          <h1 className="text-2xl font-bold">Our Solutions</h1>
          <p className="text-lg md:text-xl leading-loose text-left">
            We have come along way to develop our logistics skilss at par with
            International standards and requirements , we deal in all kind of
            logistics solutions
          </p>
        </div>

        <div className="max-w-4xl  shadow-lg rounded-lg p-8 border-l-4 border-pink-500 mt-6">
          <h1 className="text-2xl font-bold">SPecial Solutions</h1>
          <p className="text-lg md:text-xl leading-loose text-left">
            Our main objective is for your products to arriva always ontime and
            in good order , allowing you to concentrate on your business
            challenges
            <ul className="text-lg md:text-xl leading-loose text-left">
              <li>Pre-planned Devlivery Schedules</li>
              <li>Pick up and local roads deliveries</li>
              <li>Supply chain solution</li>
              <li>Door to door moves</li>
              <li>Express DEliveries</li>
              <li>Customer Brokerage</li>
              <li>Prompt Availabilty of price</li>
            </ul>
          </p>
        </div>

        <div>
          <SeaFreightCommonComponent
            hTwo="A freight Solution which is focused on your supply chain goals"
            p=" Divine Freight International (private) limited offers a full of array
          of global ocear freight and transportaion services .We can handle
          almost any size of shipping , from less thank container loads ,
          special equipment and oversized cargo our advanced tracking provides
          visibilty of critical milestones throughouy the journey . We provide
          you fully confiure , comprehensive and multi-moal solutions"
          />

          <div className=" rounded-lg p-6 md:p-10">
            {/* Special Services Header */}
            <h1 className="text-3xl font-bold text-pink-700 border-l-4 border-pink-700 pl-3">
              Special Services
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 mt-2">
              Special Solutions
            </h2>

            {/* Our Capabilities Section */}
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
        <div>
          <SeaFreightCommonComponent
            hTwo="Road Transport"
            p="It ensures your product arrives where it needs . whether you need to handle a single load , a spike in volume , or you need to achieve a higher level of in availabilty in your complete transportation speed , we know what what it takes to get your business moving . our services deliver coverage of more frieght through one source by utilizing a comprehensive portfolio of transportation solutions , including truck oads , INtermodal , Regrigerated and less - thank truck load (LTL) services we provide a complete tranportation outsource to a solution of a tough load to move "
          />
          <h1>divine login form it will place here </h1>
        </div>

        {/* AIr freight  */}
        <div>
          <SeaFreightCommonComponent
            hOne="Air freight"
            hTwo=" A quality time -definite to the world "
            p={
              "With u rcomprehensive range of time definite guaranted and cost saving options , Divine freight international can meet you air freight requirements with reliability and profesionalism . We can address any challenges you have with transporting your air freight by providing innovative ideas and the means to develop and implemnt solutions . to get th ejob done . We are specialized in providing safe speedy and the cost-effective solutions for all international air feight routes . Our air freight services are adjustable as urgency or requirement change , because our air products , has been designed to meet all logistics challenges you make your supply chain goals more effective and successfull."
            }
          />

          <h1 className="font-semibold text-2xl text-pink-700 my-3  ">
            Multimodal product (Sea _ Air , Air - Sea traffic )
          </h1>
          <p className="text-lg md:text-xl leading-loose text-left justify-align">
            When air freight is over the budget and sea freight will be toolate
            . MUltimodal logistics will be th eright solutions, by combining sea
            amd air freight modes , you achieve many benefits in terms of
            posibilty to adjust transmit time and cost to your requirement s ,
            enabling the organizating to make the best posisible use of
            transportation option an drealizing actual cost saving through the
            process . Divine freight international is providing is an effective
            balanced between the speed of air tranport and the economical
            benifits of ocean transport{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpecialServices;
