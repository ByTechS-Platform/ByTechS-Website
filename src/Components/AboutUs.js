import React from "react";
import "../Styles/AboutUs.scss";
import BytechsPurple from "../assets/Bytechs-purple.png";
import element from "../assets/elements.png";
import target from "../assets/target-02.png";
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
          <h2 data-en="What is Bytechs?" data-ar="ماذا يعني بايتكس؟">
            {language === "en" ? "What is Bytechs?" : "ماذا يعني بايتكس؟"}
          </h2>
          <p
            data-en="An initiative reshaping the world of technology by creating a sustainable ecosystem to activate the technical movement in artificial intelligence and emerging technologies. We support innovation, entrepreneurship, and applied research to contribute to achieving the three pillars of Saudi Vision 2030: an ambitious nation, a vibrant society, and a thriving economy."
            data-ar="مبادرة تعيد تشكيل عالم التقنية من خلال إنشاء نظام بيئي مستدام لتعزيز الحركة التقنية في الذكاء الاصطناعي والتقنيات الناشئة. نحن ندعم الابتكار وريادة الأعمال والبحوث التطبيقية للمساهمة في تحقيق ركائز رؤية المملكة 2030: وطن طموح، مجتمع نابض بالحياة، واقتصاد مزدهر."
          >
            {language === "en"
              ? "An initiative reshaping the world of technology by creating a sustainable ecosystem to activate the technical movement in artificial intelligence and emerging technologies. We support innovation, entrepreneurship, and applied research to contribute to achieving the three pillars of Saudi Vision 2030: an ambitious nation, a vibrant society, and a thriving economy."
              : "مبادرة تعيد تشكيل عالم التقنية من خلال إنشاء نظام بيئي مستدام لتعزيز الحركة التقنية في الذكاء الاصطناعي والتقنيات الناشئة. نحن ندعم الابتكار وريادة الأعمال والبحوث التطبيقية للمساهمة في تحقيق ركائز رؤية المملكة 2030: وطن طموح، مجتمع نابض بالحياة، واقتصاد مزدهر."}
          </p>

          <div className="cards-wrapper">
            <div className="card mission">
              <img src={element} alt="shape1" />
              <h3 data-en="Our Mission" data-ar="مهمتنا">
                {language === "en" ? "Our Mission" : "مهمتنا"}
              </h3>
              <p
                className="card-content"
                data-en="We aim to create a vibrant and sustainable tech community that enhances the Kingdom's position as a global leader in technology."
                data-ar="نسعى إلى إنشاء مجتمع تقني نابض بالحياة ومستدام يعزز مكانة المملكة كقائد عالمي في التكنولوجيا."
              >
                {language === "en"
                  ? "We aim to create a vibrant and sustainable tech community that enhances the Kingdom's position as a global leader in technology."
                  : "نسعى إلى إنشاء مجتمع تقني نابض بالحياة ومستدام يعزز مكانة المملكة كقائد عالمي في التكنولوجيا."}
              </p>
            </div>
            <div className="card goal">
              <img src={target} alt="shape1" />
              <h3 data-en="Our Goals" data-ar="هدفنا">
                {language === "en" ? "Our Goals" : "هدفنا"}
              </h3>
              <ul className="our-goal-list">
                <li
                  data-en="Build specialized tech communities focusing on interaction and knowledge exchange."
                  data-ar="بناء مجتمعات تقنية متخصصة تركز على التفاعل وتبادل المعرفة."
                >
                  {language === "en"
                    ? "Build specialized tech communities focusing on interaction and knowledge exchange."
                    : "بناء مجتمعات تقنية متخصصة تركز على التفاعل وتبادل المعرفة."}
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
                  data-ar="إطلاق منصة رقمية تسهل التعاون والتواصل بين عشاق التقنية والخبراء."
                >
                  {language === "en"
                    ? "Launch a digital platform that facilitates collaboration and communication between tech enthusiasts and experts."
                    : "إطلاق منصة رقمية تسهل التعاون والتواصل بين عشاق التقنية والخبراء."}
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
