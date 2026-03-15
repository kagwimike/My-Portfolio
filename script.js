/* ================= TYPING EFFECT ================= */

const roles = [
  "Backend Engineer ⚙️",
  "Full-Stack Developer 💻",
  "Software Engineer 🚀",
  "System Architect ⚡"
];

const typingElement = document.getElementById("typing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentRole.length + 1) {
    speed = 1500; // pause after typing
    isDeleting = true;
  } 
  else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


/* ================= SKILLS DATA ================= */

const skills = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "UI/UX Design", level: 75 }
  ],

  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Django", level: 80 },
    { name: "REST APIs", level: 90 },
    { name: "JWT Authentication", level: 85 },
    { name: "WebSockets", level: 75 }
  ],

  databases: [
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 }
  ],

  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 65 },
    { name: "CI/CD", level: 60 },
    { name: "Figma", level: 70 }
  ]
};


function renderSkills(category, elementId) {

  const container = document.getElementById(elementId);
  if (!container) return;

  skills[category].forEach(skill => {

    const skillDiv = document.createElement("div");
    skillDiv.classList.add("skill-bar");

    skillDiv.innerHTML = `
      <span>${skill.name}</span>
      <div class="progress">
        <div class="progress-fill" style="width:${skill.level}%"></div>
      </div>
    `;

    container.appendChild(skillDiv);

  });
}

renderSkills("frontend", "frontend-skills");
renderSkills("backend", "backend-skills");
renderSkills("databases", "database-skills");
renderSkills("tools", "tools-skills");


/* ================= TECH STACK ================= */

const techStack = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];

const techContainer = document.getElementById("tech-stack");

if (techContainer) {

  techStack.forEach(tech => {

    const card = document.createElement("div");
    card.className = "tech-card glow-hover";

    card.innerHTML = `
      <img src="${tech.icon}" alt="${tech.name}">
      <span>${tech.name}</span>
    `;

    techContainer.appendChild(card);

  });

}


/* ================= AUTO YEAR ================= */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* ================= ABOUT FADE IN ================= */

document.addEventListener("DOMContentLoaded", () => {

  const paragraphs = document.querySelectorAll("#about p");

  paragraphs.forEach((p, index) => {

    setTimeout(() => {
      p.classList.add("fade-in");
    }, index * 400);

  });

});