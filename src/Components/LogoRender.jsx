import React from "react";
import LogoSection from "./LogoSection";

function LogoRender() {
  return (
    <div className="">
      <div className="grid grid-cols-1 bg-gray-50 md:grid-cols-3 gap-16 mt-16">
        <LogoSection
          headingtwo="our solution"
          para="  We have come a long way to develop our logistics skills at par with
        international standards. We deal with all kinds of logistics solutions."
        />

        <LogoSection
          headingtwo="our Effectiveness"
          para="One logistics setup which is capable to provide optimized array of value added logistical services with the provision of quality customer services "
        />

        <LogoSection
          headingtwo="Price Advantage"
          para="  Divine shipping is taking care of all the pricess and tries to deliver the soltuion in much lessor cost the array other logistics solutions provides we take care our customer "
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-16">
        <LogoSection
          headingtwo="Friendly people"
          para=" We are having some of the best minds and talents as a team of great experienced professional and skilled people who give their best efforts to design and manufacture the best plan of our needs according to your choices"
        />

        <LogoSection
          headingtwo="our Global Network"
          para="Divine Shipping is a recognized member of various global forwarder network and selection o fthese partners had been made through strict transact procedure to ensure excellence in our service at bottom end "
        />

        <LogoSection
          headingtwo="Price Advantage"
          para="Optimized Logistics Services which contains technology skilled and experienced all under one roof "
        />
      </div>
    </div>
  );
}

export default LogoRender;
