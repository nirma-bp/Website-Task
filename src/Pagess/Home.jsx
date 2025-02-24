import React from "react";
import HeroSection from "../Components/HeroSection";
import SectionTwo from "../Navigation/SectionTwo";
import WhoWeAre from "../Components/WhoWeAre";
import LogoRender from "../Components/LogoRender";
import BoxComponent from "../Components/BoxComponent";
import OfficesWorldWide from "./OfficesWorldWide";

function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre
        para="We belive that simplicity and client focus , combined with extensive
          theoritical knowledge and practical experience , are the key
          attributes which we drive our business our talented consultants from
          the hub of our operations and it i stheir collective knowledge and
          experience that transformed our detailed analysis into tangeble
          logistics solutions for our clients "
        heading="Who We Are"
        headingtwo="Our Advantages"
      />

      <LogoRender />
      <WhoWeAre
        heading="OUR SERVICES"
        para={
          "We are commited to providing vertical integration and best quality services in order to develop long term partnership with our customers . we are actively involved in transportation service to Iran , India and afganistan , and arrange logistics for united  nations Aid , Agencies and other world renowed commercial companies "
        }
      />
      <BoxComponent />
    </div>
  );
}

export default Home;
