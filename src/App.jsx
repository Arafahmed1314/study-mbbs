import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import TopCountry from "./components/country/TopCountry";
import Process from "./components/step_for_applying/Process";
import ApplyForm from "./components/callToAction/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/country" element={<TopCountry />} />
        <Route path="/process" element={<Process />} />
        <Route path="/apply" element={<ApplyForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
