import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import JoinUs from './Components/JoinUs';


function App() {

   const [isLightMode] = useState(false);
   const [activeSection] = useState("home");

  return (
    <div className="App">
      <Router>
        <NavBar isLightMode={isLightMode} activeSection={activeSection} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<JoinUs />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
