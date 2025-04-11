import React from "react";
import "../Styles/QuizProgress.scss";

const QuizProgress = ({ step, totalSteps }) => {
  const percentage = (step / totalSteps) * 100;

  return (
    <div className="quiz-progress">
      <div
        className="quiz-progress-bar"
        style={{ height: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default QuizProgress;
