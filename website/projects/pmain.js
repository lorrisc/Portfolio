//*------- NAVBAR BOTTOM
let aboutButton = document.querySelector("#aboutProjects");
aboutButton.addEventListener("click", () => {
    window.location.href = "../about/aboutP.html";
});

//*------- LIST PROJECTS
let project = [
    {
        title: "TrainTravel",
        description:
            "Le projet TrainTravel a été réalisé dans le cadre de mon BUT informatique en première année. Ce site web permet la recherche et la réservation de billets de train.\n\nUne api était mis à disposition pour récupérer les différentes informations (trains, horaires, gares, utilisateurs,...). Celle-ci nous permettait également de réservé des billets de train.",
        date: "Avril 2022",
        role: "Designer, développeur",
        techs: "Html, Css, JavaScript, Figma",
        image: {
            image1: "./images/traintravel/home.png",
            image2: "./images/traintravel/bestSales.png",
            image3: "./images/traintravel/rechercheBillets.png",
            image4: "./images/traintravel/popupPanier.png",
        },
    },
    {
        title: "Mondial Meteo",
        description:
            "Ce site web est une interface météo, il permet à l'utilisateur d'accéder aux informations essentiels météorologique. Il a également accès à des informations relatives au soleil, à la lune et à la pollution. Le site permet de visualiser la météo en temps réel, heure par heure (12 heures). Mais également par jour (7 jours). L'utilisateur peut ajouter des villes en favoris et il a accès à son historique. Le design est similaire au site m6meteo. L'utilisateur peut accéder à ces informations par géolocalisation, par recherche de ville ou si il le souhaite en saisissant les coordonnées géographiques exactes.",
        date: "Juin 2022",
        role: "Développeur",
        techs: "Html, Css, JavaScript",
        image: {
            image1: "./images/meteo/resultatPrincipal.png",
            image2: "./images/meteo/heureDeroulantFav.png",
            image3: "./images/meteo/resultat7jours.png",
            image4: "./images/meteo/accueil.png",
        },
    },
];

let carrousel = document.querySelector("#carrousel");
let articles = document.querySelectorAll("#carrousel article");

let screenWidth = screen.width;

let scaleInformation = [];


//*------- MARGIN PREMIER ELEMENT
let firstArtInfo = articles[0].getBoundingClientRect();
let firstWidthDemiArticle = firstArtInfo.width / 2;
articles[0].style.marginLeft = screenWidth - firstArtInfo.width - firstWidthDemiArticle + "px";
//*------- MARGIN DERNIER ELEMENT
let lastArtInfo = articles[articles.length-1].getBoundingClientRect();
let  lastWidthDemiArticle = firstArtInfo.width / 2;
articles[articles.length-1].style.marginRight = screenWidth -  lastArtInfo.width -  lastWidthDemiArticle + "px";

articles.forEach((element, index) => {
    let pushValue = scaleInformation.push(1);
});
var scrollPos = 0;
carrousel.addEventListener("scroll", () => {
    console.log(carrousel.getBoundingClientRect());
    if (carrousel.getBoundingClientRect().left > scrollPos) {
        // document.getElementById("info-box").setAttribute("data-scroll-direction", "UP");
        console.log("up");
    } else {
        // document.getElementById("info-box").setAttribute("data-scroll-direction", "DOWN");
        console.log("down");
    }
    // saves the new position for iteration.
    scrollPos = carrousel.getBoundingClientRect().left;

    articles.forEach((element, index) => {
        let rectElement = element.getBoundingClientRect();
        if (rectElement.left < (screenWidth - rectElement.width) / 3) {
            // console.log(test);
            if (scaleInformation[index] > 0.5) {
                let tableValue = scaleInformation[index] - 0.003;
                scaleInformation.splice(index, 1, tableValue);
                element.style.transform = "scale(" + scaleInformation[index] + ")";
            }
        }
    });
});

//https://codepen.io/lehollandaisvolant/pen/ryrrGx
