import React, { useState } from "react";
import axios from "axios";
import "../Styles/JoinUs.scss";

// ⚠️ Note: In production you should not expose your Airtable API key in client-side code.
const airtableApiKey =
  "pat042Mj9r5Dx98ff.d155c54347ad8585d7dfac9236640398c2592d36036b4f53722c8e1875a6bea1";
const baseId = "app9KzhrevXRJVMgJ";
const tableName = "JoinUs";

const JoinUs = () => {
  // Track the current step (1: Personal, 2: Academic/Experience/Commitment, 3: Community Selection)
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
    proAccounts: "", // Changed to "proAccounts" for the input placeholder
    // You also have these fields from your earlier code. If not needed, you can remove them:
    githubAccounts: "",
    linkedInbAccounts: "",
    otherLink: "",

    // Combined Step 2: Academic, Professional & Experience Information
    major: "",
    degree: "",
    hasCertificates: "", // "Yes" or "No"
    certificatesDetails: "",
    hasExperience: "", // "Yes" or "No"
    experienceDetails: "",
    whyByTechs: "",
    hearAbout: "",
    expectation: "",
    commitment: "", // "Yes" or "No"
    terms: "", // "Yes" or "No"

    // Step 3: Community Selection
    community: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  // Generic change handler for inputs and radio buttons
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Navigation functions
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // On final submission, prepare and send data to Airtable.
  const handleSubmit = async (e) => {
    e.preventDefault();
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
        // Using the professional accounts as provided:
        Github_Account: formData.githubAccounts,
        Linkedin_Account: formData.linkedInbAccounts,
        Other_Link: formData.otherLink,
        // Alternatively, you could use proAccounts if that’s your intended field.
        // Professional_Accounts: formData.proAccounts,
        Major: formData.major,
        Academic_Qualification: formData.degree,
        // Relative Certificates – if the user said “Yes,” then certificatesDetails should be filled.
        Relative_Certificates: formData.certificatesDetails,
        // Experience details
        Relative_experience: formData.experienceDetails,
        Why_ByTechs: formData.whyByTechs,
        Hear_From: formData.hearAbout,
        Expectation: formData.expectation,
        Commitment: formData.commitment,
        Terms_and_Conditions: formData.terms,
        // New community field from Step 3
        Community: formData.community,
      },
    };

    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${baseId}/${tableName}`,
        airtableData,
        {
          headers: {
            Authorization: `Bearer ${airtableApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess("Your application has been submitted successfully.");
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
        error.response?.data?.error?.message || "Unknown error occurred.";
      setError(`Failed to submit your application: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  // List of communities for the selection cards (adjust names and details as needed)
  const communities = [
    "Community 1",
    "Community 2",
    "Community 3",
    "Community 4",
    "Community 5",
  ];

  return (
    <div className="join-us-page">
      <h2>Join Us</h2>
      <p>Fill out the form below to join our team.</p>
      {success ? (
        <p className="success-message">{success}</p>
      ) : (
        <form onSubmit={handleSubmit} className="join-us-form">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="step step-1">
              <h3>Personal Information</h3>
              <input
                type="text"
                name="nameAr"
                placeholder="Full Name (Arabic)"
                value={formData.nameAr}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="nameEn"
                placeholder="Full Name (English)"
                value={formData.nameEn}
                onChange={handleChange}
                required
              />

              <div className="radio-group">
                <p>Gender:</p>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    required
                  />
                  Male
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
                  Female
                </label>
              </div>

              <input
                type="text"
                name="idNumber"
                placeholder="ID/Iqama Number"
                value={formData.idNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="residence"
                placeholder="Place of Residence"
                value={formData.residence}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="githubAccounts"
                placeholder="GitHub Account (Optional)"
                value={formData.githubAccounts}
                onChange={handleChange}
              />
              <input
                type="text"
                name="linkedInbAccounts"
                placeholder="LinkedIn Account (Optional)"
                value={formData.linkedInbAccounts}
                onChange={handleChange}
              />
              <input
                type="text"
                name="otherLink"
                placeholder="Portfolio or other account (Optional)"
                value={formData.otherLink}
                onChange={handleChange}
              />

              <button type="button" onClick={nextStep}>
                Next
              </button>
            </div>
          )}

          {/* Step 2: Combined Academic/Experience/Commitment Information */}
          {step === 2 && (
            <div className="step step-2">
              <h3>Academic, Professional &amp; Experience Information</h3>
              <input
                type="text"
                name="major"
                placeholder="Academic Major"
                value={formData.major}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="degree"
                placeholder="Educational Qualification (e.g., Diploma, Bachelor's, etc.)"
                value={formData.degree}
                onChange={handleChange}
                required
              />

              <div className="radio-group">
                <p>
                  Do you have any relevant professional certificates or courses?
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
                  Yes
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
                  No
                </label>
              </div>
              {formData.hasCertificates === "Yes" && (
                <textarea
                  name="certificatesDetails"
                  placeholder="List the most significant certificates or courses"
                  value={formData.certificatesDetails}
                  onChange={handleChange}
                  required
                ></textarea>
              )}

              <div className="radio-group">
                <p>Do you have any relevant work or volunteer experience?</p>
                <label>
                  <input
                    type="radio"
                    name="hasExperience"
                    value="Yes"
                    checked={formData.hasExperience === "Yes"}
                    onChange={handleChange}
                    required
                  />
                  Yes
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
                  No
                </label>
              </div>
              {formData.hasExperience === "Yes" && (
                <textarea
                  name="experienceDetails"
                  placeholder="Describe your most significant work or volunteer experience"
                  value={formData.experienceDetails}
                  onChange={handleChange}
                  required
                ></textarea>
              )}

              <textarea
                name="whyByTechs"
                placeholder="Why do you want to join ByTechS?"
                value={formData.whyByTechs}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="text"
                name="hearAbout"
                placeholder="Where did you hear about ByTechS? (Optional)"
                value={formData.hearAbout}
                onChange={handleChange}
              />
              <textarea
                name="expectation"
                placeholder="What do you expect the initiative to offer you? (Optional)"
                value={formData.expectation}
                onChange={handleChange}
              ></textarea>

              <div className="radio-group">
                <p>
                  Commitment: I pledge to adhere to the values and principles of
                  ByTechS and work as a team member in alignment with the
                  group’s vision and objectives.
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
                  Yes
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
                  No
                </label>
              </div>

              <div className="radio-group">
                <p>
                  Terms and Conditions: I agree to respect the rules and values
                  associated with the group and not misuse resources or
                  confidential information.
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
                  Yes
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
                  No
                </label>
              </div>

              <div className="navigation-buttons">
                <button type="button" onClick={prevStep}>
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Community Selection via Cards */}
          {step === 3 && (
            <div className="step step-3">
              <h3>Select Your Community</h3>
              <div className="community-cards">
                {communities.map((communityName, index) => (
                  <div
                    key={index}
                    className={`community-card ${
                      formData.community === communityName ? "selected" : ""
                    }`}
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        community: communityName,
                      }))
                    }
                    style={{
                      border: "1px solid #ccc",
                      padding: "1rem",
                      margin: "0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    <h4>{communityName}</h4>
                    <p>Details about {communityName}</p>
                  </div>
                ))}
              </div>
              <div className="navigation-buttons">
                <button type="button" onClick={prevStep}>
                  Back
                </button>
                <button type="submit" disabled={!formData.community || loading}>
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          )}

          {error && <p className="error-message">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default JoinUs;
