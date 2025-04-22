import React from "react";
import StyledCard from "./StyledCard";
import Xshare from "./social-media/Xshare";
import Wshare from "./social-media/Wshare";
import Lshare from "./social-media/Lshare";
import SaveImage from "./social-media/SaveImage";
import CopyShare from "./social-media/CopyShare";

const TestCard = ({
  title,
  paragraphs,
  image,
  alt,
  dir,
  isArabic,
  score,
  bg,
  circle,
}) => {
  return (
    <StyledCard bg={bg} circle={circle}>
      <div className="content" dir={dir}>
        <div className="top-content">
          <h2>{title}</h2>
        </div>

        {Array.isArray(paragraphs) &&
          paragraphs.map((text, idx) => <p key={idx}>{text}</p>)}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SaveImage />

          <div
            style={{
              display: "flex",
              gap: "30%",
              paddingTop: "5%",
              justifyContent: "center",
            }}
          >
            <Xshare isArabic={isArabic} score={score} />
            <Wshare />
            <Lshare />
            <CopyShare />
          </div>
        </div>
      </div>

      <div className="robot-image">
        <img src={image} alt={alt} />
      </div>
    </StyledCard>
  );
};

export default TestCard;
