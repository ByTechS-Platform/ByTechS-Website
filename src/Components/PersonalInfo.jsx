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
        },
      ].map(({ name, label, type }) => (
        <div className="form-group" key={name}>
          <label>{label}<span className="required"> *</span></label>
           
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
        <label>
          {isArabic
            ? "قيّم نفسك بالذكاء الاصطناعي (1 إلى 10)"
            : "Rate yourself in AI (1 to 10)"}
          <span className="required">*</span>
        </label>
        <div className="radio-group">
          {[...Array(10)].map((_, i) => {
            const val = (i + 1).toString();
            return (
              <label key={val}>
                <input
                  type="radio"
                  name="selfEvaluation"
                  value={val}
                  checked={formData.selfEvaluation === val}
                  onChange={onInputChange}
                />
                {val}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default PersonalInfo;
