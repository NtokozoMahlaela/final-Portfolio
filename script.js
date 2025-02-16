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
