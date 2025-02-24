import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-pink-600 px-6 py-16 w-full min-h-screen text-white">
      {/* Heading Section */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-center mb-8">
        About <span className="text-pink-400">Divine Freight</span>
      </h2>

      <div className="grid grid cols-1 md:grid-cols-2 gap-12">
        {/* Content Section */}
        <div className="max-w-4xl shadow-lg rounded-lg p-8 border-l-4 border-pink-500">
          <p className="text-lg md:text-xl leading-loose text-left">
            Established & Founded in Karachi,{" "}
            <span className="text-pink-400 font-semibold">
              Divine Freight International
            </span>
            (Private) Limited has grown into an international-based freight
            forwarding company. We provide cost-effective solutions throughout
            Pakistan and have excellent global coverage. Whether you are
            shipping or looking for a great freight solution for import or
            export via air, road, or rail, we are the perfect business partners
            for smooth movement of your shipments.
          </p>
        </div>

        <div className="max-w-4xl shadow-lg rounded-lg p-8 border-l-4 border-pink-500 mt-6">
          <p className="text-lg md:text-xl leading-loose text-left">
            <span className="text-pink-400 font-semibold">
              Divine Freight International
            </span>{" "}
            is widely recognized as one of the leading customer clearing agents
            in Karachi and the global market. Our company has a long-standing
            direct professional relationship with NGOs, state, and corporate
            organizations. This privileged status gives us a distinct advantage
            when it comes to negotiating difficult consignments.
          </p>
        </div>

        <div className="max-w-4xl shadow-lg rounded-lg p-8 border-l-4 border-pink-500 mt-6">
          <p className="text-lg md:text-xl leading-loose text-left">
            Regardless of how fast a consignment reaches its destination,
            complex procedures and documentation requirements can result in
            delays, leading to high storage costs and fines.
          </p>
        </div>

        <div className="max-w-4xl  shadow-lg rounded-lg p-8 border-l-4 border-pink-500 mt-6">
          <p className="text-lg md:text-xl leading-loose text-left">
            Our employees are highly trained to understand complex customs
            procedures for each specific area of operation. Our team ensures
            that the correct documentation is prepared well in advance of all
            import and export deadlines, avoiding expensive and time-consuming
            delays.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
