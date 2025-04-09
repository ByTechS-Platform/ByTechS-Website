import { ReactComponent as Xicon } from "../assets/images/TwitterXLogo.svg";

const TestCard = ({ title, paragraphs, image, alt, dir, isArabic }) => (
  <div className="ai-user-card">
    <div className="content" dir={dir}>
      <div className="top-content">
        <h2>{title}</h2>
      </div>

      {paragraphs.map((text, idx) => (
        <p key={idx}>{text}</p>
      ))}

      <button className="share-button">
        <span className="share-text">
          {isArabic ? "شارك النتيجة عبر" : "Share your result via"}
        </span>
        <Xicon className="x-icon" />
      </button>
    </div>

    <div className="robot-image">
      <img src={image} alt={alt} />
    </div>
  </div>
);

export default TestCard;
