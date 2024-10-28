import React, { useEffect, useState } from "react";
import "../Styles/News.scss";

// Airtable config (move these to a secure environment in production)
const airtableApiKey =
  "pat042Mj9r5Dx98ff.d155c54347ad8585d7dfac9236640398c2592d36036b4f53722c8e1875a6bea1";
const baseId = "app9KzhrevXRJVMgJ";
const tableName = "News";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

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

  // Handle pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNewsData = newsData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  if (loading) {
    return <p>Loading news...</p>; // Display a loading message while fetching
  }

  if (error) {
    return <p>{error}</p>; // Display the error message if any
  }

  return (
    <section id="news" className="section news">
      <div className="news-container">
        <span
          className="news-title"
          data-en="BytechS News"
          data-ar="أخبار بايتكس"
        >
          ByTechS News
        </span>
        <div className="news-content">
          {currentNewsData.length > 0 ? (
            currentNewsData.map((record) => {
              const { fields } = record;
              const imageUrl = fields.Image ? fields.Image[0].url : "";
              return (
                <div key={record.id} className="event">
                  {imageUrl && <img src={imageUrl} alt={fields.Name} />}
                  <span
                    className="event-tag"
                    data-en="Initiatives"
                    data-ar="مبادرات"
                  >
                    {fields.Type}
                  </span>
                  <p className="event-title">{fields.Title}</p>
                  <p className="event-content">{fields.Content}</p>
                  <p className="event-date">{fields.Date}</p>
                </div>
              );
            })
          ) : (
            <p>No news available at the moment.</p> // Fallback if there's no news
          )}
        </div>
        {/* Pagination Controls */}
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            data-en="Previous"
            data-ar="السابق"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
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
      <div className="new-vector"></div>
    </section>
  );
};

export default News;
