// Hero.js
import React, { useEffect, useRef } from "react";
import "../Styles/Hero.scss";
import shape1 from "../assets/shapesHomePage1.png";
import shape2 from "../assets/shapesHomePage2.png";
import shape3 from "../assets/shapesHomePage3.png";
import { animateProgressBar } from "../utils/progressUtils";


const Hero = () => {
  const progressBarRef = useRef(null);
  const progressNumberRef = useRef(null);


  useEffect(() => {
    if (progressBarRef.current && progressNumberRef.current) {
      animateProgressBar(progressBarRef, progressNumberRef); // Call the function only when refs are ready
    }
  }, [progressBarRef, progressNumberRef]); // Add refs to dependencies
  

  return (
    <section id="home" className="section home">
      <div className="container">
        <div className="content">
          <p
            className="T1"
            data-en="Creating The Future Within"
            data-ar="خلق المستقبل من الداخل"
          >
            Creating The Future Within
          </p>
          <h1 data-en="COMING SOON ..." data-ar="... قريباً ">
            COMING SOON •••
          </h1>
          <div className="progress-bar">
            <div ref={progressBarRef} className="progress"></div>
            <span ref={progressNumberRef} id="progress-number">
              0%
            </span>
          </div>
        </div>

        {/* <!-- Illustration Images --> */}
        <div className="illustration">
          <div className="shapes">
            <img src={shape1} alt="Shape 1" className="shape shape-1"></img>
            <img src={shape2} alt="Shape 2" className="shape shape-2"></img>
            <img src={shape3} alt="Shape 3" className="shape shape-3"></img>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
