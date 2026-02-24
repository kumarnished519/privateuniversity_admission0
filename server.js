const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3000;
const MESSAGES_FILE = path.join(__dirname, 'messages.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Email transporter setup
// IMPORTANT: Replace with your own email credentials or use environment variables
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'nishedk076@gmail.com', // Your email
        pass: process.env.EMAIL_PASSWORD || 'your_app_password_here' // Your app-specific password
    }
});

// GET /api/messages - Retrieve all messages
app.get('/api/messages', async (req, res) => {
    try {
        const messages = await fs.readFile(MESSAGES_FILE, 'utf8');
        res.json(JSON.parse(messages));
    } catch (error) {
        console.error('Error reading messages:', error);
        res.status(500).json({ error: 'Failed to retrieve messages' });
    }
});

// POST /api/messages - Save a new message and send emails
app.post('/api/messages', async (req, res) => {
    const { name, email, phone, university, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !university) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const newMessage = {
        id: Date.now(),
        name,
        email,
        phone,
        university,
        message: message || 'No message provided',
        timestamp: new Date().toISOString()
    };

    try {
        // Save the message to messages.json
        let messages = [];
        try {
            const data = await fs.readFile(MESSAGES_FILE, 'utf8');
            messages = JSON.parse(data);
        } catch (readError) {
            // If the file doesn't exist, we'll create it with the new message.
        }
        messages.push(newMessage);
        await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));

        // --- Email Sending Logic ---

        // Email to your inbox
        const adminEmail = {
            from: `"${name}" <${email}>`,
            to: 'nishedk076@gmail.com',
            subject: `📬 New College Inquiry from ${name} for ${university}`,
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                    <h2 style="color: #667eea;">🎓 New Inquiry Received</h2>
                    <hr style="border: none; border-top: 2px solid #667eea;">
                    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
                        <p><strong>Student Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Selected College:</strong> <span style="color: #764ba2; font-weight: bold;">${university}</span></p>
                        <p><strong>Message:</strong></p>
                        <blockquote style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 0;">${newMessage.message}</blockquote>
                    </div>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin-top: 20px;">
                    <p style="font-size: 12px; color: #999;">This inquiry was submitted on ${new Date(newMessage.timestamp).toLocaleString()}.</p>
                </div>
            `
        };

        // Confirmation email to the user
        const userEmail = {
            from: '"Private College Portal" <nishedk076@gmail.com>',
            to: email,
            subject: '✅ We Have Received Your College Inquiry!',
            html: `
                <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                    <h2 style="color: #28a745;">✅ Your Inquiry for ${university} Has Been Received!</h2>
                    <hr style="border: none; border-top: 2px solid #28a745;">
                    <p>Dear ${name},</p>
                    <p>Thank you for your interest in <strong>${university}</strong>. We have successfully received your details.</p>
                    <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Your Submitted Details:</strong></p>
                        <ul style="list-style: none; padding-left: 10px;">
                            <li><strong>Name:</strong> ${name}</li>
                            <li><strong>Email:</strong> ${email}</li>
                            <li><strong>Phone:</strong> ${phone}</li>
                            <li><strong>College:</strong> ${university}</li>
                        </ul>
                    </div>
                    <p>Our admission counseling team will review your inquiry and get back to you within <strong>24 hours</strong> with more information about the admission process,. We will also update our `script.js` file to handle the form submission.
                    <p>If you have any urgent questions, feel free to reply to this email.</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0; margin-top: 20px;">
                    <p style="font-size: 12px; color: #999;">Best regards,<br><strong>The Private College Portal Team</strong><br><em>Your journey to the perfect college starts here!</em></p>
                </div>
            `
        };

        // Send emails
        await transporter.sendMail(adminEmail);
        await transporter.sendMail(userEmail);

        res.status(201).json({ success: true, message: 'Inquiry submitted and emails sent successfully!' });

    } catch (error) {
        console.error('Server error:', error);
        // Even if email fails, the message was saved.
        if (error.code === 'EENVELOPE') {
            return res.status(201).json({ success: true, message: 'Message saved, but failed to send confirmation email. Please check server logs.' });
        }
        res.status(500).json({ error: 'Failed to process your request.', details: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🎓 College Portal Server running on http://localhost:${PORT}`);
    console.log(`✅ Listening for API requests and serving static files.`);
});