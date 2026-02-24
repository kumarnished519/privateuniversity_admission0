# 🚀 Quick Setup Guide

## ✅ Your Website is Ready!

The website has been created with all the files you need:
- `index.html` - Main website
- `style.css` - Beautiful styling  
- `script.js` - Functionality
- `package.json` - Dependencies (optional for Node.js version)
- `server.js` - Express backend (optional)
- `README.md` - Full documentation

## 📱 How to Use (No Setup Needed!)

### Option 1: Open Directly in Browser (Easiest)
Simply open `index.html` in your browser:
1. Double-click `index.html` or
2. Right-click → Open with → Browser

⚠️ **Note:** Messages will only save locally in browser cache (offline mode)

---

### Option 2: Setup Email Notifications (Recommended)

To receive emails when people send messages, use **Formspree** (Free):

#### Step 1: Create Formspree Account
1. Go to https://formspree.io
2. Click "Sign Up" (free)
3. Create account with your email: **nishedk076@gmail.com**

#### Step 2: Create a Form
1. In Formspree dashboard, click "New Form"
2. Give it a name like "University Inquiries"
3. Copy your Form ID (looks like: `mknqwxyz`)

#### Step 3: Update Your Website
1. Open `script.js` in a text editor
2. Find this line: `https://formspree.io/f/YOUR_FORM_ID`
3. Replace `YOUR_FORM_ID` with your actual ID from Step 2
4. Save the file

Example:
```javascript
// Before:
https://formspree.io/f/YOUR_FORM_ID

// After:
https://formspree.io/f/mknqwxyz
```

#### Step 4: Test It!
1. Open `index.html` in your browser
2. Select a university
3. Fill the form and send
4. Check your email for the notification

---

### Option 3: Full Node.js Backend (Advanced)

If you have Node.js installed:

```bash
# 1. Install dependencies
npm install

# 2. Set environment variables (optional)
export EMAIL_USER="your-email@gmail.com"
export EMAIL_PASSWORD="your-16-char-app-password"

# 3. Start the server
npm start

# 4. Open http://localhost:3000 in your browser
```

For email setup with Node.js, see the README.md file.

---

## 📧 University List Included

The website has 12 universities pre-loaded:
1. Harvard University (USA)
2. Stanford University (USA)
3. MIT (USA)
4. Oxford University (UK)
5. Cambridge University (UK)
6. Yale University (USA)
7. Princeton University (USA)
8. University of Tokyo (Japan)
9. National University of Singapore
10. University of Toronto (Canada)
11. ETH Zurich (Switzerland)
12. IIT Delhi (India)

### Want to Add More Universities?

Edit `index.html` and add more cards:

```html
<div class="university-card">
    <div class="uni-icon">🏛️</div>
    <h3>Your University Name</h3>
    <p>Location</p>
    <button class="select-btn" onclick="selectUniversity('Your University Name')">Select</button>
</div>
```

---

## 🎨 Customize Colors

Edit `style.css` and find:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Change to your favorite colors:
- Purple & Blue: `#667eea` and `#764ba2`
- Pink & Orange: `#f093fb` and `#f5576c`
- Green & Blue: `#4facfe` and `#00f2fe`

---

## 💾 View Submitted Messages

### In Browser Storage
Open browser console (F12) and type:
```javascript
JSON.parse(localStorage.getItem('messages'))
```

### Via Formspree Dashboard
Login to https://formspree.io to see all submitted forms

### Via Admin API (Node.js only)
Visit `http://localhost:3000/api/messages`

---

## ❓ Troubleshooting

| Problem | Solution |
|---------|----------|
| "Can't open index.html" | Make sure you're in the admission folder, then double-click it |
| "Email not working" | Check Formspree Form ID is correct in script.js |
| "Messages not saving" | Formspree needs the Form ID updated in script.js |
| "Website looks broken" | Make sure all 3 files (HTML, CSS, JS) are in same folder |

---

## 📱 Share Your Website

Once live, you can share the link with boys:
- Via WhatsApp
- Email
- Social Media
- Website

---

## 🎯 Next Steps

1. ✅ You now have a working website
2. ✅ Choose Option 1, 2, or 3 above
3. ✅ Test with a sample message
4. ✅ Start receiving messages!

---

**Questions? Check README.md for more details!**
