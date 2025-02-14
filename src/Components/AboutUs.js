import React from "react";
import "../Styles/AboutUs.scss";
import BytechsPurple from "../assets/Bytechs-purple.png";
import element from "../assets/elements.png";
import target from "../assets/target-02.png";
import values from "../assets/values.png";
import { useLanguage } from "../utils/LanguageContext"; // Import the custom hook

const AboutUs = () => {
  const { language } = useLanguage(); // Access the active language from context

  return (
    <section id="about" className="about">
      <div className="container">
        {/* Content */}
        <div
          className={`content ${
            language === "ar" ? "align-right" : "align-left"
          }`}
        >
          <h2 data-en="What is Bytechs?" data-ar="عن مبادرة بايتكس">
            {language === "en" ? "What is Bytechs?" : "عن مبادرة بايتكس"}
          </h2>
          <p className="about-paragraph"
            data-en="An initiative reshaping the world of technology by creating a sustainable ecosystem to activate the technical movement in artificial intelligence and emerging technologies. We support innovation, entrepreneurship, and applied research to contribute to achieving the three pillars of Saudi Vision 2030: an ambitious nation, a vibrant society, and a thriving economy."
            data-ar="مبادرة تعمل على إعادة تشكيل عالم التقنية من خلال خلق نظام بيئي مستدام لتفعيل الحراك التقني في مجالات الذكاء الاصطناعي والتقنيات الناشئة. ندعم الابتكار، ريادة الأعمال، والبحث العملي لنساهم في تحقيق أعمدة رؤية المملكة الثلاث وطن طموح، مجتمع حيوي، واقتصاد مزدهر."
          >
            {language === "en"
              ? "An initiative reshaping the world of technology by creating a sustainable ecosystem to activate the technical movement in artificial intelligence and emerging technologies. We support innovation, entrepreneurship, and applied research to contribute to achieving the three pillars of Saudi Vision 2030: an ambitious nation, a vibrant society, and a thriving economy."
              : " مبادرة تعمل على إعادة تشكيل عالم التقنية من خلال خلق نظام بيئي مستدام لتفعيل الحراك التقني في مجالات الذكاء الاصطناعي والتقنيات الناشئة. ندعم الابتكار، ريادة الأعمال، والبحث العملي لنساهم في تحقيق أعمدة رؤية المملكة الثلاث وطن طموح، مجتمع حيوي، واقتصاد مزدهر."}
          </p>

          <div className="cards-wrapper">
            <div className="card mission">
              <div className="card-top">
                <img src={element} alt="shape1" />
                <h3 data-en="Our Mission" data-ar="مهمتنا">
                  {language === "en" ? "Our Mission" : "مهمتنا"}
                </h3>
              </div>
              <p
                className="card-content"
                data-en="We aim to create a vibrant and sustainable tech community that enhances the Kingdom's position as a global leader in technology."
                data-ar="نسعى لخلق مجتمع تقني حيوي ومستدام يعزز من مكانة المملكة كرائد عالمي في التقنية."
              >
                {language === "en"
                  ? "We aim to create a vibrant and sustainable tech community that enhances the Kingdom's position as a global leader in technology."
                  : "نسعى لخلق مجتمع تقني حيوي ومستدام يعزز من مكانة المملكة كرائد عالمي في التقنية."}
              </p>
            </div>

            <div className="card values">
              <div className="card-top">
                <img src={values} alt="shape1" />
                <h3 data-en="Our Values" data-ar="قيمنا">
                  {language === "en" ? "Our Values" : "قيمنا"}
                </h3>
              </div>
              <p
                className="card-content"
                data-en="Innovation, Sustainability, Quality, Empowerment, Leadership, Giving, Collaboration, Inclusivity, Respect, and Promoting Tech Awareness."
                data-ar="الابتكار، الاستدامة، الجودة، التمكين، الريادة، العطاء، التعاون، الشمولية، الاحترام، تعزيز الوعي التقني."
              >
                {language === "en"
                  ? "Innovation, Sustainability, Quality, Empowerment, Leadership, Giving, Collaboration, Inclusivity, Respect, and Promoting Tech Awareness."
                  : "الابتكار، الاستدامة، الجودة، التمكين، الريادة، العطاء، التعاون، الشمولية، الاحترام، تعزيز الوعي التقني."}
              </p>
            </div>

            <div className="card goal">
              <div className="card-top">
                <img src={target} alt="shape1" />
                <h3 data-en="Our Goals" data-ar="هدفنا">
                  {language === "en" ? "Our Goals" : "هدفنا"}
                </h3>
              </div>
              <ul className="our-goal-list">
                <li
                  data-en="Build specialized tech communities focusing on interaction and knowledge exchange."
                  data-ar="بناء مجتمعات تقنية تخصصية تركز على التفاعل وتبادل الخبرات."
                >
                  {language === "en"
                    ? "Build specialized tech communities focusing on interaction and knowledge exchange."
                    : "بناء مجتمعات تقنية تخصصية تركز على التفاعل وتبادل الخبرات."}
                </li>
                <li
                  data-en="Provide specialized training programs that support technical and professional skills."
                  data-ar="توفير برامج تدريبية متخصصة تدعم المهارات التقنية والمهنية."
                >
                  {language === "en"
                    ? "Provide specialized training programs that support technical and professional skills."
                    : "توفير برامج تدريبية متخصصة تدعم المهارات التقنية والمهنية."}
                </li>
                <li
                  data-en="Launch a digital platform that facilitates collaboration and communication between tech enthusiasts and experts."
                  data-ar="إطلاق منصة رقمية تسهّل التعاون والتواصل بين المهتمين والخبراء في التقنية."
                >
                  {language === "en"
                    ? "Launch a digital platform that facilitates collaboration and communication between tech enthusiasts and experts."
                    : "إطلاق منصة رقمية تسهّل التعاون والتواصل بين المهتمين والخبراء في التقنية."}
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
