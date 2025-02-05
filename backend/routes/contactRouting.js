import express from 'express';
import nodemailer from 'nodemailer';
const contactRouting = express.Router();
import Contact from '../models/contactModel.js';
import dotenv from 'dotenv';
dotenv.config();
// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,  // Your Gmail address
        pass: process.env.PASS,              // App password (not your Gmail password)
    }
});

// Route to create a new contact and send an email notification
contactRouting.post("/contact", async (req, res) => {
    try {
        const { name, email, companyname, phone, description, type } = req.body;

        // Save contact to the database
        let contact = new Contact(req.body);
        let result = await contact.save();

        // Set up email details
        const mailOptions = {
            from: '"noreply" <original.todo.site@gmail.com>', // Sender
            to: process.env.SUPERMAIL,                       // Recipient
            subject: 'New Contact Submission',
            html: `
                <h3>New Contact Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${companyname}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Type of Project:</strong> ${type}</p>
            `
        };

        // Send email notification
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
                return res.status(500).send('Contact saved, but error sending email: ' + error.message);
            }
            res.status(201).send({ message: 'Contact saved and email sent successfully!', contact: result });
        });

    } catch (err) {
        console.error("Error saving contact:", err);
        res.status(500).send({ message: 'An error occurred while saving the contact.' });
    }
});


export {contactRouting};
