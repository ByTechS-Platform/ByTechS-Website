import React, { useEffect, useRef } from "react";
import { useLanguage } from "../utils/LanguageContext"; // Import the context
import "../Styles/Hero.scss";
import shape1 from "../assets/shapesHomePage1.png";
import shape2 from "../assets/shapesHomePage2.png";
import shape3 from "../assets/shapesHomePage3.png";
import { animateProgressBar } from "../utils/progressUtils";
import SideNav from "./SideNav";

const Hero = () => {
  const progressBarRef = useRef(null);
  const progressNumberRef = useRef(null);
  const { language } = useLanguage();

  useEffect(() => {
    if (progressBarRef.current && progressNumberRef.current) {
      animateProgressBar(progressBarRef, progressNumberRef);
    }
  }, []);

  return (
    <section id="home" className="section home">
      <div
        className={`container ${
          language === "ar" ? "align-right" : "align-left"
        }`}
      >
        <div className="content">
          <p className="T1">
            {language === "ar"
              ? "بالتقنية نبني المستقبل"
              : "Creating The Future Within"}
          </p>

          <h1>{language === "ar" ? "قــريــبـاً ••• " : "COMING SOON •••"}</h1>
          <div className="progress-bar-wrapper">
            <div className="progress-bar">
              <div ref={progressBarRef} className="progress"></div>
            </div>
            <span ref={progressNumberRef} id="progress-number">
              0%
            </span>
          </div>
          <p className="T2">
            {language === "ar"
              ? "منصة بايتكس الرقمية"
              : "ByTechs Digital Platform"}
          </p>
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
