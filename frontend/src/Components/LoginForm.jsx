import { useState } from "react";
import "./LoginForm.css";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [role] = useState("Third Party Company");
  const [companyId, setCompanyId] = useState("");
  const [numberError, setNumberError] = useState("");

  const mailHandler = (e) => setEmail(e.target.value);
  const passwordHandler = (e) => setPassword(e.target.value);
  const companyIdHandler = (e) => setCompanyId(e.target.value);

  const numberHandler = (e) => {
    const number = e.target.value;
    setMobile(number);
    const pattern = /^[6-9][0-9]{9}$/;
    setNumberError(
      number && !pattern.test(number) ? "Enter a valid 10-digit number" : ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[6-9][0-9]{9}$/.test(mobile)) {
      setNumberError("Enter a valid 10-digit number");
      return;
    }

    const formData = {
      email,
      password,
      role,
      companyId,
      mobile,
    };
    console.log(formData);

    setEmail("");
    setPassword("");
    setMobile("");
    setCompanyId("");
    setNumberError("");
  };

  return (
    <div className="form">
      <h1>Third Party Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="detail-form">
          <div>
            <label>Business Mail Id: </label>
            <input
              type="email"
              placeholder="Enter Mail Id"
              value={email}
              onChange={mailHandler}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="text"
              placeholder="Enter Password"
              value={password}
              onChange={passwordHandler}
              required
            />
          </div>
          <div>
            <label>Role: </label>
            <select disabled>
              <option>{role}</option>
            </select>
          </div>
          <div>
            <label>Company Id: </label>
            <select value={companyId} onChange={companyIdHandler} required>
              <option value="">Select a Company</option>
              {/* {companyList.map((company, index) => (
                <option key={index} value={company}>
                  {company}
                </option>
              ))} */}
            </select>
          </div>
          <div>
            <label>Contact No: </label>
            <input
              type="text"
              placeholder="Enter Contact No"
              value={mobile}
              onChange={numberHandler}
              required
            />
          </div>
          {numberError && <p style={{ color: "red" }}>{numberError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
