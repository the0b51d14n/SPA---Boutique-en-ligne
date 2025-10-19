const params = new URLSearchParams(window.location.search);
const query = params.get("q")?.toLowerCase() || "";

const produits = [
    {
        nom: "Calendrier",
        desc: "Calendrier de la SPA",
        prix: "11,90 €",
        cover: "calendar preview.webp",
        real: "calendar reel.webp"
    },
    {
        nom: "Mug",
        desc: "Lot de 2 mug",
        prix: "19,00€",
        cover: "mug.webp",
        real: "mug 2.webp"
    },
    {
        nom: "Agenda",
        desc: "Agenda 2026",
        prix: "16,00 €",
        cover: "agenda 1.webp",
        real: "agenda 2.webp"
    },
    {
        nom: "Croquette",
        desc: "Croquettes sur mesures - 3kg",
        prix: "27,95 €",
        cover: "expo 2.webp",
        real: "expo 2.1.webp"
    },
    {
        nom: "collier",
        desc: "collier en jean",
        prix: "11,00 €",
        cover: "expo 1.webp",
        real: "expo 1.webp"
    },
    {
        nom: "Panier",
        desc: "PANIER POUR CHAT FEUTRINE LA SPA",
        prix: "49,90 €",
        cover: "expo 3.webp",
        real: "expo3.1.webp"
    },
    {
        nom: "Don",
        desc: "Don - 2 mois de nourriture pour un chien",
        prix: "44,00 €",
        cover: "dons 1.webp",
        real: "dons 1.webp"
    },
    {
        nom: "Don",
        desc: "Don - 3 mois de traitement pour un chat",
        prix: "69,00 €",
        cover: "dons 2.webp",
        real: "dons 2.webp"
    },
    {
        nom: "Don",
        desc: "Don - 1 mois de soins pour un chien",
        prix: "21,00 €",
        cover: "dons 3.webp",
        real: "dons 3.webp"
    },
    {
        nom: "Don",
        desc: "Don - 6 mois de soins pour un chien",
        prix: "126,00 €",
        cover: "dons 4.webp",
        real: "dons 4.webp"
    },
    {
        nom: "Gamelle",
        desc: "Gamelle en inox La SPA",
        prix: "18,00 €",
        cover: "gamelle.webp",
        real: "gamelle.webp"
    },
    {
        nom: "crème",
        desc: "coffret crème",
        prix: "21,90 €",
        cover: "coffret creme 1.webp",
        real: "coffret creme 2.webp"
    },
    {
        nom: "carte",
        desc: "8 Cartes animaux humoristiques",
        prix: "18,00 €",
        cover: "carte animaux.webp",
        real: "carte animaux.webp"
    },
    {
        nom: "savon",
        desc: "Coffret 4 savons pur olive",
        prix: "29,90 €",
        cover: "coffret savon 1.jpeg",
        real: "coffre savon 2.webp"
    },
    {
        nom: "bouillotte",
        desc: "Bouillotte en lin",
        prix: "45,90 €",
        cover: "bouillotte.webp",
        real: "bouillotte.webp"
    },
    {
        nom: "couvert",
        desc: "Kit de couverts réutilisables",
        prix: "8,90 €",
        cover: "Couverts reutilisables.png",
        real: "couverts reutilisables 2.webp"
    },
    {
        nom: "Étui",
        desc: "Étui à broder à la main",
        prix: "41,00 €",
        cover: "etui a broder.webp",
        real: "etui a broder 2.webp"
    },
    {
        nom: "moustiques",
        desc: "anti-moustiques 2 en 1",
        prix: "14,90 €",
        cover: "anti moustique.webp",
        real: "anti moustique 2.webp"
    },
    {
        nom: "origami",
        desc: "Tête de chat en origami",
        prix: "15,00 €",
        cover: "origami.webp",
        real: "origami 2.webp"
    },
    {
        nom: "Coloriage",
        desc: "Globe terrestre à colorier",
        prix: "24,00 €",
        cover: "globe 1.webp",
        real: "globe 2.webp"
    },
    {
        nom: "BD",
        desc: "BD LE DERNIER REFUGE DE GLENAT LA SPA",
        prix: "14,95 €",
        cover: "BD.webp",
        real: "BD 2.webp"
    },
    {
        nom: "Coffret",
        desc: "Coffret petit déjeuner",
        prix: "27,00 €",
        cover: "petit dej 1.webp",
        real: "petit dej 2.webp"
    },
    {
        nom: "truffes",
        desc: "Boite Jungle de truffes fantaisie natures",
        prix: "16,00 €",
        cover: "truffes 1.webp",
        real: "truffes 2.webp"
    },
    {
        nom: "infusion",
        desc: "Infusion Love Mama - L'Infuseur",
        prix: "21,90 €",
        cover: "gamelle.webp",
        real: "gamelle.webp"
    },
    {
        nom: "pâte de fruit",
        desc: "Réglette de pâtes de fruits",
        prix: "14,50 €",
        cover: "reglette.webp",
        real: "reglette 2.webp"
    },
];

const container = document.getElementById("resultats");

const filtres = produits.filter(p =>
    p.nom.toLowerCase().includes(query) ||
    p.desc.toLowerCase().includes(query)
);

function createCarteProduit(p) {
    const carte = document.createElement("div");
    carte.className = "carte-produit";


    const imgContainer = document.createElement("div");
    imgContainer.className = "image-container";

    const imgCover = document.createElement("img");
    imgCover.src = p.cover;
    imgCover.alt = "Couverture produit";
    imgCover.className = "img-cover";

    const imgReal = document.createElement("img");
    imgReal.src = p.real;
    imgReal.alt = "Vrai produit";
    imgReal.className = "img-real";

    imgContainer.appendChild(imgCover);
    imgContainer.appendChild(imgReal);

    const nom = document.createElement("h3");
    nom.textContent = p.nom;

    const desc = document.createElement("p");
    desc.textContent = p.desc;

    const prix = document.createElement("p");
    prix.className = "prix";
    prix.textContent = p.prix;

    carte.appendChild(imgContainer);
    carte.appendChild(nom);
    carte.appendChild(desc);
    carte.appendChild(prix);

    return carte;
}

if (filtres.length > 0) {
    filtres.forEach(p => {
        container.appendChild(createCarteProduit(p));
    });
} else {
    container.innerHTML = "<p>Aucun résultat trouvé.</p>";
}
