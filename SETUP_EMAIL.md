# 📧 Email Setup Guide - College Portal

## How to Setup Email Notifications

When students send inquiries through your portal, they will automatically be sent to your email inbox.

### Step 1: Install Dependencies
```bash
cd /Users/nishedkumar06/admission
npm install
```

### Step 2: Generate Gmail App Password

1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled
3. Search for "App passwords" in the security settings
4. Select "Mail" and "Windows Computer" (or your device)
5. Google will generate a 16-character password - **COPY THIS**

### Step 3: Update server.js

Open `server.js` and find this line:
```javascript
pass: 'your_app_password_here' // Replace with your 16-character password
```

Replace `your_app_password_here` with the 16-character password from Google.

Example:
```javascript
pass: 'abcd efgh ijkl mnop' // Your actual app password
```

### Step 4: Start the Server

```bash
node server.js
```

You should see:
```
🎓 College Portal Server running on http://localhost:3000
✅ Ready to receive inquiries!
```

### Step 5: Open the Website

Open in your browser:
```
http://localhost:3000
```

### How It Works

When a student fills the form and clicks "Send Inquiry":

1. **Email to You** 📧
   - Sent to: nishedk076@gmail.com
   - Contains all inquiry details in formatted HTML email
   - Subject: "New College Inquiry from [Student Name]"

2. **Confirmation Email to Student** ✅
   - Sent to: student's email
   - Confirms we received their inquiry
   - Shows their inquiry details

3. **Offline Backup** 💾
   - If server is offline, message is saved locally
   - Data stored in browser's localStorage

### Email Features

- ✅ Beautiful formatted emails
- ✅ Automatic confirmation to students
- ✅ All inquiry details (name, email, phone, college, message)
- ✅ Expected response time displayed
- ✅ Professional branding

### Troubleshooting

**Issue: "Failed to send email"**
- Check if 2-Step Verification is enabled on Gmail
- Verify app password is correct (16 characters)
- Make sure server.js has the correct password

**Issue: "Connection refused"**
- Make sure server is running: `node server.js`
- Check port 3000 is not in use: `lsof -i :3000`

**Issue: Gmail says "Less secure app access"**
- Don't use your regular Gmail password
- Always use the 16-character "App Password" from Step 2

### Keeping Server Running

To keep the server running even after closing terminal:

```bash
npm install -g pm2
pm2 start server.js
pm2 startup
pm2 save
```

### Stop the Server

```bash
node server.js
# Press Ctrl+C
```

---

**Your Portal Email:** nishedk076@gmail.com
**Website:** http://localhost:3000
