import React, { useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title
} from "chart.js";

// Register Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);

const dummyPerformanceData = [
    { userId: "1", name: "VASU", taskCompletionRate: 80, taskHistory: [50, 60, 75, 80] },
    { userId: "2", name: "NIRANJAN", taskCompletionRate: 60, taskHistory: [40, 50, 55, 60] },
    { userId: "3", name: "VALIBASHA", taskCompletionRate: 70, taskHistory: [50, 60, 65, 70] },
    { userId: "4", name: "NAVEEN", taskCompletionRate: 90, taskHistory: [70, 80, 85, 90] },
    { userId: "5", name: "PALLAVI", taskCompletionRate: 85, taskHistory: [60, 70, 75, 85] },
    { userId: "6", name: "JEEVAN", taskCompletionRate: 50, taskHistory: [30, 40, 45, 50] },
    { userId: "7", name: "NAGUR", taskCompletionRate: 95, taskHistory: [80, 85, 90, 95] },
    { userId: "8", name: "SAI", taskCompletionRate: 78, taskHistory: [55, 65, 70, 78] },
    { userId: "9", name: "UDAYA SRI", taskCompletionRate: 65, taskHistory: [40, 50, 60, 65] },
    { userId: "10", name: "KOTI", taskCompletionRate: 88, taskHistory: [65, 75, 80, 88] },
];

const UserPerformance = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserChange = (event) => {
        const user = dummyPerformanceData.find((user) => user.userId === event.target.value);
        setSelectedUser(user);
    };

    return (
        <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            alignItems: "center", height: "100vh", backgroundColor: "#F1F1F2"
        }}>
            <div style={{
                width: "450px", padding: "20px", backgroundColor: "#fff", borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", textAlign: "center"
            }}>
                <h2 style={{ color: "#1995AD" }}>User Performance</h2>

                <select style={{
                    width: "100%", padding: "10px", marginBottom: "20px", borderRadius: "8px",
                    border: "1px solid #ddd", backgroundColor: "#A1D6E2", fontWeight: "bold", cursor: "pointer"
                }} onChange={handleUserChange}>
                    <option value="">Select a User</option>
                    {dummyPerformanceData.map((user) => (
                        <option key={user.userId} value={user.userId}>
                            {user.name}
                        </option>
                    ))}
                </select>

                {selectedUser && (
                    <motion.div
                        key={selectedUser.userId}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 style={{ color: "#1995AD" }}>{selectedUser.name}'s Performance</h3>

                        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                            {/* Task Completion Chart */}
                            <div style={{ width: "180px", position: "relative" }}>
                                <Doughnut
                                    data={{
                                        labels: ["Completed", "Remaining"],
                                        datasets: [{
                                            data: [selectedUser.taskCompletionRate, 100 - selectedUser.taskCompletionRate],
                                            backgroundColor: ["#1995AD", "#A1D6E2"],
                                            borderColor: "#1995AD",
                                            borderWidth: 2,
                                        }]
                                    }}
                                    options={{ cutout: "70%", plugins: { tooltip: { enabled: false } } }}
                                />
                                <div style={{
                                    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, 80%)",
                                    fontSize: "16px", fontWeight: "bold", color: "#1995AD"
                                }}>
                                    {selectedUser.taskCompletionRate}%
                                </div>
                            </div>

                            {/* Remaining Tasks Chart */}
                            <div style={{ width: "180px", position: "relative" }}>
                                <Doughnut
                                    data={{
                                        labels: ["Remaining", "Completed"],
                                        datasets: [{
                                            data: [100 - selectedUser.taskCompletionRate, selectedUser.taskCompletionRate],
                                            backgroundColor: ["#FF6B6B", "#A1D6E2"],
                                            borderColor: "#FF6B6B",
                                            borderWidth: 2,
                                        }]
                                    }}
                                    options={{ cutout: "70%", plugins: { tooltip: { enabled: false } } }}
                                />
                                <div style={{
                                    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, 80%)",
                                    fontSize: "16px", fontWeight: "bold", color: "#FF6B6B"
                                }}>
                                    {100 - selectedUser.taskCompletionRate}%
                                </div>
                            </div>
                        </div>

                        {/* Task Completion Trend Line Chart */}
                        <div style={{
                            marginTop: "30px", padding: "20px", backgroundColor: "#FFF",
                            borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                        }}>
                            <h4 style={{ color: "#1995AD", marginBottom: "10px" }}>Task Completion Trend</h4>
                            <Line
                                data={{
                                    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                                    datasets: [{
                                        label: "Task Completion Rate (%)",
                                        data: selectedUser.taskHistory,
                                        borderColor: "#1995AD",
                                        backgroundColor: "rgba(25, 149, 173, 0.2)",
                                        tension: 0.3,
                                    }]
                                }}
                                options={{
                                    responsive: true,
                                    plugins: { legend: { display: false } },
                                    scales: {
                                        y: { beginAtZero: true, suggestedMax: 100 }
                                    }
                                }}
                            />
                        </div>

                        {/* Description */}
                        <div style={{ marginTop: "20px", fontSize: "14px", fontWeight: "bold", color: "#1995AD" }}>
                            <p>{selectedUser.name} has completed {selectedUser.taskCompletionRate}% of tasks.</p>
                            <p>{100 - selectedUser.taskCompletionRate}% tasks are still pending.</p>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default UserPerformance;
