import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../utils/LanguageContext";
import "../Styles/News.scss";

const airtableApiKey =
  "pat042Mj9r5Dx98ff.d155c54347ad8585d7dfac9236640398c2592d36036b4f53722c8e1875a6bea1";
const baseId = "app9KzhrevXRJVMgJ";
const tableName = "News";

const News = () => {
  const { language } = useLanguage();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);
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
        setNewsData(data.records);
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

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <section id="news" className="section news">
      <div
        className={`news-container ${
          language === "ar" ? "align-right" : "align-left"
        }`}
      >
        <h2 className="news-title">
          {language === "en" ? "ByTechS News" : "أخبار بايتكس"}
        </h2>

        {/* News List */}
        <div className="carousel">
          <div className="carousel-wrapper">
            {currentNewsData.length > 0 ? (
              currentNewsData.map((record) => {
                const { fields } = record;
                const imageUrl = fields.Image ? fields.Image[0].url : "";

                return (
                  <div key={record.id} className="carousel-slide">
                    <div className="image-container">
                      <a href={fields.Post}>
                        {imageUrl && <img src={imageUrl} alt={fields.Name} />}
                      </a>
                    </div>
                    <div className="content-container">
                      <span className="event-tag">
                        {language === "en" ? fields.Tag_eng : fields.Tag_ar}
                      </span>
                      <p className="event-title">
                        {language === "en" ? fields.Title_eng : fields.Title_ar}
                      </p>
                      <p className="event-content">
                        {language === "en"
                          ? fields.Content_eng
                          : fields.Content_ar}
                      </p>
                    </div>
                    <p
                      className={
                        language === "ar" ? "event-date-ar" : "event-date-en"
                      }
                    >
                      {fields.Date}
                    </p>
                  </div>
                );
              })
            ) : (
              <p>No news available at the moment.</p>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className={`${language === "ar" ? "arrow" : ""}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ color: "#32eddf" }}
            />
          </button>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={currentPage === number ? "active" : ""}
            >
              {number}
            </button>
          ))}
          <button
            className={`${language === "ar" ? "arrow" : ""}`}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ color: "#32eddf" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
