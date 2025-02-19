document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.querySelector(".typing");
    const roles = ["Software Developer", "Web Designer", ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;// Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
    
    // Download CV Function
    function downloadCV() {
        const link = document.createElement('a');
        link.href = './'; 
        link.download = 'C:\Users\Ntokozo\Downloads\Portfolio-main\final-Portfolio\CV\Ntokozo Mahlaela CV.pdf';
        link.click();
    }
    
    // Chat Functionality
    function sendMessage() {
        const messageInput = document.getElementById('chat-message');
        const message = messageInput.value.trim();
        const chatBody = document.getElementById('chat-body');
    
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.textContent = `You: ${message}`;
            chatBody.appendChild(userMessage);
    
            // Simulated bot response
            setTimeout(() => {
                const botMessage = document.createElement('div');
                botMessage.textContent = `Ntokozo: Thanks for reaching out! I'll get back to you soon.`;
                chatBody.appendChild(botMessage);
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
    
            messageInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }
    

    function typeEffect() {
        let currentRole = roles[roleIndex];
        typingElement.textContent = isDeleting ? currentRole.substring(0, charIndex--) : currentRole.substring(0, charIndex++);
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    
    typeEffect();
});

// Chatbot
document.getElementById("chat-icon").addEventListener("click", function() {
    document.getElementById("chat-container").style.display = "block";
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("chat-container").style.display = "none";
});

document.getElementById("send-btn").addEventListener("click", function() {
    let input = document.getElementById("chat-input").value;
    if (input.trim() === "") return;
    let chatBox = document.getElementById("chat-box");
    let userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.textContent = input;
    chatBox.appendChild(userMessage);
    document.getElementById("chat-input").value = "";
    setTimeout(() => {
        let botMessage = document.createElement("div");
        botMessage.className = "chat-message bot-message";
        botMessage.textContent = generateBotResponse(input);
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
});

function generateBotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("Tell us/me more about this perSon,about")) return "Ntokozo Mahlaela is a Software Developer and Web Developer based in Johannesburg, South Africa.";
    if (input.includes("cv")) return "You can download my CV from the homepage.";
    if (input.includes("education")) return "Rosebank College - Diploma in Information Technology.";
    if (input.includes("experience")) return "I have worked as a Software Developer at a CAPACITI 2025.";
    if (input.includes("skills")) return "He is skilled in JavaScript, Java, HTML, CSS, Python, and MySQL.";
    if (input.includes("interests")) return "I am interested in web development, software development, and artificial intelligence.";
    if (input.includes("hobbies")) return "I enjoy playing chess, coding, and and going to the gym.";
    if (input.includes("certificates")) return "I have completed the Introduction to AI Certificate and Building AI Powered Chatbots Without Programming.I have also completed the Generative AI: Introduction and Applications and Generative AI: Prompt Engineering Basics .You can view my certificates in the Certificates section.";
    if (input.includes("projects")) return "Check out my projects in the Projects section!";
    if (input.includes("contact")) return "You can contact me via email at ntokozomokoena07@gmail.com.On linkedin at https://www.linkedin.com/in/ntokozo-mahlaela-3b4317250/. You can view my contact details in the Contact section.";
    return "I am here to answer questions about my portfolio. Ask me anything!";
}