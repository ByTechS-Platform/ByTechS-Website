import React, { useState } from "react";
import "../Styles/Communities.scss";
import CommunitiesData from "../CommunitiesData";
import BYLogo from "../assets/BY-logo.png";
import { useLanguage } from "../utils/LanguageContext";

const tabs = [
  { en: "Vision & Objective", ar: "الرؤية والهدف" },
  { en: "Why us", ar: "لماذا نحن؟" },
  { en: "Distinctive", ar: "ما يميزنا" },
  { en: "Audience", ar: "الجمهور" },
  { en: "Activities", ar: "الأنشطة" },
  { en: "Structure", ar: "الهيكلة" },
];

const Communities = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { language } = useLanguage(); // Access the active language from context

  return (
    <section
      id="communities"
      className={`communities ${
        language === "ar" ? "align-right" : "align-left"
      }`}
    >
      <div className="cards-container">
        <div className="left-panel">
          {selectedCard ? (
            <div className="card-details">
              <div className="tabs">
                <h1 className="card-title">
                  {language === "ar"
                    ? selectedCard.titleAr
                    : selectedCard.title}
                </h1>
                <img
                  className="card-lg-image"
                  src={selectedCard.image}
                  alt={selectedCard.title}
                />
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
            <img src={BYLogo} alt="Large Logo" className="logo" />
          )}
        </div>

        <div className="right-panel">
          {CommunitiesData.map((card) => (
            <div
              key={card.id}
              className="card"
              onClick={() => setSelectedCard(card)}
            >
              <img src={card.image} alt={card.title} />
              <h4 className="card-title">
                {language === "ar" ? card.titleAr : card.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;
