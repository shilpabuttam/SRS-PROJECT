const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let otpStorage = {};

const allowedEmails = [
    "nvb1928@gmail.com",
    "user2@example.com",
    "user3@example.com",
    "user4@example.com",
    "user5@example.com"
];

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "busitronofc@gmail.com", 
        pass: "crnabltgpinprixe",     
    },
});


app.post("/send-otp", (req, res) => {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    if (!allowedEmails.includes(email)) {
        return res.status(404).json({ error: "User does not exist, please contact admin." });
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStorage[email] = { otp, expires: Date.now() + 300000 };

    console.log(`Generated OTP for ${email}:`, otp);

    const mailOptions = {
        from: "busitronofc@gmail.com",  
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: "Failed to send OTP due to server issue" });
        }
        res.json({ message: "OTP sent successfully" });
    });
});

app.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;

    if (!otpStorage[email]) return res.status(400).json({ error: "OTP not found for this email" });

    const storedOtp = otpStorage[email].otp.toString();
    const enteredOtp = otp.toString();

    if (storedOtp !== enteredOtp) {
        return res.status(400).json({ error: "Invalid OTP" });
    }

    if (Date.now() > otpStorage[email].expires) {
        return res.status(400).json({ error: "OTP expired" });
    }

    res.json({ message: "OTP verified successfully" });
});

app.post("/reset-password", (req, res) => {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) return res.status(400).json({ error: "Email and new password are required" });

    delete otpStorage[email];
    res.json({ message: "Password reset successfully" });
});

app.listen(5001, () => {
    console.log("Server running on port 5001");
});

