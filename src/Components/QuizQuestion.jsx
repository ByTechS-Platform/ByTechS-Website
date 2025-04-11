import React from "react";

const QuizQuestion = ({
  questionData,
  index,
  isArabic,
  selected,
  onChange,
}) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-4">
      {isArabic ? "السؤال" : "Question"} {index + 1}
    </h3>
    <p className="mb-4 font-medium">
      {isArabic ? questionData.ar : questionData.en}
    </p>
    {Object.entries(questionData.options).map(([key, val]) => (
      <label key={key} className="block mb-2">
        <input
          type="radio"
          name={`quiz-${index}`}
          value={key}
          checked={selected === key}
          onChange={() => onChange(index, key)}
          className="mr-2"
        />
        {isArabic ? val.ar : val.en}
      </label>
    ))}
  </div>
);
//Test

export default QuizQuestion;
