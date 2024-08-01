const canvas = document.querySelector('.hero-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = generateParticles();
}

function generateParticles() {
  return Array.from({ length: 100 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 1,
    directionX: Math.random() * 0.5 - 0.25,
    directionY: Math.random() * 0.5 - 0.25,
    color: `rgba(255, 255, 255, ${Math.random()})`
  }));
}

function moveParticles() {
  particles.forEach(p => {
    p.x += p.directionX;
    p.y += p.directionY;

    if (p.x < 0 || p.x > canvas.width) p.directionX = -p.directionX;
    if (p.y < 0 || p.y > canvas.height) p.directionY = -p.directionY;
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
}

function animateParticles() {
  moveParticles();
  drawParticles();
  requestAnimationFrame(animateParticles);
}

canvas.addEventListener('mousemove', e => {
  particles.forEach(p => {
    const dx = p.x - e.clientX;
    const dy = p.y - e.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 100) {
      p.directionX = (p.x - e.clientX) / distance;
      p.directionY = (p.y - e.clientY) / distance;
    }
  });
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateParticles();

const cards = document.querySelectorAll('.card');

function revealOnScroll() {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); 

const hireMeButton = document.querySelector('.hire-me-button');

hireMeButton.addEventListener('mouseover', () => {
  hireMeButton.classList.add('hovered');
});

hireMeButton.addEventListener('mouseout', () => {
  hireMeButton.classList.remove('hovered');
});

hireMeButton.addEventListener('click', () => {
 });


document.addEventListener('DOMContentLoaded', function() {
  const aboutSkillsSection = document.querySelector('.about-skills');
  const heroHeight = document.querySelector('.hero').offsetHeight;

  window.addEventListener('scroll', function() {
    if (window.scrollY > heroHeight - window.innerHeight) {
      aboutSkillsSection.classList.add('visible');
    } else {
      aboutSkillsSection.classList.remove('visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.getElementById('whatsapp-chat');
    
    whatsappButton.addEventListener('click', function() {

      console.log('WhatsApp chat button clicked');
    });
  });
  