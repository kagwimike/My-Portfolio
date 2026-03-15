/* ================= TYPING EFFECT ================= */
const roles = [
  "Backend Engineer ⚙️",
  "Full-Stack Developer 💻",
  "Software Engineer 🚀",
  // "Real-Time Systems Builder ⚡"
];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 60);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();

/* ================= SKILLS DATA (GOOGLE DEV STYLE) ================= */

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
    { name: "PostgreSQL", level: 70 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 65 },
    // { name: "Linux", level: 70 },
    { name: "CI/CD", level: 60 },
    { name: "Figma", level: 70 }
  ]
};

function renderSkills(category, elementId) {
  const container = document.getElementById(elementId);

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

/* ================= TECH STACK ICONS ================= */

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
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const techContainer = document.getElementById("tech-stack");

techStack.forEach(tech => {
  const card = document.createElement("div");
  card.className = "tech-card glow-hover";

  card.innerHTML = `
    <img src="${tech.icon}" alt="${tech.name}">
    <span>${tech.name}</span>
  `;

  techContainer.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();

// ================= ABOUT ME FADE-IN =================
document.addEventListener("DOMContentLoaded", () => {
  const paragraphs = document.querySelectorAll("#about p");

  paragraphs.forEach((p, index) => {
    setTimeout(() => {
      p.classList.add("fade-in");
    }, index * 400); // Fade in each paragraph with 0.4s stagger
  });
});
