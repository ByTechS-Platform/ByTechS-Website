import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/JoinUs.scss";


const airtableApiKey =
  "pat042Mj9r5Dx98ff.d155c54347ad8585d7dfac9236640398c2592d36036b4f53722c8e1875a6bea1";
const baseId = "app9KzhrevXRJVMgJ";
const tableName = "JoinUs";


const JoinUs = () => {
   const [formData, setFormData] = useState({
     nameAr: "",
     nameEn: "",
     nationality: "",
    //  dob: "",
     email: "",
     phone: "",
    //  linkedin: "",
    //  github: "",
     major: "",
     degree: "",
     experience: "",
     interestedIn: "",
     whyByTechs: "",
     terms: false,
   });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Prepare data in Airtable format
      const airtableData = {
        fields: {
          Name_ar: formData.nameAr,
          Name_en: formData.nameEn,
          Nationality: formData.nationality,
          // DOB: formData.dob,
          Email: formData.email,
          Phone_Number: formData.phone,
          // LinkedIn: formData.linkedin,
          // GitHub: formData.github,
          Major: formData.major,
          Academic_qualification: formData.degree,
          Experience: formData.experience,
          Interested_In: formData.interestedIn,
          Why_ByTechs: formData.whyByTechs,
          // Terms: formData.terms ? "Yes" : "No",
        },
      };
      
      console.log(JSON.stringify({ fields: formData }, null, 2));
      console.log(JSON.stringify(airtableData, null, 2));


      // Submit data to Airtable
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
      setFormData({
        nameAr: "",
        nameEn: "",
        nationality: "",
        // dob: "",
        email: "",
        phone: "",
        // linkedin: "",
        // github: "",
        major: "",
        degree: "",
        experience: "",
        interestedIn: "",
        whyByTechs: "",
        terms: false,
      });
    } catch (error) {
      console.error(error);
      // // Handle specific errors
      // if (error.response?.status === 403) {
      //   setError(
      //     "Access forbidden. Please check your API key, base ID, and table permissions."
      //   );
      // } else if (error.response?.status === 401) {
      //   setError("Unauthorized access. Verify your API key.");
      // } else {
      //   setError(
      //     error.response?.data?.error?.message ||
      //       "Failed to submit your application. Please try again later."
      //   );
      // }

      const errorMessage =
        error.response?.data?.error?.message || "Unknown error occurred.";
      setError(`Failed to submit your application: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="join-us-page">
      <h2>Join Us</h2>
      <p>Fill out the form below to join our team.</p>
      <form onSubmit={handleSubmit} className="join-us-form">
        <input
          type="text"
          name="nameAr"
          placeholder="Name (Arabic)"
          value={formData.nameAr}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nameEn"
          placeholder="Name (English)"
          value={formData.nameEn}
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
        {/* <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
          required
        /> */}
        <input
          type="email"
          name="email"
          placeholder="Email"
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
        {/* <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Profile"
          value={formData.linkedin}
          onChange={handleChange}
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub Profile"
          value={formData.github}
          onChange={handleChange}
        /> */}
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={formData.major}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
        <textarea
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="interestedIn"
          placeholder="Interested In"
          value={formData.interestedIn}
          onChange={handleChange}
        />
        <textarea
          name="whyByTechs"
          placeholder="Why do you want to join ByTechs?"
          value={formData.whyByTechs}
          onChange={handleChange}
        ></textarea>
        <div className="terms-container">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              required
            />
            I agree to the terms and conditions.
          </label>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
        {success && (
          <p className="success-message">Form submitted successfully!</p>
        )}
        {error && (
          <p className="error-message">Submission failed. Please try again.</p>
        )}
      </form>
    </div>
  );
}

export default JoinUs