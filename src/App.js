import "./App.css";
import Navigation from "./Navigation/Navigation";
import HeroSection from "./Components/HeroSection";
import SEctionTwo from "./Components/SEctionTwo";
import WhoWeAre from "./Components/WhoWeAre";
import LogoSection from "./Components/LogoSection";
import LogoRender from "./Components/LogoRender";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <SEctionTwo />
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
    </div>
  );
}

export default App;
