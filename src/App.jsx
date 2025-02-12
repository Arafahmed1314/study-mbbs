import { useEffect } from "react";

import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import TopCountry from "./components/country/TopCountry";
import Process from "./components/step_for_applying/Process";
import ApplyForm from "./components/callToAction/CallToAction";
import Footer from "./components/Footer";
// import { trackPageView } from "./analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-YRR8VZ2TQ1", {
        page_path: location.pathname,
      });
    }
  }, [location]);
  return (
    // <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/country" element={<TopCountry />} />
        <Route path="/process" element={<Process />} />
        <Route path="/apply" element={<ApplyForm />} />
      </Routes>
      <Footer />
    </>

    // </Router>
  );
}

export default App;
