import { useState } from 'react';
import './App.scss';
import ContactUs from './Components/ContactUs';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import News from './Components/News';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import Communities from './Components/Communities';

function App() {

   const [isLightMode] = useState(false);
   const [activeSection] = useState("home");

  return (
    <div className="App">
      <NavBar isLightMode={isLightMode} activeSection={activeSection} />
      <Hero />
      <AboutUs />
      <Communities />
      <News />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
