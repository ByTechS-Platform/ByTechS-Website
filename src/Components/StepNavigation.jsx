import React from "react";
import "../Styles/FormStyles.scss";

const StepNavigation = ({
  isArabic,
  step,
  totalSteps,
  onPrev,
  onNext,
  onSubmit,
}) => {
  const isLast = step === totalSteps;

  return (
    <div className="step-navigation">
      {isLast ? (
        <>
          <button className="btn btn-primary" onClick={onSubmit}>
            {isArabic ? "الاطلاع على النتيجة" : "View Result"}
          </button>
          <button className="btn btn-secondary" onClick={onPrev}>
            {isArabic ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}
          </button>
        </>
      ) : (
        <div className="nav-buttons">
          {step > 0 && (
            <button className="btn btn-outline" onClick={onPrev}>
              {isArabic ? "السابق" : "Previous"}
            </button>
          )}
          <button className="btn btn-primary" onClick={onNext}>
            {isArabic ? "التالي →" : "Next →"}
          </button>
        </div>
      )}
    </div>
  );
};

export default StepNavigation;

/*
 <button className="btn btn-primary" onClick={onNext}>
            {isArabic ? "التالي →" : "Next →"}
          </button>
          {step > 0 && (
            <button className="btn btn-outline" onClick={onPrev}>
              {isArabic ? "السابق" : "Previous"}
            </button>
          )}

*/
