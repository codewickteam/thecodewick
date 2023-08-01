import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./pages/Services.js";
import AboutUs from "./pages/AboutUs.js";
import CaseStudy from "./pages/CaseStudy.js";
import Blog from "./pages/Blog.js";
import ContactUs from "./pages/ContactUs.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
