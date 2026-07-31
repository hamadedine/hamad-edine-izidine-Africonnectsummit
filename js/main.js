// dark mode
const themeBtn = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}
// menu humberger
let hamburgerBtn = document.getElementById("hamburger");
let navLinks = document.getElementById("navLinks");
if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}
    // bouton retour en haut
const btnTop = document.getElementById("backToTop");

if (btnTop) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });
    btnTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}