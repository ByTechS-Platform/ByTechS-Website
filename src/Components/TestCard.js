import { ReactComponent as Xicon } from "../assets/images/TwitterXLogo.svg";
import StyledCard from "./StyledCard";

const TestCard = ({
  title,
  paragraphs,
  image,
  alt,
  dir,
  isArabic,
  bg,
  circle,
}) => (
  <StyledCard bg={bg} circle={circle}>
    <div className="content" dir={dir}>
      <div className="top-content">
        <h2>{title}</h2>
      </div>

      {Array.isArray(paragraphs) &&
        paragraphs.map((text, idx) => <p key={idx}>{text}</p>)}

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
  </StyledCard>
);

export default TestCard;
