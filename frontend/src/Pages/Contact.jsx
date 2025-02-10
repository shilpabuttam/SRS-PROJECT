import React, { useState } from "react";
import "../style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    strength: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

        if (name === "name" && /\d/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name cannot contain numbers",
      }))
      
      return;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }

    alert("Form submitted:", formData);
    setFormData({ name: "", address: "", email: "", strength: "" });
  };

  return (
    <div className="main-container">
      <h1>Company Form</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            placeholder="Building name, Landmarks, District, State, Pincode"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label>Contact Email</label>
          <input
            type="email"
            placeholder="xyz@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Company's Strength</label>
          <input
            type="number"
            placeholder="Enter Number of Employees"
            name="strength"
            value={formData.strength}
            onChange={handleChange}
          />
          {errors.strength && <p className="error-text">{errors.strength}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
