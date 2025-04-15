import React, { useState } from "react";
import QuizData from "../utils/quizData";
import { useLanguage } from "../utils/LanguageContext";
import TestOutput from "./TestOutput";
import PersonalInfo from "./PersonalInfo";
import QuizQuestion from "./QuizQuestion";
import StepNavigation from "./StepNavigation";
import "../Styles/QuizStyles.scss";
import QuastionRobot from "../assets/images/QARobot.png";

const { quizQuestions } = QuizData;

const QuizComponent = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    selfEvaluation: "",
    answers: Array(quizQuestions.length).fill(""),
  });
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");

  const scoreMap = { A: 4, B: 3, C: 2, D: 1 };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnswerChange = (index, value) => {
    const updated = [...formData.answers];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, answers: updated }));
  };

  const calculateScore = () =>
    formData.answers.reduce((sum, answer) => sum + (scoreMap[answer] || 0), 0);

  const handleSubmit = () => {
    const total = calculateScore();
    setScore(total);
    setSubmitted(true);
    console.log("Submitted:", formData, "Score:", total);
  };

  const validateStep = () => {
    setError("");
    if (step === 0) {
      if (
        !formData.fullName.trim() ||
        !formData.phone.trim() ||
        !formData.email.trim() ||
        !formData.selfEvaluation
      ) {
        setError(
          isArabic
            ? "يرجى تعبئة جميع الحقول المطلوبة."
            : "Please fill in all required fields."
        );
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError(
          isArabic
            ? "يرجى إدخال بريد إلكتروني صالح."
            : "Please enter a valid email."
        );
        return false;
      }
    } else {
      const index = step - 1;
      if (!formData.answers[index]) {
        setError(isArabic ? "يرجى اختيار إجابة." : "Please select an answer.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setError("");
    setStep((prev) => prev - 1);
  };

  const isQuizStep = step > 0;
  const quizIndex = step - 1;
  const isLastStep = step === quizQuestions.length;

  return (
    <section id="quiz" className="quiz-container" style={{ backgroundColor: "white" }}>
      {step === 0 ? (
        <>
          <PersonalInfo
            isArabic={isArabic}
            formData={formData}
            onInputChange={handleInputChange}
          />
          {error && (
            <p
              className="error-text"
              style={{ color: "red", textAlign: "center" }}
            >
              {error}
            </p>
          )}

          <StepNavigation
            isArabic={isArabic}
            step={step}
            totalSteps={quizQuestions.length}
            onPrev={prevStep}
            onNext={nextStep}
            onSubmit={handleSubmit}
          />
        </>
      ) : (
        <div dir={dir} className="quiz-wrapper">
          <div className="quiz-right">
            {!submitted ? (
              <>
                <QuizQuestion
                  questionData={quizQuestions[quizIndex]}
                  index={quizIndex}
                  isArabic={isArabic}
                  selected={formData.answers[quizIndex]}
                  onChange={handleAnswerChange}
                />
                {error && <p className="error-text">{error}</p>}
              </>
            ) : (
              <div className="text-center text-xl font-bold mt-10">
                <TestOutput score={score} />
              </div>
            )}
          </div>
          <div className="quiz-divider">
            <div
              className="progress-line"
              style={{
                height: `${(step / quizQuestions.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="quiz-left">
            <img src={QuastionRobot} alt="Robot" className="robot-img" />
            <StepNavigation
              isArabic={isArabic}
              step={step}
              totalSteps={quizQuestions.length}
              onPrev={prevStep}
              onNext={nextStep}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      )}
    </section>
  );
};
//Test

export default QuizComponent;
