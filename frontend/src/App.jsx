// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import Signup from "./Auth/Sign";
import Login from "./Auth/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";

import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Services from "./Pages/Service";
import ContactForm from "./Components/connectingForm/connectionForm";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    // <Router>
    //   <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/services" element={<Services />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route
    //       path="/login"
    //       element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
    //     />
    //   </Routes>
    // </Router>
    <>
    <ConnectionForm/>
    </>
  );
};

export default App;
