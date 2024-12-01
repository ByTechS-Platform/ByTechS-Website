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
     dob: "",
     email: "",
     phone: "",
     linkedin: "",
     github: "",
     major: "",
     degree: "",
     experience: "",
     intrestedIn: "",
     whyByTechs: "",
     terms: false,
   });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post(
        `https://api.airtable.com/v0/${baseId}/${tableName}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${airtableApiKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      setSuccess("Your application has been submitted successfully.");
      setLoading(false);
      setFormData({
        nameAr: "",
        nameEn: "",
        nationality: "",
        dob: "",
        email: "",
        phone: "",
        linkedin: "",
        github: "",
        major: "",
        degree: "",
        experience: "",
        intrestedIn: "",
        whyByTechs: "",
        terms: false,
      });
    } catch (error) {
      setError("Failed to submit your application. Please try again later.");
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
        <input
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
        />
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
          name="intrestedIn"
          placeholder="Interested In"
          value={formData.intrestedIn}
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