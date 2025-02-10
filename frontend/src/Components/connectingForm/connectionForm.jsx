
import React, { useState } from "react";
import './connectionForm.css';
import chat from '../../assets/chat.png';

const ConnectionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    description: "",
    projectType: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "termsAccepted") {
      setErrors({ ...errors, termsAccepted: !checked });
    }
  };

  const handlePopup = () => {
    const { name, email, description, projectType, termsAccepted } = formData;
    let newErrors = { termsAccepted: false };

    if (!name || !email || !phone || !description || !projectType ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!termsAccepted) {
      newErrors.termsAccepted = true;
      setErrors(newErrors);
      return;
    }

    alert("Your data has been sent successfully");
  };

  return (
    <>
      <div className="form-container">
        <img src={chat} width="80px" alt="Chat Icon" />
        <h2>START A CONVERSATION</h2>
        <em>Share your requirements and we’ll get back to you with how we can help.</em>

        <form className="form">
          <div className="form-row">
            <input type="text" name="name" placeholder="Name *" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-row">
            <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          </div>

          <input type="text" name="description" placeholder="Brief description of your project/requirements *" value={formData.description} onChange={handleChange} required />

          <select name="projectType" value={formData.projectType} onChange={handleChange} required>
            <option value="">Type of Project *</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Other">Other</option>
          </select>
        </form>
      </div>

      <div className="checkbox">
        <input type="checkbox" id="terms" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
        <p>I agree to the terms and conditions *</p>
        {errors.termsAccepted ?  <p className="error-text">You must accept the terms and conditions.</p> : null}
        
      </div>

      <button className="btn" onClick={handlePopup}>Send Inquiry</button>
    </>
  );
};

export default ConnectionForm;
