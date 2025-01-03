import "./Index.css";
import Home from "./components/sections/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Market from "./components/pages/Market/Market";
import Builder from "./components/pages/Builder"
import FeaturesSection from "./components/sections/FeaturesSection"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Market" element={<Market />} />
          <Route path="/Builder" element={<Builder/>} /> 
        </Routes>
        <FeaturesSection />
      </Router>
    </>
  );
}

export default App;
