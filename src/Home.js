import React from 'react'
import Hero from "./Components/Hero";
import News from "./Components/News";
import ContactUs from "./Components/ContactUs";
import Communities from './Components/Communities';
import AboutUs from "./Components/AboutUs";



const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Communities />
      <News />
      <ContactUs />
    </div>
  );
}

export default Home