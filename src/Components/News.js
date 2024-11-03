import React, { useEffect, useState } from "react";
import "../Styles/News.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FollowUs from "./FollowUs";

// Airtable config (move these to a secure environment in production)
const airtableApiKey =
  "pat042Mj9r5Dx98ff.d155c54347ad8585d7dfac9236640398c2592d36036b4f53722c8e1875a6bea1";
const baseId = "app9KzhrevXRJVMgJ";
const tableName = "News";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1); // Track the center slide

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://api.airtable.com/v0/${baseId}/${tableName}?sort[0][field]=ID&sort[0][direction]=desc`;

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${airtableApiKey}`,
          },
        });
        const data = await response.json();
        setNewsData(data.records); // Store the news data
        setLoading(false); // Set loading to false once the data is fetched
      } catch (error) {
        console.error("Error fetching Airtable data:", error);
        setError("Failed to fetch news. Please try again later.");
        setLoading(false); // Ensure loading is turned off even if there is an error
      }
    };

    fetchNews(); // Call the function to fetch news data
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

          <div className="carousel">
            <div className="carousel-wrapper">
              {newsData.map((record, index) => {
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
                    <span className="event-tag">{fields.Type}</span>
                    <p className="event-title">{fields.Title}</p>
                    <p className="event-content">{fields.Content}</p>
                    <p className="event-date">{fields.Date}</p>
                  </div>
                );
              })}
            </div>

            <div className="arrows">
              {/* Left Arrow */}
              <button className="arrow left-arrow" onClick={slideLeft}>
                &#9664;
              </button>
              {/* Right Arrow */}
              <button className="arrow right-arrow" onClick={slideRight}>
                &#9654;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Render FollowUs component and pass the last image URL */}
      <FollowUs followImage={lastNewsImageUrl} />
    </>
  );
};

export default News;
