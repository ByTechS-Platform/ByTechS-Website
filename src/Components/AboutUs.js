import React, { useState, useEffect } from "react";
import "../Styles/AboutUs.scss";
import BytechsPurple from "../assets/Bytechs-purple.png";
import element from "../assets/elements.png";
import target from "../assets/target-02.png";

const AboutUs = () => {
  const [activeLanguage, setActiveLanguage] = useState("en");

  useEffect(() => {
    const handleLanguageSwitch = (event) => {
      const { lang } = event.detail;
      setActiveLanguage(lang);
    };

    // Listen for language changes (if triggered globally)
    window.addEventListener("languageChange", handleLanguageSwitch);
    return () =>
      window.removeEventListener("languageChange", handleLanguageSwitch);
  }, []);

  return (
    <section id="about" className="about">
      <div className="container">
        {/* <!-- Illustration Images --> */}

        <div
          className={`content ${
            activeLanguage === "ar" ? "align-right" : "align-left"
          }`}
        >
          <h2 data-en="What is Bytechs?" data-ar="ماذا يعني بايتكس؟">
            What is Bytechs?
          </h2>
          <p
            data-en="An initiative reshaping the world of technology by creating a sustainable ecosystem to activate the technical movement in artificial intelligence and emerging technologies. We support innovation, entrepreneurship, and applied research to contribute to achieving the three pillars of Saudi Vision 2030: an ambitious nation, a vibrant society, and a thriving economy."
            data-ar=" للحصول على مزيد من المعلومات حول BytechS اتصل على: BytechS.contact@bytechs.net"
          >
            An initiative reshaping the world of technology by creating a
            sustainable ecosystem to activate the technical movement in
            artificial intelligence and emerging technologies. We support
            innovation, entrepreneurship, and applied research to contribute to
            achieving the three pillars of Saudi Vision 2030: an ambitious
            nation, a vibrant society, and a thriving economy.
          </p>

          <div className="cards-wrapper">
            <div className="card mission">
              <img src={element} alt="shape1" />
              <h3 data-en="Our Mission" data-ar="مهمتنا">
                Our Mission
              </h3>
              <p
                className="card-content"
                data-en="We aim to create a vibrant and sustainable tech community that enhances the Kingdom's position as a global leader in technology."
                data-ar="We aim to create a vibrant and sustainable tech community that enhances the Kingdom's position as a global leader in technology."
              >
                We aim to create a vibrant and sustainable tech community that
                enhances the Kingdom's position as a global leader in
                technology.
              </p>
            </div>
            <div className="card goal">
              <img src={target} alt="shape1" />
              <h3 data-en="Our Goals" data-ar="هدفنا">
                Our Goals
              </h3>
              <ul className="our-goal-list">
                <li
                  data-en="Build specialized tech communities focusing on interaction and
                knowledge exchange."
                  data-ar=""
                >
                  Build specialized tech communities focusing on interaction and
                  knowledge exchange.
                </li>
                <li
                  data-en=" Provide specialized training programs that support technical and
                professional skills."
                  data-ar=""
                >
                  Provide specialized training programs that support technical
                  and professional skills.
                </li>
                <li
                  data-en="Launch a digital platform that facilitates
                collaboration and communication between tech enthusiasts and
                experts."
                  data-ar=""
                >
                  Launch a digital platform that facilitates collaboration and
                  communication between tech enthusiasts and experts.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="illustration">
          <div className="BytechsPurple">
            <img src={BytechsPurple} alt="Shape 1"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
