import React, { useEffect, useState } from "react";
import { switchLanguage } from "../utils/languageUtils";
import FollowUs from "./FollowUs";
import "../Styles/News.scss";

// Airtable config (move these to a secure environment in production)
const airtableApiKey =
  "pat042Mj9r5Dx98ff.d155c54347ad8585d7dfac9236640398c2592d36036b4f53722c8e1875a6bea1";
const baseId = "app9KzhrevXRJVMgJ";
const tableName = "News";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLanguage, setActiveLanguage] = useState("en");
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${baseId}/${tableName}`,
          {
            headers: { Authorization: `Bearer ${airtableApiKey}` },
          }
        );
        const data = await response.json();
        setNewsData(data.records); // Display all news
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Airtable data:", error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

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

  if (loading) {
    return <p>Loading news...</p>; // Display a loading message while fetching
  }

  if (error) {
    return <p>{error}</p>; // Display the error message if any
  }

  const lastNewsImageUrl =
    newsData.length > 0 ? newsData[0].fields.Image[0].url : "";

  // Handle left and right arrow clicks
  const slideLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 2); // Load 3 more items at a time
  };

  return (
    <>
      <section id="news" className="section news">
        <div className="news-container">
          <span
            className="news-title"
            data-en="BytechS News"
            data-ar="أخبار بايتكس"
          >
            ByTechS News
          </span>

          {/* Carousel */}
          <div className="carousel">
            <div className="carousel-wrapper">
              {newsData.slice(0, visibleCount).map((record, index) => {
                const { fields } = record;
                const imageUrl = fields.Image ? fields.Image[0].url : "";
                const isActive = index === currentIndex;
                const isPrev =
                  index ===
                  (currentIndex - 1 + newsData.length) % newsData.length;
                const isNext = index === (currentIndex + 1) % newsData.length;

                return (
                  <div
                    key={record.id}
                    className={`carousel-slide ${
                      isActive
                        ? "active"
                        : isPrev
                        ? "prev"
                        : isNext
                        ? "next"
                        : ""
                    }`}
                  >
                    {imageUrl && <img src={imageUrl} alt={fields.Name} />}
                    <span className="event-tag">
                      {activeLanguage === "en" ? fields.Tag_eng : fields.Tag_ar}
                    </span>
                    <p className="event-title">
                      {activeLanguage === "en"
                        ? fields.Title_eng
                        : fields.Title_ar}
                    </p>
                    <p className="event-content">
                      {activeLanguage === "en"
                        ? fields.Content_eng
                        : fields.Content_ar}
                    </p>
                    <p className="event-date">{fields.Date}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Navigation Arrows */}
          <div className="arrows">
            <button className="arrow left-arrow" onClick={slideLeft}>
              {/* Left Arrow Icon */}
            </button>
            <button className="arrow right-arrow" onClick={slideRight}>
              {/* Right Arrow Icon */}
            </button>
          </div>

          {/* Static List for Additional News Items */}
          <div className="news-list">
            {newsData.slice(visibleCount).map((record) => (
              <div key={record.id} className="news-item">
                <img
                  src={record.fields.Image[0]?.url}
                  alt={record.fields.Name}
                  className="news-image"
                />
                <h3>
                  {activeLanguage === "en"
                    ? record.fields.Title_eng
                    : record.fields.Title_ar}
                </h3>
                <p>
                  {activeLanguage === "en"
                    ? record.fields.Content_eng
                    : record.fields.Content_ar}
                </p>
                <p className="event-date">{record.fields.Date}</p>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < newsData.length && (
            <button className="load-more" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </section>

      {/* Render FollowUs component and pass the last image URL */}
      <FollowUs followImage={lastNewsImageUrl} />
    </>
  );
};

export default News;
