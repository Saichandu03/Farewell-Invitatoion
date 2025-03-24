// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Intro Section Animation
gsap.from(".intro-content", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
});

gsap.from(".flower, .leaf", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    stagger: 0.2,
    delay: 1,
});

// Profile Section Animation
gsap.from(".profile-card", {
    scrollTrigger: {
        trigger: ".profile-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Message Section Animation
gsap.from(".message-card", {
    scrollTrigger: {
        trigger: ".message-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Final Section Animation
gsap.from(".final-card", {
    scrollTrigger: {
        trigger: ".final-section",
        start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 1,
});

// Fireworks Animation
gsap.to(".firework", {
    y: -100,
    opacity: 0,
    duration: 2,
    repeat: -1,
    stagger: 0.5,
});

// Fixed Navigation
const navDots = document.querySelectorAll(".nav-dot");
const sections = document.querySelectorAll("section");

navDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        sections[index].scrollIntoView({ behavior: "smooth" });
    });
});

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navDots.forEach((dot) => {
        dot.classList.remove("active");
        if (dot.dataset.section === current) {
            dot.classList.add("active");
        }
    });
});


