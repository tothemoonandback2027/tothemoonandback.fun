// Star Animation Generation
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random duration
        const duration = Math.random() * 3 + 1;
        
        // Random delay
        const delay = Math.random() * 3;

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }
}

// Countdown Timer
function startCountdown() {
    // Set launch date to 10 days from now for demo purposes
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14); // 2 weeks launch window

    function updateTimer() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(timerInterval);
            document.querySelector('.countdown-container').innerHTML = '<div class="status-badge">LAUNCHED!</div>';
        }
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    startCountdown();
});
