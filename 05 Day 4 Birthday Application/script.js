// Selecting Elements
const startButton = document.getElementById('start-button');
const giftBox = document.getElementById('gift-box');
const replayButton = document.getElementById('replay-button');
const welcomeScreen = document.getElementById('welcome-screen');
const giftScreen = document.getElementById('gift-screen');
const wishScreen = document.getElementById('wish-screen');
const countdownElement = document.getElementById('countdown');
const birthdayMusic = document.getElementById('birthday-music');
const balloonsContainer = document.getElementById('balloons');

// Quotes Array
const quotes = [
  '"Count your age by friends, not years."',
  '"Wishing you a day filled with love and cheer."',
  '"May all your wishes come true!"',
  '"Here’s to a bright, healthy, and exciting future!"'
];

// Event: Start Button
startButton.addEventListener('click', () => {
  welcomeScreen.classList.add('hidden');
  giftScreen.classList.remove('hidden');

  // Play music after user interaction
  birthdayMusic.play().catch((error) => {
    console.error("Music playback failed:", error);
  });

  startCountdown();
  generateBalloons();
});

// Countdown Timer
function startCountdown() {
  let time = 3;
  countdownElement.textContent = time;
  const interval = setInterval(() => {
    time -= 1;
    if (time > 0) {
      countdownElement.textContent = time;
    } else {
      clearInterval(interval);
      countdownElement.style.display = 'none';
      enableGiftBox();
    }
  }, 1000);
}

function enableGiftBox() {
  giftBox.addEventListener('click', openGift);
}

function openGift() {
  giftBox.removeEventListener('click', openGift);

  giftBox.querySelector('.lid').classList.add('open');

  birthdayMusic.play().catch((error) => {
    console.error("Music playback failed:", error);
  });

  launchConfetti();

  setTimeout(() => {
    giftScreen.classList.add('hidden');
    wishScreen.classList.remove('hidden');

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = randomQuote;
  }, 2000);
}

// Replay Button
replayButton.addEventListener('click', () => {
  location.reload();
});

function generateBalloons() {
  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 90}%`;
    balloon.style.animationDelay = `${Math.random() * 2}s`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    balloonsContainer.appendChild(balloon);
  }
}

// Confetti Effect
function launchConfetti() {
  const confettiCount = 100;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%)`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(confetti);

    // Remove confetti after animation
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
}
