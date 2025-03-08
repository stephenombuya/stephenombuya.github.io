// Function to toggle the theme
function toggleTheme(e) {
    e.preventDefault(); 
    e.stopPropagation(); 

    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
}

function toggleMenu(e) {
    e.preventDefault(); 
    e.stopPropagation();

    const nav = document.getElementById('nav-menu');
    const overlay = document.querySelector('.nav-overlay');
    nav.classList.toggle('active');

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    themeSwitch.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    const links = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    document.querySelector("main").classList.add("page-transition");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");

            if (targetUrl && !targetUrl.startsWith("http")) {
                e.preventDefault();
                document.querySelector("main").style.transform = "translateX(100%)";
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500);
            }
        });
    });

    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    setTimeout(() => {
        document.querySelector("main").classList.remove("page-transition");
    }, 500);
    
});
