const stats = document.querySelectorAll('.stat-number');

function animateStats(stat) {
    const target = parseInt(stat.getAttribute('data-target'));
    const count = +stat.innerText;
    const speed = target / 100;

    if (count < target) {
        stat.innerText = Math.ceil(count + speed);
        setTimeout(() => animateStats(stat), 20);
    } else {
        stat.innerText = target;
    }
}

const statsSection = document.querySelector('.statistics');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => animateStats(stat));
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statsSection);
}

// View Projects button functionality
document.addEventListener("DOMContentLoaded", () => {
    const projectsBtn = document.getElementById("projectsBtn");
    const projectsSection = document.getElementById("projects");

    projectsBtn.addEventListener("click", () => {
        projectsSection.scrollIntoView({ behavior: "smooth" });
    });
});



document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        showFeedback("Please fill in all fields.", "error");
    } else if (!validateEmail(email)) {
        showFeedback("Please enter a valid email address.", "error");
    } else {
        showFeedback("Your message has been sent successfully!", "success");
        clearForm();
    }
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

function showFeedback(message, type) {
    const feedbackDiv = document.getElementById('formFeedback');
    feedbackDiv.textContent = message;
    feedbackDiv.style.color = (type === "success") ? "green" : "red";
}

function clearForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('message').value = "";
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        alert(`Thank you ${email} for subscribing with us!`);
        newsletterForm.reset();
    });
}

const hero = document.querySelector('.hero');
if (hero) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        hero.appendChild(particle);
    }
}

const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('skills')) {
                entry.target.querySelectorAll('.skill-category').forEach((skill, index) => {
                    skill.style.animationDelay = `${index * 0.1}s`;
                });
            }
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => sectionObserver.observe(section));

// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});
