const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".main-nav");
const cart = document.querySelector(".cart-link");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("open");
        if (cart) cart.classList.toggle("hidden");
    });
}

const filtres = document.querySelectorAll("#filtres li");
const grid = document.querySelector(".grid-produits");
const produitsOriginaux = Array.from(document.querySelectorAll(".carte-produit"));

function appliquerFiltre(categorie) {
    filtres.forEach(f => {
        f.classList.toggle("active", f.dataset.filtre === categorie);
    });

    produitsOriginaux.forEach(p => {
        const categories = (p.dataset.categorie || "").split(',').map(c => c.trim());
        const afficher = (categorie === "Tout" || categories.includes(categorie));
        p.style.display = afficher ? "block" : "none";
    });

    const produitsVisibles = produitsOriginaux.filter(p => p.style.display === "block");
    produitsVisibles.forEach(p => grid.appendChild(p));
}

filtres.forEach(filtre => {
    filtre.addEventListener("click", () => {
        appliquerFiltre(filtre.dataset.filtre);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    appliquerFiltre("Tout");
});