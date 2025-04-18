import React, { useState } from "react";
import QuizData from "../utils/quizData";
import axios from "axios";
import { useLanguage } from "../utils/LanguageContext";
import TestOutput from "./TestOutput";
import PersonalInfo from "./PersonalInfo";
import QuizQuestion from "./QuizQuestion";
import StepNavigation from "./StepNavigation";
import "../Styles/QuizStyles.scss";
import QuastionRobot from "../assets/images/QARobot.png";
import QuastionRobot1 from "../assets/Videos/Quiz-side.mp4";

const { quizQuestions } = QuizData;

const airtableApiKeyQuiz =
  "patnw57522X1QcLB9.34fd9b1330f80ddcdab322eca85c7692335fb835475e510da16faeaa8061697c";
const baseIdQuiz = "appnsU5CgfG55TotR";
const tableNameQuiz = "Quiz";

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

  const handleSubmit = async () => {
    const total = calculateScore();
    setScore(total);
    setSubmitted(true);
    console.log("Submitted:", formData, "Score:", total);

    const airtableData = {
      fields: {
        Name: formData.fullName,
        Phone: formData.phone,
        Email: formData.email,
        Self_Evaluation: formData.selfEvaluation,
        Score: total,

        // Dynamically map answers to Question_1 ... Question_15
        ...formData.answers.reduce((acc, answer, index) => {
          acc[`Question_${index + 1}`] = answer;
          return acc;
        }, {}),
      },
    };

    console.log("Sending to Airtable:", airtableData);
  try {
    await axios.post(
      `https://api.airtable.com/v0/${baseIdQuiz}/${tableNameQuiz}`,
      airtableData,
      {
        headers: {
          Authorization: `Bearer ${airtableApiKeyQuiz}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Submitted to Airtable successfully");
  } catch (err) {
    console.error("Error submitting to Airtable:", err);
  }
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
    <section
      id="quiz"
      className="quiz-container"
      style={{ backgroundColor: "white" }}
    >
      {submitted ? (
        <div className="quiz-result-full">
          <TestOutput score={score} />
        </div>
      ) : step === 0 ? (
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
            <QuizQuestion
              questionData={quizQuestions[quizIndex]}
              index={quizIndex}
              isArabic={isArabic}
              selected={formData.answers[quizIndex]}
              onChange={handleAnswerChange}
            />
            {error && <p className="error-text">{error}</p>}
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
            <video
              src={QuastionRobot1}
              alt="Robot"
              className="robot-img"
              autoPlay
              loop
              muted
              playsInline
            />
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
