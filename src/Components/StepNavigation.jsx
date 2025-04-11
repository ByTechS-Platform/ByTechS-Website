import React from "react";

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
    <div className="flex justify-between items-center mt-4">
      {step > 0 && (
        <button onClick={onPrev} className="bg-gray-300 px-4 py-2 rounded">
          {isArabic ? "السابق" : "Previous"}
        </button>
      )}
      {!isLast ? (
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isArabic ? "التالي" : "Next"}
        </button>
      ) : (
        <button
          onClick={onSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {isArabic ? "إرسال" : "Submit"}
        </button>
      )}
    </div>
  );
};

export default StepNavigation;
