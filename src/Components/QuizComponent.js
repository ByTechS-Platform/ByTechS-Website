import React, { useState } from "react";
import QuizData from "../utils/quizData"; // your quiz data file
import { useLanguage } from "../utils/LanguageContext"; // adjust path if needed

const { personalQuestions, quizQuestions } = QuizData;

const QuizComponent = () => {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    selfEvaluation: "", // 1–10 scale
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
      // Optional: basic email validation
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

  const getResultComponent = () => {
    if (score >= 50)
      return <div>{isArabic ? "المبدع التقني" : "Tech Innovator"}</div>;
    if (score >= 40)
      return <div>{isArabic ? "المحلل المنطقي" : "Logical Analyst"}</div>;
    if (score >= 25)
      return <div>{isArabic ? "المستخدم العملي" : "Practical User"}</div>;
    return <div>{isArabic ? "المستكشف الفضولي" : "Curious Explorer"}</div>;
  };

  const isQuizStep = step > 0;
  const quizIndex = step - 1;
  const isLastStep = step === quizQuestions.length;

  return (
    <div dir={dir} className="max-w-xl mx-auto p-6">
      {!submitted ? (
        <>
          {/* Step 0 – Personal Info */}
          {step === 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">
                {isArabic ? "المعلومات الشخصية" : "Personal Information"}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">
                    {isArabic ? "الاسم الثلاثي" : "Full Name"}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    {isArabic ? "رقم الجوال" : "Phone Number"}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    {isArabic ? "البريد الإلكتروني" : "Email"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border rounded p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    {isArabic
                      ? "قيّم نفسك بالذكاء الاصطناعي (1 إلى 10)"
                      : "Rate yourself in AI (1 to 10)"}
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {[...Array(10)].map((_, i) => {
                      const val = (i + 1).toString();
                      return (
                        <label key={val}>
                          <input
                            type="radio"
                            name="selfEvaluation"
                            value={val}
                            checked={formData.selfEvaluation === val}
                            onChange={handleInputChange}
                            className="mr-1"
                          />
                          {val}
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Questions Step-by-Step */}
          {isQuizStep && (
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">
                {isArabic ? "السؤال" : "Question"} {quizIndex + 1}
              </h3>
              <p className="mb-4 font-medium">
                {isArabic
                  ? quizQuestions[quizIndex].ar
                  : quizQuestions[quizIndex].en}
              </p>
              {Object.entries(quizQuestions[quizIndex].options).map(
                ([key, val]) => (
                  <label key={key} className="block mb-2">
                    <input
                      type="radio"
                      name={`quiz-${quizIndex}`}
                      value={key}
                      checked={formData.answers[quizIndex] === key}
                      onChange={() => handleAnswerChange(quizIndex, key)}
                      className="mr-2"
                    />
                    {isArabic ? val.ar : val.en}
                  </label>
                )
              )}
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-4">
            {step > 0 && (
              <button
                onClick={prevStep}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                {isArabic ? "السابق" : "Previous"}
              </button>
            )}
            {!isLastStep ? (
              <button
                onClick={nextStep}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {isArabic ? "التالي" : "Next"}
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                {isArabic ? "إرسال" : "Submit"}
              </button>
            )}
          </div>

          {error && <p className="text-red-600 mt-4 font-medium">{error}</p>}
        </>
      ) : (
        <div className="text-center text-xl font-bold mt-10">
          {getResultComponent()}
        </div>
      )}
    </div>
  );
};


export default QuizComponent;
