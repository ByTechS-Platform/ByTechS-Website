import React from "react";

const PersonalInfo = ({ isArabic, formData, onInputChange }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-4">
      {isArabic ? "المعلومات الشخصية" : "Personal Information"}
    </h3>
    <div className="space-y-4">
      {[
        {
          name: "fullName",
          label: isArabic ? "الاسم الثلاثي" : "Full Name",
          type: "text",
        },
        {
          name: "phone",
          label: isArabic ? "رقم الجوال" : "Phone Number",
          type: "text",
        },
        {
          name: "email",
          label: isArabic ? "البريد الإلكتروني" : "Email",
          type: "email",
        },
      ].map(({ name, label, type }) => (
        <div key={name}>
          <label className="block font-medium mb-1">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={onInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
      ))}
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
                  onChange={onInputChange}
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
);

export default PersonalInfo;
