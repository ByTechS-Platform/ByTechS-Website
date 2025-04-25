import React from "react";
import "../Styles/QuizStyles.scss";

const QuizQuestion = ({
  questionData,
  index,
  isArabic,
  selected,
  onChange,
}) => (
  <div>
    <h3>{isArabic ? `السؤال ${index + 1}` : `Question ${index + 1}`}</h3>
    <p className="question-text">
      {isArabic ? questionData.ar : questionData.en}
    </p>
    {Object.entries(questionData.options).map(([key, val]) => {
      const value = isArabic ? val.ar : val.en;
      const isSelected = selected === key;
      return (
        <div
          key={key}
          className={`answer-option ${isSelected ? "selected" : ""}`}
          onClick={() => onChange(index, key)}
        >
          <span className="letter">{key}</span>
          <span className="answer-text">{value}</span>
        </div>
      );
    })}
  </div>
);

//Test

export default QuizQuestion;
