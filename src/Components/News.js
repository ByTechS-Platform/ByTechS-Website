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
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [visibleCount, setVisibleCount] = useState(2);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${baseId}/${tableName}?sort[0][field]=ID&sort[0][direction]=desc`,
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNewsData = newsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

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
              {currentNewsData.length > 0 ? (
                currentNewsData.map((record) => {
                  const { fields } = record;
                  const imageUrl = fields.Image ? fields.Image[0].url : "";

                  return (
                    <div key={record.id} className="carousel-slide">
                      <div className="image-container">
                        {imageUrl && <img src={imageUrl} alt={fields.Name} />}
                      </div>
                      <span className="event-tag">
                        {activeLanguage === "en"
                          ? fields.Tag_eng
                          : fields.Tag_ar}
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
                })
              ) : (
                <p>No news available at the moment.</p>
              )}
            </div>
          </div>

          <div className="pagination">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              data-en="Previous"
              data-ar="السابق"
            >
              Previous
            </button>
            {/* <span>
              Page {currentPage} of {totalPages}
            </span> */}

            {/* Page Numbers */}
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageClick(number)}
                className={currentPage === number ? "active" : ""}
                data-en={number}
                data-ar={number}
              >
                {number}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              data-en="Next"
              data-ar="التالي"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Render FollowUs component and pass the last image URL */}
      <FollowUs followImage={lastNewsImageUrl} />
    </>
  );
};

export default News;
