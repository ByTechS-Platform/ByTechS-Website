import React from "react";
import { ReactComponent as Xicon } from "../assets/images/TwitterXLogo.svg";
import StyledCard from "./StyledCard";
import resultImageMap from "./resultImageMap";

const TestCard = ({
  title,
  paragraphs,
  image,
  alt,
  dir,
  isArabic,
  bg,
  circle,
  score,
}) => {
  const handleShare = () => {
    const scriptTemplate = isArabic
      ? "اختبار الذكاء الاصطناعي لشخصيتك التقنية!"
      : "Discover your AI personality type!";

    const hashtags = isArabic
      ? "ByTechS, نتيجتك_الرائعة"
      : "ByTechS, YourAwesomeResult";

    const tweetText = encodeURIComponent(
      `${scriptTemplate}\n#${hashtags.replace(/,\s*/g, " #")}`
    );

    const getResultPage = () => {
      if (score >= 50) return resultImageMap.TechInnovator;
      if (score >= 40) return resultImageMap.LogicalAnalyst;
      if (score >= 25) return resultImageMap.PracticalUser;
      return resultImageMap.CuriousExplorer;
    };

    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(
      getResultPage()
    )}`;

    window.open(tweetUrl, "_blank");
  };

  return (
    <StyledCard bg={bg} circle={circle}>
      <div className="content" dir={dir}>
        <div className="top-content">
          <h2>{title}</h2>
        </div>

        {Array.isArray(paragraphs) &&
          paragraphs.map((text, idx) => <p key={idx}>{text}</p>)}

        <button className="share-button" onClick={handleShare}>
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
};

export default TestCard;
