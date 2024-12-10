const responses = [
    { keywords: ["hello", "hi", "hey", "greetings"], response: "Hello there! How can I help you today?" },
    { keywords: ["how are you", "how r u"], response: "I'm just a bunch of code, but I'm here and ready to help!" },
    { keywords: ["help", "assist", "support"], response: "Of course! Let me know what you're struggling with, and I'll do my best to assist." },
    { keywords: ["problem", "issue", "error"], response: "I'm sorry to hear that. Can you describe the issue in more detail?" },
    { keywords: ["thank you", "thanks"], response: "You’re very welcome! Is there anything else I can help you with?" },
    { keywords: ["bye", "goodbye", "see you"], response: "Goodbye! Have a wonderful day, and feel free to come back anytime." },
    { keywords: ["name"], response: "You can call me Chatbot. What can I call you?" },
    { keywords: ["who are you", "what are you"], response: "I’m a simple chatbot. I don’t have feelings, but I’m here to talk and help." },
    { keywords: ["time"], response: "I don’t have a watch, but you can check your device’s clock for the exact time!" },
    { keywords: ["joke"], response: "Sure! Why did the scarecrow become an award winner? Because he was out standing in his field!" },
    { keywords: ["funny", "humor"], response: "I'm not a stand-up comedian, but I'll try my best. Want to hear another joke?" },
    { keywords: ["weather", "forecast"], response: "I don’t have real-time weather data, but I hope it’s nice and sunny wherever you are!" },
    { keywords: ["date"], response: "I don’t keep track of dates, but every day is a new opportunity!" },
    { keywords: ["age"], response: "I’m ageless, but I’ve existed ever since you opened this page." },
    { keywords: ["where are you from"], response: "I’m from the internet—born out of code and hosted on a server." },
    { keywords: ["hobby", "hobbies"], response: "I don’t have hobbies like humans do, but I do enjoy interacting with users like you." },
    { keywords: ["like"], response: "I’m not sure I can like or dislike things, but I’m programmed to be helpful." },
    { keywords: ["movie", "film"], response: "I can’t watch movies, but I can try to recommend some popular titles. Have a favorite genre?" },
    { keywords: ["book", "read"], response: "I love hearing about what people read. What’s your favorite book?" },
    { keywords: ["music", "song"], response: "I can’t listen to music, but I’ve heard humans enjoy it a lot. Who’s your favorite artist?" },
    { keywords: ["food", "eat"], response: "I don’t eat, but I’m curious—what’s your favorite dish?" },
    { keywords: ["drink", "beverage"], response: "I can’t drink anything, but if I could, I might try something refreshing like lemonade." },
    { keywords: ["travel", "vacation"], response: "I can’t travel physically, but I’d love to hear about places you’ve been or want to go." },
    { keywords: ["exercise", "workout", "fitness"], response: "I can’t exercise, but staying active is great for humans. Do you have a favorite way to keep fit?" },
    { keywords: ["technology", "tech"], response: "Technology is my entire world. Is there a particular gadget or app you’re curious about?" },
    { keywords: ["computer", "pc"], response: "Computers are my home! What do you want to know about them?" },
    { keywords: ["smartphone", "phone"], response: "Smartphones connect people around the world. What’s your favorite mobile app?" },
    { keywords: ["social media"], response: "Social media is a big topic. Do you have a favorite platform?" },
    { keywords: ["sports", "game", "football", "soccer", "basketball"], response: "I can’t play sports, but I’m happy to chat about your favorite teams or matches." },
    { keywords: ["news", "current events"], response: "I don’t have the latest headlines, but I can talk about general topics. What’s on your mind?" },
    { keywords: ["history"], response: "History is fascinating, but I have a static memory. Is there a particular era or event you’re curious about?" },
    { keywords: ["science"], response: "Science is amazing. I can’t discover anything new, but I’m happy to talk about existing scientific facts." },
    { keywords: ["math", "mathematics"], response: "Need some help with a math problem? I might be able to handle simple arithmetic." },
    { keywords: ["philosophy"], response: "Philosophy raises deep questions. I don’t have beliefs, but we can discuss various viewpoints." },
    { keywords: ["art", "artist", "painting"], response: "Art is a human creation I can appreciate only through descriptions. Which artist do you like?" },
    { keywords: ["health", "wellness"], response: "I’m not qualified to give medical advice, but I encourage you to take care of yourself!" },
    { keywords: ["mental health", "stress", "anxiety"], response: "I’m not a professional, but sometimes talking to someone or seeking a professional can help." },
    { keywords: ["language", "learn language"], response: "Learning a new language can open new worlds. Which language are you interested in?" },
    { keywords: ["programming", "coding"], response: "Programming is how I exist! Do you have a question about coding?" },
    { keywords: ["python", "javascript", "java", "c++"], response: "Those are popular programming languages. Is there something specific you’d like to know about them?" },
    { keywords: ["school", "study", "college", "university"], response: "Education is important. Do you have questions about studying or choosing a career path?" },
    { keywords: ["career", "job", "work"], response: "Careers can be fulfilling or challenging. What’s your field of interest?" },
    { keywords: ["relationship", "love", "dating"], response: "Relationships can be complicated. I don’t have personal experience, but we can talk about it." },
    { keywords: ["pet", "dog", "cat"], response: "Pets are wonderful companions. Do you have one?" },
    { keywords: ["holiday", "celebration"], response: "Holidays bring people together. Do you have a favorite holiday?" },
    { keywords: ["happiness"], response: "Happiness can mean different things to different people. What makes you happy?" },
    { keywords: ["advice"], response: "I’m not an expert, but I can try to offer some general guidance. What do you need advice about?" },
    { keywords: ["confused", "unsure", "lost"], response: "It’s okay to feel uncertain. Maybe talking through it can help. What’s on your mind?" },
    { keywords: ["motivation", "inspire"], response: "Remember, every challenge is an opportunity to learn. You’ve got this!" },
    { keywords: ["quote", "inspiration"], response: "Here’s one: ‘In the middle of difficulty lies opportunity.’ – Albert Einstein." },
    { keywords: ["emotion", "feeling"], response: "I can’t feel emotions, but I understand they’re important to humans. How are you feeling?" },
    { keywords: ["future"], response: "The future is unknown, but it’s shaped by what we do today." },
    { keywords: ["past", "memory"], response: "I only remember what I’m programmed with, but humans have rich and personal memories." },
    { keywords: ["goal", "ambition"], response: "Setting clear goals can help guide your efforts. What are you aiming for?" },
    { keywords: ["fear", "scared"], response: "Facing fears can be tough. Talking about them might help. What concerns you?" },
    { keywords: ["dreams", "dream"], response: "Dreams can inspire us or puzzle us. Do you have a dream you’d like to share?" },
    { keywords: ["universe", "space"], response: "The universe is vast and mysterious. It’s fascinating, isn’t it?" },
    { keywords: ["alien", "extraterrestrial"], response: "I don’t know if aliens exist, but it’s a big universe out there." },
    { keywords: ["magic", "fantasy"], response: "Magic is a concept found in stories and imaginations. What’s your favorite fantasy world?" },
    { keywords: ["difficult", "hard"], response: "Difficult situations can help us grow. Do you want to discuss a particular challenge?" },
    { keywords: ["laughter", "laugh"], response: "Laughter is contagious, even if I can’t feel it. What makes you laugh?" },
    { keywords: ["adventure", "explore"], response: "Adventures can expand your horizons. Where would you like to go?" },
    { keywords: ["life"], response: "Life is complex, beautiful, and sometimes challenging. What aspect of life are you thinking about?" },
    { keywords: ["AI", "artificial intelligence"], response: "AI is what I am—though a very simple form. It can do amazing things!" },
    { keywords: ["frustrated", "angry"], response: "I’m sorry you’re feeling that way. Want to talk about what’s causing it?" },
    { keywords: ["curious", "wondering"], response: "Curiosity leads to learning. What are you curious about?" },
    { keywords: ["language barrier"], response: "Language barriers can be tough. Translators and learning new words can help." },
    { keywords: ["lost", "find my way"], response: "Feeling lost can be part of growth. Is there something specific you’re looking for?" }
];


document.addEventListener("DOMContentLoaded", () => {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    sendBtn.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const userText = userInput.value.trim();
        if (!userText) return;

        addMessage(userText, 'user');
        userInput.value = '';

        // Get bot response
        const botReply = getBotResponse(userText);
        setTimeout(() => {
            addMessage(botReply, 'bot');
        }, 500); 
    }

    function getBotResponse(text) {
        const lowerText = text.toLowerCase();

        for (let respObj of responses) {
            for (let keyword of respObj.keywords) {
                if (lowerText.includes(keyword)) {
                    return respObj.response;
                }
            }
        }

        return "I'm not sure how to respond to that. Can you try rephrasing?";
    }

    function addMessage(message, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender);
        msgDiv.textContent = message;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    addMessage("Hello! I'm your simple chatbot. Ask me something!", "bot");
});
