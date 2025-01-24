import React, { useEffect, useRef, useState } from "react";
import "../Styles/Hero.scss";
import shape1 from "../assets/shapesHomePage1.png";
import shape2 from "../assets/shapesHomePage2.png";
import shape3 from "../assets/shapesHomePage3.png";
import { animateProgressBar } from "../utils/progressUtils";
import SideNav from "./SideNav";

const Hero = () => {
  const progressBarRef = useRef(null);
  const progressNumberRef = useRef(null);

  // State for active language
  const [activeLanguage, setActiveLanguage] = useState("en");

  // Effect to animate progress bar
  useEffect(() => {
    if (progressBarRef.current && progressNumberRef.current) {
      animateProgressBar(progressBarRef, progressNumberRef);
    }
  }, []);

  // Effect to listen for language changes
  useEffect(() => {
    const handleLanguageSwitch = (event) => {
      const { lang } = event.detail;
      setActiveLanguage(lang);
    };

    // Add event listener for global language changes
    window.addEventListener("languageChange", handleLanguageSwitch);
    return () =>
      window.removeEventListener("languageChange", handleLanguageSwitch);
  }, []);

  return (
    <section id="home" className="section home">
      <div className={`container ${activeLanguage === "ar" ? "align-right" : "align-left"
        }`}>
        <div
          className="content"
        >
          <p
            className="T1"
            data-en="Creating The Future Within"
            data-ar="بالتقنية نبني المستقبل"
          >
            {activeLanguage === "ar"
              ? "بالتقنية نبني المستقبل"
              : "Creating The Future Within"}
          </p>
          <h1 data-en="COMING SOON ..." data-ar="... قريباً ">
            {activeLanguage === "ar" ? "... قريباً" : "COMING SOON ..."}
          </h1>
          <div className="progress-bar">
            <div ref={progressBarRef} className="progress"></div>
            <span ref={progressNumberRef} id="progress-number">
              0%
            </span>
          </div>
        </div>

        {/* Illustration Images */}
        <div className="illustration">
          <div className="shapes">
            <img src={shape1} alt="Shape 1" className="shape shape-1"></img>
            <img src={shape2} alt="Shape 2" className="shape shape-2"></img>
            <img src={shape3} alt="Shape 3" className="shape shape-3"></img>
          </div>
        </div>
        <SideNav />
      </div>
    </section>
  );
};

export default Hero;
