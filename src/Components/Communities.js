import React, { useState } from "react";
import "../Styles/Communities.scss";
import CommunitiesData from "../CommunitiesData";
import BYLogo from "../assets/BY-logo.png";

const tabs = [
  "Vision & Objective",
  "Why us",
  "Distinctive",
  "Audience",
  "Activities",
  "Structure",
];

const Communities = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="cards-container">
      <div className="left-panel">
        {selectedCard ? (
          <div className="card-details">
            <div className="tabs">
              <img src={selectedCard.image} alt={selectedCard.title} />
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "tab active" : "tab"}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {activeTab === "Vision & Objective" && (
                <>
                  <h2>Objective</h2>
                  <p>{selectedCard.objective}</p>
                  <h2>Vision</h2>
                  <p>{selectedCard.vision}</p>
                </>
              )}
              {activeTab === "Why us" && <p>{selectedCard.whyUs}</p>}
              {activeTab === "Distinctive" && <p>{selectedCard.distinctive}</p>}
              {activeTab === "Audience" && <p>{selectedCard.audience}</p>}
              {activeTab === "Activities" && <p>{selectedCard.activities}</p>}
              {activeTab === "Structure" && <p>{selectedCard.structure}</p>}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communities;
