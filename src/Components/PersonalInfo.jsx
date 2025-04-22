import React from "react";
import "../Styles/FormStyles.scss";

const PersonalInfo = ({ isArabic, formData, onInputChange }) => (
  <section className="personal-info" dir={isArabic ? "rtl" : "ltr"}>
    <h3 className="section-title">
      {isArabic ? "المعلومات الشخصية" : "Personal Information"}
    </h3>

    <div className="form-fields">
      {[
        {
          name: "fullName",
          label: isArabic ? "الاسم الثلاثي" : "Full Name",
          type: "text",
        },
        {
          name: "email",
          label: isArabic ? "البريد الإلكتروني" : "Email",
          type: "email",
        },
        {
          name: "phone",
          label: isArabic ? "رقم الجوال" : "Phone Number",
          type: "text",
          pattern: "^05\\d{8}$",
          maxLength: 10,
        },
      ].map(({ name, label, type }) => (
        <div className="form-group" key={name}>
          <label>
            {label}
            <span className="required"> *</span>
          </label>

          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={onInputChange}
            placeholder={
              isArabic ? `الرجاء إدخال ${label}` : `Enter your ${label}`
            }
          />
        </div>
      ))}

      <div className="form-group">
  <label htmlFor="selfEvaluation">
    {isArabic
      ? "قيّم نفسك بالذكاء الاصطناعي (1 إلى 10)"
      : "Rate yourself in AI (1 to 10)"}
  </label>
  <input
    type="range"
    name="selfEvaluation"
    id="selfEvaluation"
    min="1"
    max="10"
    value={formData.selfEvaluation}
    onChange={onInputChange}
    className="slider"
  />
  <div className="slider-value">
    {isArabic ? "التقييم:" : "Selected:"} {formData.selfEvaluation || "–"}
  </div>
</div>

    </div>
  </section>
);

export default PersonalInfo;
