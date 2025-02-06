import React, { useState } from "react";
import axios from "axios";
import "../Styles/JoinUs.scss";
import { useLanguage } from "../utils/LanguageContext";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import shape1 from "../assets/Shape12.svg";

const airtableApiKey =
  "pat042Mj9r5Dx98ff.d155c54347ad8585d7dfac9236640398c2592d36036b4f53722c8e1875a6bea1";
const baseId = "app9KzhrevXRJVMgJ";
const tableName = "JoinUs";

// Translations for the JoinUs component
const translations = {
  joinUsTitle: { en: "Join Us", ar: "انضم إلينا" },
  joinUsInstruction: {
    en: "Fill out the form below to join our team.",
    ar: "املأ النموذج أدناه للانضمام إلى فريقنا.",
  },
  personalInfo: { en: "Personal Information", ar: "المعلومات الشخصية" },
  fullNameArabic: { en: "Full Name (Arabic)", ar: "الاسم الكامل (بالعربية)" },
  fullNameEnglish: {
    en: "Full Name (English)",
    ar: "الاسم الكامل (بالإنجليزية)",
  },
  gender: { en: "Gender", ar: "الجنس" },
  male: { en: "Male", ar: "ذكر" },
  female: { en: "Female", ar: "أنثى" },
  idNumber: { en: "ID/Iqama Number", ar: "رقم الهوية/الإقامة" },
  nationality: { en: "Nationality", ar: "الجنسية" },
  dob: { en: "Date of Birth", ar: "تاريخ الميلاد" },
  email: { en: "Email Address", ar: "البريد الإلكتروني" },
  phone: { en: "Phone Number", ar: "رقم الهاتف" },
  residence: { en: "Place of Residence", ar: "مكان الإقامة" },
  githubAccounts: {
    en: "GitHub Account (Optional)",
    ar: "GitHub، (اختياري)",
  },
  linkedInbAccounts: {
    en: "LinkedIn Account (Optional)",
    ar: "LinkedIn (اختياري)",
  },
  otherLink: {
    en: "Portfolio or other account (Optional)",
    ar: "الحسابات المهنية (اختياري)",
  },
  academicInfo: {
    en: "Academic, Professional & Experience Information",
    ar: "المعلومات الأكاديمية والمهنية والتجريبية",
  },
  academicMajor: { en: "Academic Major", ar: "التخصص الدراسي" },
  degree: {
    en: "Educational Qualification (e.g., Diploma, Bachelor's, etc.)",
    ar: "المؤهل العلمي (مثل الدبلوم، البكالوريوس، إلخ)",
  },
  certificatesQuestion: {
    en: "Do you have any relevant professional certificates or courses?",
    ar: "هل لديك شهادات أو دورات مهنية ذات صلة؟",
  },
  certificatesDetails: {
    en: "List the most significant certificates or courses",
    ar: "اذكر أهم الشهادات أو الدورات",
  },
  experienceQuestion: {
    en: "Do you have any relevant work or volunteer experience?",
    ar: "هل لديك خبرة عمل أو تطوعية ذات صلة؟",
  },
  experienceDetails: {
    en: "Describe your most significant work or volunteer experience",
    ar: "صف أهم خبراتك العملية أو التطوعية",
  },
  whyByTechs: {
    en: "Why do you want to join ByTechS?",
    ar: "لماذا تريد الانضمام إلى ByTechS؟",
  },
  hearAbout: {
    en: "Where did you hear about ByTechS? (Optional)",
    ar: "من أين سمعت عن ByTechS؟ (اختياري)",
  },
  expectation: {
    en: "What do you expect the initiative to offer you? (Optional)",
    ar: "ماذا تتوقع أن تقدم لك المبادرة؟ (اختياري)",
  },
  commitment: {
    en: "I pledge to adhere to the values and principles of ByTechS and work as a team member in alignment with the group’s vision and objectives.",
    ar: "أتعهد بالالتزام بقيم ومبادئ ByTechS والعمل كعضو في الفريق بما يتوافق مع رؤية وأهداف المجموعة.",
  },
  terms: {
    en: "I agree to respect the rules and values associated with the group and not misuse resources or confidential information.",
    ar: "أوافق على احترام القواعد والقيم المرتبطة بالمجموعة وعدم إساءة استخدام الموارد أو المعلومات السرية.",
  },
  communitySelection: {
    en: "Select Your Community",
    ar: "اختر مجتمعك",
  },
  next: { en: "Next", ar: "التالي" },
  back: { en: "Back", ar: "السابق" },
  submit: { en: "Submit", ar: "إرسال" },
  submitting: { en: "Submitting...", ar: "جاري الإرسال..." },
  successMessage: {
    en: "Your application has been submitted successfully.",
    ar: "تم تقديم طلبك بنجاح.",
  },
  errorMessage: {
    en: "Failed to submit your application. Please try again.",
    ar: "فشل إرسال طلبك. يرجى المحاولة مرة أخرى.",
  },
  yes: { en: "Yes", ar: "نعم" },
  no: { en: "No", ar: "لا" },
};

////////////////////////////////////////////////////////////////
const communities = [
  {
    name: { en: "ByTechs eSports", ar: "مجتمع الرياضات الإلكترونية" },
    details: {
      en: "A community that combines e-sports and technical development to enhance skills in gaming and teamwork. Also, it provides an environment that blends passion for gaming with the development of technical and managerial skills.",
      ar: " مجتمع يجمع بين الرياضات الإلكترونية والتطوير التقني لتطوير المهارات في الألعاب والعمل الجماعي. ويوفر بيئة تجمع بين شغف الألعاب وتنمية المهارات التقنية والإدارية.",
    },
  },
  {
    name: {
      en: "ByTechs Supply Chain & Logistics",
      ar: "مجتمع سلاسل الإمداد والخدمات اللوجستية",
    },
    details: {
      en: "Focuses on empowering members through hands-on workshops and innovative programs. Provides awareness opportunities to apply and transfer knowledge to the community.",
      ar: "يركز على تمكين الأعضاء عبر ورش عمل عملية وبرامج مبتكرة. ويقدم فرص توعية لتطبيق المعرفة ونقلها للمجتمع.",
    },
  },
  {
    name: { en: "Digital Marketing", ar: "مجتمع التسويق الرقمي" },
    details: {
      en: "Empowering those interested in digital marketing with the latest skills and strategies. Also, Supporting beginners by providing a solid foundation to enter the field",
      ar: "تمكين المهتمين بالتسويق الرقمي عبر أحدث المهارات والاستراتيجيات. ودعم المبتدئين بتوفير أساس قوي لدخول المجال.",
    },
  },
  {
    name: { en: "IT Department", ar: "قسم تقنية المعلومات" },
    details: {
      en: "A specialized team in developing innovative technical solutions that meet ByTechS's needs, and maintaining and continuously updating ByTechS's digital platforms.",
      ar: "فريق متخصص في تطوير الحلول التقنية المبتكرة التي تلبي احتياجات بايتكس، إضافةً إلى صيانة وتحديث منصات بايتكس الرقمية بشكل مستمر.",
    },
  },
  {
    name: {
      en: "PR & Communications Department",
      ar: "قسم الاتصال الداخلي والعلاقات العامة",
    },
    details: {
      en: "It fosters a work environment defined by transparency and open communication. and develops internal communication and public relations skills in an innovative way.",
      ar: "يعزز بيئة عمل تتسم بالشفافية والتواصل المفتوح.ويطور مهارات الاتصال الداخلي والعلاقات العامة بشكل مبتكر",
    },
  },
];

const JoinUs = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  // Access the active language from context
  const { language } = useLanguage();

  // Track the current step (1: Personal, 2: Academic/Experience, 3: Additional Questions, 4: Community Selection)
  const [step, setStep] = useState(1);

  // Our form state now includes all fields plus the new "community" field
  const [formData, setFormData] = useState({
    // Step 1: Personal Information
    nameAr: "",
    nameEn: "",
    gender: "",
    idNumber: "",
    nationality: "",
    dob: "",
    email: "",
    phone: "",
    residence: "",
    proAccounts: "",
    githubAccounts: "",
    linkedInbAccounts: "",
    otherLink: "",

    // Step 2: Academic & Work Experience Information
    major: "",
    degree: "",
    hasCertificates: "", // "Yes" or "No"
    certificatesDetails: "",
    hasExperience: "", // "Yes" or "No"
    experienceDetails: "",

    // Step 3: Additional Questions
    whyByTechs: "",
    hearAbout: "",
    expectation: "",
    commitment: "", // "Yes" or "No"
    terms: "", // "Yes" or "No"

    // Step 4: Community Selection
    community: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleScrollToSection = (sectionId) => {
    const url = `${window.location.origin}/#${sectionId}`;
    window.open(url, "_blank"); // Opens the section in a new tab
  };

  const getIndicatorClass = (indicatorStep) => {
    if (step > indicatorStep) return "completed";
    if (step === indicatorStep) return "active";
    return "";
  };

  // Generic change handler for inputs and radio buttons
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Simple form validation function (validates all required fields)
  const validateForm = () => {
    setError(null);
    // Validate Step 1: Personal Information
    if (
      !formData.nameAr.trim() ||
      !formData.nameEn.trim() ||
      !formData.gender ||
      !formData.idNumber.trim() ||
      !formData.nationality.trim() ||
      !formData.dob ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.residence.trim()
    ) {
      setError("Please fill in all required personal information fields.");
      return false;
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Validate Step 2: Academic & Work Experience Information
    if (!formData.major.trim() || !formData.degree.trim()) {
      setError("Please fill in your academic information fields.");
      return false;
    }
    if (
      formData.hasCertificates === "Yes" &&
      !formData.certificatesDetails.trim()
    ) {
      setError("Please list your certificates or courses.");
      return false;
    }
    if (
      formData.hasExperience === "Yes" &&
      !formData.experienceDetails.trim()
    ) {
      setError("Please describe your work or volunteer experience.");
      return false;
    }

    // Validate Step 3: Additional Questions
    if (
      !formData.whyByTechs.trim() ||
      !formData.commitment ||
      !formData.terms
    ) {
      setError(
        "Please answer all required questions in the additional questions section."
      );
      return false;
    }
    // Validate Step 4: Community Selection
    if (!formData.community) {
      setError("Please select a community.");
      return false;
    }
    return true;
  };

  // Navigation functions
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // On final submission, prepare and send data to Airtable.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Map formData fields to the expected Airtable field names.
    const airtableData = {
      fields: {
        Name_AR: formData.nameAr,
        Name_EN: formData.nameEn,
        Gender: formData.gender,
        National_ID: formData.idNumber,
        Nationality: formData.nationality,
        Date_of_Birth: formData.dob,
        Email: formData.email,
        Phone_Number: formData.phone,
        Residency: formData.residence,
        Github_Account: formData.githubAccounts,
        Linkedin_Account: formData.linkedInbAccounts,
        Other_Link: formData.otherLink,
        Major: formData.major,
        Academic_Qualification: formData.degree,
        Relative_Certificates: formData.certificatesDetails,
        Relative_experience: formData.experienceDetails,
        Why_ByTechs: formData.whyByTechs,
        Hear_From: formData.hearAbout,
        Expectation: formData.expectation,
        Commitment: formData.commitment,
        Terms_and_Conditions: formData.terms,
        Community: formData.community,
      },
    };

    try {
      await axios.post(
        `https://api.airtable.com/v0/${baseId}/${tableName}`,
        airtableData,
        {
          headers: {
            Authorization: `Bearer ${airtableApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess(translations.successMessage[language]);
      // Reset form state if desired
      setFormData({
        nameAr: "",
        nameEn: "",
        gender: "",
        idNumber: "",
        nationality: "",
        dob: "",
        email: "",
        phone: "",
        residence: "",
        proAccounts: "",
        githubAccounts: "",
        linkedInbAccounts: "",
        otherLink: "",
        major: "",
        degree: "",
        hasCertificates: "",
        certificatesDetails: "",
        hasExperience: "",
        experienceDetails: "",
        whyByTechs: "",
        hearAbout: "",
        expectation: "",
        commitment: "",
        terms: "",
        community: "",
      });
      setStep(1);
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.error?.message ||
        translations.errorMessage[language];
      setError(`Failed to submit your application: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="join-us-section"
      className={`join-us-section ${
        language === "ar" ? "align-right" : "align-left"
      }`}
    >
      <div className="illustration">
        <div className="shapes">
          <img src={shape1} alt="Shape 1"></img>
        </div>
      </div>
      <div className="join-us-page">
        <h2>{translations.joinUsTitle[language]}</h2>
        <p>{translations.joinUsInstruction[language]}</p>

        {/* Steps Indicator */}
        <div className="steps-indicator">
          <div className={`step-indicator ${getIndicatorClass(1)}`}>1</div>
          <div className={`step-indicator-line ${getIndicatorClass(2)}`}></div>
          <div className={`step-indicator ${getIndicatorClass(2)}`}>2</div>
          <div className={`step-indicator-line ${getIndicatorClass(3)}`}></div>
          <div className={`step-indicator ${getIndicatorClass(3)}`}>3</div>
          <div className={`step-indicator-line ${getIndicatorClass(4)}`}></div>
          <div className={`step-indicator ${getIndicatorClass(4)}`}>4</div>
        </div>

        {success ? (
          <p className="success-message">{success}</p>
        ) : (
          <form onSubmit={handleSubmit} className="join-us-form">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="step step-1">
                <h3>{translations.personalInfo[language]}</h3>
                <div className="form-group">
                  <div className="input-field">
                    <label htmlFor="nameAr">
                      {translations.fullNameArabic[language]}{" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="nameAr"
                      type="text"
                      name="nameAr"
                      // placeholder={translations.fullNameArabic[language]}
                      value={formData.nameAr}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="nameEn">
                      {translations.fullNameEnglish[language]}{" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="nameEn"
                      type="text"
                      name="nameEn"
                      // placeholder={translations.fullNameEnglish[language]}
                      value={formData.nameEn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <div className="input-field"> */}
                  <div className="radio-group">
                    <p>
                      {translations.gender[language]}
                      <span className="required">*</span>
                    </p>{" "}
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={handleChange}
                        required
                      />
                      {translations.male[language]}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={handleChange}
                        required
                      />
                      {translations.female[language]}
                    </label>
                  </div>
                  {/* </div> */}
                  <div className="input-field">
                    <label htmlFor="idNumber">
                      {translations.idNumber[language]}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="idNumber"
                      type="text"
                      name="idNumber"
                      // placeholder={translations.idNumber[language]}
                      value={formData.idNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="nationality">
                      {translations.nationality[language]}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="nationality"
                      type="text"
                      name="nationality"
                      // placeholder={translations.nationality[language]}
                      value={formData.nationality}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="dob">
                      {translations.dob[language]}{" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="dob"
                      type="date"
                      name="dob"
                      placeholder={translations.dob[language]}
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="email">
                      {translations.email[language]}{" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="phone">
                      {translations.phone[language]}{" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="+966"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="residence">
                      {translations.residence[language]}{" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="residence"
                      type="text"
                      name="residence"
                      // placeholder={translations.residence[language]}
                      value={formData.residence}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="githubAccounts">
                      {translations.githubAccounts[language]}
                    </label>
                    <input
                      id="githubAccounts"
                      type="text"
                      name="githubAccounts"
                      // placeholder={translations.githubAccounts[language]}
                      value={formData.githubAccounts}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="linkedInbAccounts">
                      {translations.linkedInbAccounts[language]}
                    </label>
                    <input
                      id="linkedInbAccounts"
                      type="text"
                      name="linkedInbAccounts"
                      // placeholder={translations.linkedInbAccounts[language]}
                      value={formData.linkedInbAccounts}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-field">
                    <label htmlFor="otherLink">
                      {translations.otherLink[language]}
                    </label>
                    <input
                      id="otherLink"
                      type="text"
                      name="otherLink"
                      // placeholder={translations.otherLink[language]}
                      value={formData.otherLink}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="navigation-buttons">
                  <button type="button" onClick={nextStep}>
                    {translations.next[language]}
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Academic & Work Experience Information */}
            {step === 2 && (
              <div className="step step-2">
                <h3>{translations.academicInfo[language]}</h3>
                <div className="input-field">
                  <label htmlFor="major">
                    {translations.academicMajor[language]}
                    <span className="required">*</span>
                  </label>
                  <input
                    id="major"
                    type="text"
                    name="major"
                    // placeholder={translations.academicMajor[language]}
                    value={formData.major}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="degree">
                    {translations.degree[language]}
                    <span className="required">*</span>
                  </label>
                  <input
                    id="degree"
                    type="text"
                    name="degree"
                    // placeholder={translations.degree[language]}
                    value={formData.degree}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <div className="radio-group">
                    <p>
                      {translations.certificatesQuestion[language]}{" "}
                      <span className="required">*</span>
                    </p>
                    <label>
                      <input
                        type="radio"
                        name="hasCertificates"
                        value="Yes"
                        checked={formData.hasCertificates === "Yes"}
                        onChange={handleChange}
                        required
                      />
                      {translations.yes[language]}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="hasCertificates"
                        value="No"
                        checked={formData.hasCertificates === "No"}
                        onChange={handleChange}
                        required
                      />
                      {translations.no[language]}
                    </label>
                  </div>
                  {formData.hasCertificates === "Yes" && (
                    <>
                      <label htmlFor="certificatesDetails">
                        {translations.certificatesDetails[language]}
                        <span className="required">*</span>
                      </label>
                      <textarea
                        id="certificatesDetails"
                        name="certificatesDetails"
                        // placeholder={translations.certificatesDetails[language]}
                        value={formData.certificatesDetails}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </>
                  )}
                </div>

                <div className="input-field">
                  <div className="radio-group">
                    <p>
                      {translations.experienceQuestion[language]}{" "}
                      <span className="required">*</span>
                    </p>
                    <label>
                      <input
                        type="radio"
                        name="hasExperience"
                        value="Yes"
                        checked={formData.hasExperience === "Yes"}
                        onChange={handleChange}
                        required
                      />
                      {translations.yes[language]}
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="hasExperience"
                        value="No"
                        checked={formData.hasExperience === "No"}
                        onChange={handleChange}
                        required
                      />
                      {translations.no[language]}
                    </label>
                  </div>
                  {formData.hasExperience === "Yes" && (
                    <>
                      <label htmlFor="experienceDetails">
                        {translations.experienceDetails[language]}
                        <span className="required">*</span>
                      </label>
                      <textarea
                        id="experienceDetails"
                        name="experienceDetails"
                        // placeholder={translations.experienceDetails[language]}
                        value={formData.experienceDetails}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </>
                  )}
                </div>

                <div className="navigation-buttons">
                  <button type="button" onClick={prevStep}>
                    {translations.back[language]}
                  </button>
                  <button type="button" onClick={nextStep}>
                    {translations.next[language]}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Additional Questions */}
            {step === 3 && (
              <div className="step step-3">
                <div className="input-field">
                  <label htmlFor="whyByTechs">
                    {translations.whyByTechs[language]}
                    <span className="required">*</span>
                  </label>
                  <textarea
                    id="whyByTechs"
                    name="whyByTechs"
                    // placeholder={translations.whyByTechs[language]}
                    value={formData.whyByTechs}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="input-field">
                  <label htmlFor="hearAbout">
                    {translations.hearAbout[language]}
                  </label>
                  <input
                    id="hearAbout"
                    type="text"
                    name="hearAbout"
                    // placeholder={translations.hearAbout[language]}
                    value={formData.hearAbout}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-field">
                  <label htmlFor="expectation">
                    {translations.expectation[language]}
                  </label>
                  <textarea
                    id="expectation"
                    name="expectation"
                    // placeholder={translations.expectation[language]}
                    value={formData.expectation}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* <div className="radio-group">
                  <p>{translations.commitment[language]}</p>
                  <label>
                    <input
                      type="radio"
                      name="commitment"
                      value="Yes"
                      checked={formData.commitment === "Yes"}
                      onChange={handleChange}
                      required
                    />
                    {translations.yes[language]}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="commitment"
                      value="No"
                      checked={formData.commitment === "No"}
                      onChange={handleChange}
                      required
                    />
                    {translations.no[language]}
                  </label>
                </div>

                <div className="radio-group">
                  <p>{translations.terms[language]}</p>
                  <label>
                    <input
                      type="radio"
                      name="terms"
                      value="Yes"
                      checked={formData.terms === "Yes"}
                      onChange={handleChange}
                      required
                    />
                    {translations.yes[language]}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="terms"
                      value="No"
                      checked={formData.terms === "No"}
                      onChange={handleChange}
                      required
                    />
                    {translations.no[language]}
                  </label>
                </div> */}

                <div className="navigation-buttons">
                  <button type="button" onClick={prevStep}>
                    {translations.back[language]}
                  </button>
                  <button type="button" onClick={nextStep}>
                    {translations.next[language]}
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Community Selection via Cards */}
            {step === 4 && (
              <div className="step step-4">
                <h3>
                  {translations.communitySelection[language]}{" "}
                  <span className="required">*</span>
                </h3>
                <button
                  onClick={() => handleScrollToSection("communities")}
                  className="comumunities-details-button"
                  type="button"
                >
                  <span
                    data-en="To know more details about communities click here"
                    data-ar="لتعرف اكثر عن المجتمعات اضغط هنا"
                  >
                    To know more details about communities click here
                  </span>
                </button>
                <div className="community-cards">
                  {communities.map((community, index) => (
                    <div
                      key={index}
                      className={`community-card ${
                        formData.community === community.name.en
                          ? "selected"
                          : ""
                      }`}
                      onClick={() =>
                        // Store the English name in the form data
                        setFormData((prev) => ({
                          ...prev,
                          community: community.name.en,
                        }))
                      }
                    >
                      <h4>{community.name[language]}</h4>
                      <p>{community.details[language]}</p>
                    </div>
                  ))}
                </div>

                <div className="radio-group">
                  <p>
                    {translations.commitment[language]}
                    <span className="required">*</span>
                  </p>
                  <label>
                    <input
                      type="radio"
                      name="commitment"
                      value="Yes"
                      checked={formData.commitment === "Yes"}
                      onChange={handleChange}
                      required
                    />
                    {translations.yes[language]}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="commitment"
                      value="No"
                      checked={formData.commitment === "No"}
                      onChange={handleChange}
                      required
                    />
                    {translations.no[language]}
                  </label>
                </div>

                <div className="radio-group">
                  <p>
                    {translations.terms[language]}
                    <span className="required">*</span>
                  </p>
                  <label>
                    <input
                      type="radio"
                      name="terms"
                      value="Yes"
                      checked={formData.terms === "Yes"}
                      onChange={handleChange}
                      required
                    />
                    {translations.yes[language]}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="terms"
                      value="No"
                      checked={formData.terms === "No"}
                      onChange={handleChange}
                      required
                    />
                    {translations.no[language]}
                  </label>
                </div>

                <div className="navigation-buttons">
                  <button type="button" onClick={prevStep}>
                    {translations.back[language]}
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.community || loading}
                  >
                    {loading
                      ? translations.submitting[language]
                      : translations.submit[language]}
                  </button>
                </div>
              </div>
            )}

            {error && <p className="error-message">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default JoinUs;
