import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
  const [formData, setFormData] = useState({ email: '', name: '', password: '', role: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Print form data to console for debugging
    console.log('Form Data Submitted:', formData);

    try {
      const response = await axios.post('/api/login', {
        email: formData.email,
        password: formData.password,
        role: formData.role, // Send role data to the backend
      });

      const { token } = response.data;
      const decodedToken = jwtDecode(token);

      localStorage.setItem('email', decodedToken.email);
      localStorage.setItem('jwtToken', token);

      // Navigate to the dashboard or home page after successful login
      navigate('/');
    } catch (error) {
    
    }
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/656693.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        marginTop: '-2rem', // Adjusted margin top
        marginLeft: '-2rem', // Adjusted margin right
      }}
    >
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.2)' }}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-3">Sign In</h2>
          {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
          
            <select
              name="role"
              className="form-control"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="employee">Employee</option>
              <option value="third_party">Third Party</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>

        <button className="btn btn-link mt-2 w-100" onClick={() => navigate('/login')}>
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};

export default Signin;
