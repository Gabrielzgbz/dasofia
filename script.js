const startDate = new Date("2025-02-27T00:00:00");
const timerElement = document.getElementById("timer");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);

  const remainingMonths = months % 12;
  const remainingDays = Math.floor(days % 30.44);
  const remainingHours = hours % 24;
  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  timerElement.innerHTML = `
    <strong>${years}</strong> anos,
    <strong>${remainingMonths}</strong> meses,
    <strong>${remainingDays}</strong> dias,
    <strong>${remainingHours}</strong> horas,
    <strong>${remainingMinutes}</strong> minutos e
    <strong>${remainingSeconds}</strong> segundos 💞
  `;
}

updateTimer();
setInterval(updateTimer, 1000);

// Gerador de corações caindo
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Desbloquear autoplay ao clicar na tela
document.addEventListener("click", () => {
    const audio = document.getElementById("musica");
    if (audio && audio.paused) {
      audio.play();
    }
  });
  
  let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);
