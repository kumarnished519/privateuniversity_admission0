// AI Chatbot for College Portal

const context = `
You are an AI assistant for a university admission portal. Your goal is to help students by answering their questions about the colleges, courses, fees, and admission process.

Here is the information you have about the universities:
${JSON.stringify(universityDetails, null, 2)}

Here are some frequently asked questions and their answers:
${JSON.stringify(aiResponses, null, 2)}

Please use this information to answer the user's questions. If you don't know the answer, you can say "I am sorry, I do not have that information. Please contact us for more details."
`;

function toggleChatbot() {
    const chatbox = document.getElementById('chatbox');
    chatbox.classList.toggle('hidden');
}

function displayBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-message ai-message';
    aiMsg.innerHTML = `🤖 <strong>AI:</strong> ${message}`;
    chatMessages.appendChild(aiMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return; 
    
    // Add user message
    const chatMessages = document.getElementById('chatMessages');
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user-message';
    userMsg.textContent = input.value;
    chatMessages.appendChild(userMsg);
    
    // Clear input
    input.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Generate AI response
    displayBotMessage('Thinking...');

    const response = await getGeminiResponse(message, context);
    
    // Remove the "Thinking..." message
    chatMessages.removeChild(chatMessages.lastChild);
    
    displayBotMessage(response);
}

function displayInitialMessage() {
    const initialMessage = "Hi! 👋 I'm your AI Assistant. I can help you with questions about our colleges, fees, admission process, and more. What would you like to know?";
    displayBotMessage(initialMessage);
}

document.addEventListener('DOMContentLoaded', function() {
    displayInitialMessage();

    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

function recommendCourse() {
    const interest = document.getElementById('interestSelector').value;
    const recommendationDiv = document.getElementById('courseRecommendation');
    let recommendation = '';

    switch (interest) {
        case 'technology':
            recommendation = 'Based on your interest in <strong>Technology</strong>, we recommend B.Tech in Computer Science at <strong>Galgotias University</strong> or <strong>VIT University</strong>.';
            break;
        case 'business':
            recommendation = 'For your interest in <strong>Business</strong>, you should consider an MBA at <strong>IIMT University</strong> or <strong>Symbiosis International</strong>.';
            break;
        case 'law':
            recommendation = 'With an interest in <strong>Law</strong>, <strong>Symbiosis Law School</strong> or <strong>Shobhit University</strong> would be a great choice for your BA LLB.';
            break;
        case 'arts':
            recommendation = 'For <strong>Arts</strong>, we recommend exploring programs at <strong>FLAME University</strong> or <strong>Lovely Professional University</strong>.';
            break;
    }

    recommendationDiv.innerHTML = recommendation;
}

function checkEligibility() {
    const marks = document.getElementById('userMarks').value;
    const course = document.getElementById('courseSelector').value;
    const eligibilityDiv = document.getElementById('eligibilityResult');
    let result = '';

    if (!marks) {
        result = 'Please enter your marks.';
    } else {
        const percentage = parseInt(marks);
        if (percentage >= 85) {
            result = `With <strong>${percentage}%</strong>, you are eligible for <strong>${course}</strong> at all our top colleges, including <strong>VIT, LPU, and Symbiosis</strong>.`;
        } else if (percentage >= 75) {
            result = `With <strong>${percentage}%</strong>, you are eligible for <strong>${course}</strong> at most of our colleges, including <strong>Galgotias University and IIMT University</strong>.`;
        } else if (percentage >= 60) {
            result = `With <strong>${percentage}%</strong>, you are eligible for <strong>${course}</strong> at several colleges like <strong>Shobhit University and Manav Rachna University</strong>.`;
        } else {
            result = `With <strong>${percentage}%</strong>, your options are limited, but we can still help. Please contact us for personalized guidance.`;
        }
    }

    eligibilityDiv.innerHTML = result;
}