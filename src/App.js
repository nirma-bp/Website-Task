import "./App.css";
import Navigation from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Services from "./Pagess/Services";
import Contact from "./Pagess/Contact";
import Blog from "./Pagess/Blog";
import About from "./Pagess/About";
import Footer from "./Pagess/Footer";
import Home from "./Pagess/Home";
import OfficesWorldWide from "./Pagess/OfficesWorldWide";
import ForBusinessInquiries from "./Pagess/ForBusinessInquiries";
import LastFooterPart from "./Pagess/LastFooterPart";
import NotFound from "./Pagess/NotFound";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <OfficesWorldWide />
      <ForBusinessInquiries />
      <LastFooterPart />
    </div>
  );
}

export default App;
