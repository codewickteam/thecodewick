import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import CaseStudy from './pages/CaseStudy';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Admin from './pages/Admin';
import useAuthentication from './useAuthentication';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  const isAuthenticated = useAuthentication();


  return (
    <div>
      <Router>
        <Navbar />
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/casestudy" element={<CaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Protected admin routes */}
          {isAuthenticated ? (
            <Route path="/admin/*" element={<Admin />} />
          ) : null}

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
