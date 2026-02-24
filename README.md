# 🎓 University Admission Portal

A beautiful website where boys can select universities and send you messages about their interests.

## Features

✅ **12 Top Universities** - Harvard, Stanford, MIT, Oxford, Cambridge, Yale, Princeton, Tokyo, NUS, Toronto, ETH Zurich, IIT Delhi

✅ **Interactive University Selection** - Click to select a university and auto-scroll to message form

✅ **Email Notifications** - Receive emails when someone sends a message

✅ **Message Storage** - All messages saved in JSON format for future reference

✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Email (Important!)

The website sends email notifications to **nishedk076@gmail.com**

To enable email functionality:

#### Option A: Using Gmail (Recommended)
1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Create an App Password for "Node.js Mail"
3. Copy the 16-character password

#### Option B: Using Other Email Services
Update the email configuration in `server.js` for your email provider

### 3. Start the Server

Create a `.env` file (optional):
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

Then start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

### 4. Access the Website

Open your browser and go to:
```
http://localhost:3000
```

## File Structure

```
admission/
├── index.html      # Main website
├── style.css       # Beautiful styling
├── script.js       # Frontend functionality
├── server.js       # Express backend server
├── package.json    # Dependencies
├── messages.json   # Stored messages
└── README.md       # This file
```

## How It Works

1. **Users visit the website** → See 12 popular universities
2. **They click "Select"** → University name auto-fills in the form
3. **They fill out the form** with name, phone, and message
4. **They click "Send Message"** → Message is sent to you via email AND saved locally

## Receiving Messages

### Via Email
- Every message sends an email to **nishedk076@gmail.com**
- Includes: Name, Phone, University, Message, Timestamp

### Via JSON File
- All messages stored in `messages.json`
- Access via API: `GET http://localhost:3000/api/messages`

## Message Example

```json
{
  "id": 1706614800000,
  "name": "Raj Kumar",
  "phone": "+91-9876543210",
  "university": "Stanford University",
  "message": "Hi! I'm interested in Stanford's Computer Science program...",
  "timestamp": "2026-01-30T12:00:00.000Z"
}
```

## Customization

### Add More Universities

Edit `index.html` and add more cards in the universities grid:

```html
<div class="university-card">
    <div class="uni-icon">🏛️</div>
    <h3>Your University Name</h3>
    <p>Location</p>
    <button class="select-btn" onclick="selectUniversity('Your University Name')">Select</button>
</div>
```

### Change Colors

Edit `style.css` and update the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Troubleshooting

### "Port 3000 already in use"
```bash
# Use a different port
PORT=3001 npm start
```

### Email not sending
- Check if App Password is correct
- Verify 2FA is enabled on Gmail account
- Check internet connection

### Messages not saving
- Ensure write permissions in the folder
- Check if `messages.json` exists

## Support

For issues or questions, check the server console for error messages.

---

**Built with ❤️ | All messages are secure and stored safely**
