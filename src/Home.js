import React from 'react'
import Hero from "./Components/Hero";
import News from "./Components/News";
import ContactUs from "./Components/ContactUs";


const Home = () => {
  return (
    <div>
      <Hero />
      <ContactUs />
      <News />
    </div>
  );
}

export default Home