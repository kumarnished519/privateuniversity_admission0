// gemini-api.js

// IMPORTANT: Replace with your own Gemini API key
const API_KEY = 'YOUR_GEMINI_API_KEY';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

async function getGeminiResponse(prompt, context) {
    const fullPrompt = `${context}\n\nUser: ${prompt}\nAI:`

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: fullPrompt
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const content = data.candidates[0].content.parts[0].text;
        return content.trim();

    } catch (error) {
        console.error('Error fetching Gemini response:', error);
        return 'Sorry, I am having trouble connecting to the AI. Please try again later.';
    }
}
