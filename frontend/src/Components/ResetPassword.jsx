import React, { useState } from "react";
import axios from "axios";
import "./ResetPassword.css"; 

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSendOTP = async () => {
        if (!email) return setMessage("Please enter your email");

        try {
            await axios.post("http://localhost:5001/send-otp", { email });
            setOtpSent(true);
            setMessage("OTP sent to your email");
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setMessage("User does not exist, please contact admin.");
            } else {
                setMessage("Failed to send OTP due to server issue.");
            }
        }
    };

    const handleChangeOtp = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) document.getElementById(`otp-${index + 1}`).focus();
    };

    const handleVerifyOTP = async () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length !== 6) return setMessage("Enter a valid 6-digit OTP");

        try {
            await axios.post("http://localhost:5001/verify-otp", { email, otp: enteredOtp });
            setOtpVerified(true);
            setMessage("OTP verified. Set your new password.");
        } catch {
            setMessage("Invalid OTP");
        }
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) return setMessage("Passwords do not match");

        try {
            await axios.post("http://localhost:5001/reset-password", { email, newPassword });
            alert("Password reset successfully!");
            window.location.reload();
        } catch {
            setMessage("Failed to reset password");
        }
    };

    return (
        <div className="reset-password-container">
            <h2>Reset Password</h2>

            {!otpSent && (
                <>
                    <input
                        type="email"
                        className="input-field"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="button" onClick={handleSendOTP}>Send OTP</button>
                </>
            )}

            {otpSent && !otpVerified && (
                <>
                    <h3>Enter Your 6 digit OTP</h3>
                    <div className="otp-container">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength="1"
                                className="otp-box"
                                value={digit}
                                onChange={(e) => handleChangeOtp(index, e.target.value)}
                            />
                        ))}
                    </div>
                    <button className="button" onClick={handleVerifyOTP}>Verify OTP</button>
                </>
            )}

            {otpVerified && (
                <>
                    <h3>Set New Password</h3>
                    <input
                        type="password"
                        className="input-field"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        className="input-field"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button className="button" onClick={handleResetPassword}>Reset Password</button>
                </>
            )}

            <p className="message">{message}</p>
        </div>
    );
};

export default ResetPassword;