import { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.scss";
import Home from "./Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import JoinUs from "./Components/JoinUs";
import QuizComponent from "./Components/QuizComponent";

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", ""); // Remove #
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null; // No UI, just handles scrolling
};

ReactGA.initialize("G-FXNRWYV63R");
function App() {
  const [isLightMode] = useState(false);
  const [activeSection] = useState("home");

  return (
    <div className="App">
      <Router>
        <ScrollToSection />
        <NavBar isLightMode={isLightMode} activeSection={activeSection} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="join-us" element={<JoinUs />} />
          <Route path="Quiz" element={<QuizComponent />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
