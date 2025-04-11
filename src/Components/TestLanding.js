import React from "react";
import { Link } from "react-router-dom";
import RobotImage from "../assets/images/TestLangingImage.png";
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
          <img src={RobotImage} alt="AI Robot" />
        </div>
      </div>
    </div>
  );
};

export default TestLanding;
