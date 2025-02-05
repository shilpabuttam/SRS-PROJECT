import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Sign";
import Login from "./Auth/Login";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;