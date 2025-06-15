const reasons = [
    "You make me smile without even trying.",
    "Your laugh is my favorite sound in the world.",
    "You understand me better than anyone else.",
    "You’re my favorite person to talk to at any time of day.",
    "Your kindness inspires me every day.",
    "I love how passionate you are about the things you care about.",
    "You make even the most ordinary moments feel special.",
    "You accept me for who I am, flaws and all.",
    "Your hugs feel like home.",
    "I love the way you look at me.",
    "You challenge me to be a better person.",
    "You’re my biggest supporter.",
    "I love how we can be weird together.",
    "You’re my best friend and my love.",
    "I fall in love with you more every day.",
    "Your smile is so so so contagious and sweet",
    "You are so so so cutuuuuu",
    "Your eyes are so deep I get lost in them whenever I look into them",
    "You are the bestestestestest"
];

const reasonBox = document.getElementById('reason');
const generateBtn = document.getElementById('generate-btn');
const heartsContainer = document.getElementById('hearts-container');
const body = document.body;

generateBtn.addEventListener('click', () => {
    // Generate random reason
    const randomIndex = Math.floor(Math.random() * reasons.length);
    reasonBox.textContent = reasons[randomIndex];
    
    // Box animation
    reasonBox.style.transform = 'scale(1.05)';
    setTimeout(() => {
        reasonBox.style.transform = 'scale(1)';
    }, 300);

    // Create flying hearts
    createHearts();
    
    // Background pulse effect
    body.classList.add('pulse');
    setTimeout(() => {
        body.classList.remove('pulse');
    }, 1000);
});

function createHearts() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}