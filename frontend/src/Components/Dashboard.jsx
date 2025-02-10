import React, { useState, useEffect } from "react";
import "./Dashboard.css"; 

const Dashboard = () => {
  const getRandomAmount = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const [totalEarnings, setTotalEarnings] = useState(getRandomAmount(40000, 60000));
  const [projectBudget, setProjectBudget] = useState(getRandomAmount(10000, 20000));
  const [adminManaged, setAdminManaged] = useState(getRandomAmount(25000, 35000));

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalEarnings(getRandomAmount(40000, 60000));
      setProjectBudget(getRandomAmount(10000, 20000));
      setAdminManaged(getRandomAmount(25000, 35000));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Financial Overview 💼</h1>

      <div className="card-container">
        <div className="card total-earnings">
          <h2>Total Earnings</h2>
          <p>${totalEarnings.toLocaleString()}</p>
          <p className="subtitle">Overall revenue collected</p>
        </div>

        <div className="card project-budget">
          <h2>Project Budget</h2>
          <p>${projectBudget.toLocaleString()}</p>
          <p className="subtitle">Allocated for current projects</p>
        </div>

        <div className="card admin-managed">
          <h2>Admin Managed</h2>
          <p>${adminManaged.toLocaleString()}</p>
          <p className="subtitle">Funds managed by admin</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
