import React, { useState } from "react";
import "../Styles/Communities.scss";
import CommunitiesData from "../CommunitiesData";
import BYLogo from "../assets/BY-logo.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../utils/LanguageContext";

const tabs = [
  { en: "Vision & Objective", ar: "الرؤية والهدف" },
  { en: "Why us", ar: "لماذا نحن" },
  { en: "Distinctive", ar: "ما يميزنا" },
  { en: "Audience", ar: "الجمهور" },
  { en: "Activities", ar: "الأنشطة" },
  { en: "Structure", ar: "الهيكلة" },
];

const Communities = () => {
  const [selectedCard, setSelectedCard] = useState(CommunitiesData[0]);
  const [activeTab, setActiveTab] = useState(tabs[0].en);
  const { language } = useLanguage(); // Access the active language from context

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveTab(tabs[0].en);
    // Check if we're on a mobile viewport (adjust breakpoint as needed)
    if (window.innerWidth <= 768) {
      const leftPanel = document.querySelector(".left-panel");
      if (leftPanel) {
        leftPanel.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="communities"
      className={`communities ${
        language === "ar" ? "align-right" : "align-left"
      }`}
    >
      <h2 className="section-title">
        {language === "ar" ? "المجتمعات" : "Communities"}
      </h2>
      <div className="cards-container">
        <div className="left-panel">
          {selectedCard ? (
            <div className="card-details">
              <div className="tabs">
                <div className="image-container">
                  <img
                    className="card-lg-image"
                    src={selectedCard.image}
                    alt={selectedCard.title}
                  />
                </div>
                <h1 className="card-title">
                  {language === "ar"
                    ? selectedCard.titleAr
                    : selectedCard.title}
                </h1>
                <div className="tabs-container">
                  {tabs.map((tab) => (
                    <button
                      key={tab.en}
                      className={activeTab === tab.en ? "tab active" : "tab"}
                      onClick={() => setActiveTab(tab.en)}
                    >
                      {language === "ar" ? tab.ar : tab.en}
                    </button>
                  ))}
                </div>
                <div className="tab-content">
                  {activeTab === "Vision & Objective" && (
                    <>
                      <h2>{language === "ar" ? "الهدف" : "Objective"}</h2>
                      <p>
                        {language === "ar"
                          ? selectedCard.objectiveAr
                          : selectedCard.objective}
                      </p>
                      <h2>{language === "ar" ? "الرؤية" : "Vision"}</h2>
                      <p>
                        {language === "ar"
                          ? selectedCard.visionAr
                          : selectedCard.vision}
                      </p>
                    </>
                  )}
                  {activeTab === "Why us" && (
                    <>
                      <h2>{language === "ar" ? "لماذا نحن؟" : "Why us"}</h2>
                      <ul>
                        {(language === "ar"
                          ? selectedCard.whyUsAr
                          : selectedCard.whyUs
                        ).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {activeTab === "Distinctive" && (
                    <>
                      <h2>{language === "ar" ? "ما يميزنا" : "Distinctive"}</h2>
                      <p>
                        {language === "ar"
                          ? selectedCard.distinctiveAr
                          : selectedCard.distinctive}
                      </p>
                    </>
                  )}
                  {activeTab === "Audience" && (
                    <>
                      <h2>{language === "ar" ? "الجمهور" : "Audience"}</h2>
                      <p>
                        {language === "ar"
                          ? selectedCard.audienceAr
                          : selectedCard.audience}
                      </p>
                    </>
                  )}
                  {activeTab === "Activities" && (
                    <>
                      <h2>{language === "ar" ? "الأنشطة" : "Activities"}</h2>
                      <ul>
                        {(language === "ar"
                          ? selectedCard.activitiesAr
                          : selectedCard.activities
                        ).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {activeTab === "Structure" && (
                    <>
                      <h2>{language === "ar" ? "الهيكلة" : "Structure"}</h2>
                      <ul>
                        {(language === "ar"
                          ? selectedCard.structureAr
                          : selectedCard.structure
                        ).map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="card-placeholder">
              <h2>
                {language === "ar"
                  ? "اختر احد المحتمعات لرؤية تفاصيله"
                  : "select a community to see more details about it"}
              </h2>
              <img src={BYLogo} alt="Large Logo" className="logo" />
            </div>
          )}
        </div>

        <div className="right-panel">
          <div className="cards-wrapper">
            {CommunitiesData.map((card) => (
              <div
                key={card.id}
                className={`card ${
                  selectedCard && selectedCard.id === card.id ? "selected" : ""
                }`}
                onClick={() => handleCardClick(card)}
              >
                <div className="image-container">
                  <img src={card.image} alt={card.title} />
                </div>
                <h4 className="card-title">
                  {language === "ar" ? card.titleAr : card.title}
                </h4>
              </div>
            ))}
          </div>
          <Link to="/join-us" className="join-us-button">
              {language === "ar" ? "انضم لفريق بايتكس" : "Join ByTechS Team"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Communities;
