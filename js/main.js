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

    // filtre des intervenants
}
let filterButtons = document.querySelectorAll(".filter-btn");
let speakerCards = document.querySelectorAll(".speaker-card");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        let categorieChoisie = this.getAttribute("data-filter");

        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        this.classList.add("active");

        for (let k = 0; k < speakerCards.length; k++) {
            let carte = speakerCards[k];
            let categorieCarte = carte.getAttribute("data-category");

            if (categorieChoisie === "tous" || categorieCarte === categorieChoisie) {
                carte.style.display = "block";
            } else {
                carte.style.display = "none";
            }
        }
    });
}

// validation du formulaire
let formulaire = document.getElementById("registrationForm");
if (formulaire) {
    
formulaire.addEventListener("submit", function(e){

    e.preventDefault();

    let valide = true;

    let nom = document.getElementById("fullName");
    let erreurNom = document.getElementById("fullNameError");

    if(nom.value.trim() == ""){
        erreurNom.textContent = "Veuillez entrer votre nom complet.";
        valide = false;
    }
    else{
        erreurNom.textContent = "";
    }
    let email = document.getElementById("email");
    let erreurEmail = document.getElementById("emailError");

    if(email.value.trim() == ""){
        erreurEmail.textContent = "Veuillez entrer votre email.";
        valide = false;
    }
    else{
        erreurEmail.textContent = "";
    }

    let telephone = document.getElementById("phone");
    let erreurTelephone = document.getElementById("phoneError");

    if(telephone.value.trim() == ""){
        erreurTelephone.textContent = "Veuillez entrer votre téléphone.";
        valide = false;
    }
    else{
        erreurTelephone.textContent = "";

}
        let participationType = document.getElementById("participationType");
        let erreurParticipation = document.getElementById("participationTypeError");
        if (participationType.value === "") {
            erreurParticipation.textContent = "Choisis un type de participation.";
            valide = false;
        } else {
            erreurParticipation.textContent = "";
        }

        let country = document.getElementById("country");
        let erreurCountry = document.getElementById("countryError");
        if (country.value === "") {
            erreurCountry.textContent = "Choisis ton pays.";
            valide = false;
        } else {
            erreurCountry.textContent = "";
        }
        let message = document.getElementById("message");
        let erreurMessage = document.getElementById("messageError");
        if (message.value.trim() === "") {
            erreurMessage.textContent = "Veuillez écrire un message.";
            valide = false;
        } else {
            erreurMessage.textContent = "";
        }
        if (valide === true) {
            let successMsg = document.getElementById("successMessage");
            successMsg.style.display = "block";
            successMsg.textContent = "Formulaire soumis avec succès !";
            formulaire.reset();
        }
    });
}
// stats
let statNumbers = document.querySelectorAll(".stat-number");
let statsactive = false;

function lancerStats() {
    for (let i = 0; i < statNumbers.length; i++) {
        animerNombre(statNumbers[i]);
    }
}

function animerNombre(element) {
    let cible = parseInt(element.getAttribute("data-target"));
    let valeur = 0;
    let vitesse = Math.ceil(cible / 100);

    let interval = setInterval(function () {
        valeur = valeur + vitesse;
        if (valeur >= cible) {
            valeur = cible;
            clearInterval(interval);
        }
        element.textContent = valeur;
    }, 30);
}

let statsSection = document.getElementById("stats");

if (statsSection) {
    let observerStats = new IntersectionObserver(function (entrees) {
        for (let i = 0; i < entrees.length; i++) {
            if (entrees[i].isIntersecting && statsactive === false) {
                lancerStats();
                statsactive = true;
            }
        }
    });

    observerStats.observe(statsSection);
}
// programmes jour 1,2,3
let tabButtons = document.querySelectorAll(".tab-btn");
let tabContents = document.querySelectorAll(".tab-content");

for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
        let jourChoisi = this.getAttribute("data-day");

        // on enleve active partout
        for (let j = 0; j < tabButtons.length; j++) {
            tabButtons[j].classList.remove("active");
        }
        for (let k = 0; k < tabContents.length; k++) {
            tabContents[k].classList.remove("active");
        }
        this.classList.add("active");
        document.getElementById(jourChoisi).classList.add("active");
    });
}
// compte a rebours 
let dateConference = new Date("2026-11-12T09:00:00");

let elemJours = document.getElementById("days");
let elemHeures = document.getElementById("hours");
let elemMinutes = document.getElementById("minutes");
let elemSecondes = document.getElementById("seconds");

if (elemJours) {
    setInterval(function () {
        let maintenant = new Date();
        let difference = dateConference - maintenant;

        let jours = Math.floor(difference / (1000 * 60 * 60 * 24));
        let heures = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let secondes = Math.floor((difference / 1000) % 60);

        elemJours.textContent = jours;
        elemHeures.textContent = heures;
        elemMinutes.textContent = minutes;
        elemSecondes.textContent = secondes;
    }, 1000);
}


