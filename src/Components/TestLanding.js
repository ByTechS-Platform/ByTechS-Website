import React from "react";
import { Link } from "react-router-dom";
import RobotImage from "../assets/images/TestLangingImage.png";
import RobotVideo from "../assets/Videos/Homepage.mp4";
import "../Styles/TestLanding.scss";

const TestLanding = () => {
  return (
    <div className="test-landing">
      <div className="split-container">
        {/* Left (Text) */}
        <div className="text-box">
          <div className="dots">•••</div>
          <p className="description">
            هل تساءلت يوماً عن مدى توافقك مع عالم الذكاء الاصطناعي؟ هل أنت مطور
            تقني، محلل بيانات، مستخدم عملي، أم مجرد مستكشف فضولي؟
          </p>
          <Link to="/QuizComponent" className="quiz-button">
            تعرف على شخصيتك
          </Link>
        </div>

        {/* Right (Image) */}
        <div className="image-box">
          <h1 className="title">ما هي شخصيتك في عالم الذكاء الاصطناعي؟</h1>
          <video
            className="video"
            src={RobotVideo}
            alt="AI Robot"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  );
};

export default TestLanding;
