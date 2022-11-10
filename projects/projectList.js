let projectList = [
    {
        name: "ByLocalis",
        date: "Nov. 2022",
        roles: "Design, Dev",
        techs: "Php, Sql, Html, Css, Js",
        description: [
            "ByLocalis est un projet personnel, c'est un réseau social. Il permet de publier des posts en incluant une localisation. Les autres utilisateurs pourront voir le post s'ils se situent dans la localisation indiquée par le post. Ils peuvent également le voir en spécifiant la localisation exacte.",
            "Il est obligatoire de localiser un post puisqu'il n'y a pas de principe d'abonnement entre utilisateur. La localisation peut être un pays, une région ou une ville. Pratique pour visualiser l'actualité proche de soit.",
            "ByLocalis est en cours de développement, le lien vers le site web et le répertoire Github seront disponibles dès le développement achevé.",
        ],
        linkimage: ["projects/images/bylocalis/1.png", "projects/images/bylocalis/2.png", "projects/images/bylocalis/3.png", "projects/images/bylocalis/4.png", "projects/images/bylocalis/5.png", "projects/images/bylocalis/6.png", "projects/images/bylocalis/7.png", "projects/images/bylocalis/8.png"],
        linkproject: [],
    },
    {
        name: "TheLegoWar",
        date: "Oct. 2022",
        roles: "Dev",
        techs: "Phaser 3, Js",
        description: [
            "Ce petit jeu vidéo jouable sur navigateur a été réalisé avec Phaser 3, un framework JavaScript. Le but du jeu est de récolter les pièces en légo tout en évitant des missiles, des avions et les boules de feu de Wario. Il est possible de tuer Wario en lui tirant dessus. Mais... Wario est très fort est réapparait souvent ! Il est possible de voler, ainsi que de se déplacer.",
            "Ce petit projet a été développé dans le cadre de mon BUT informatique.",
        ],
        linkimage: ["projects/images/phaserLego/gameScreen.jpg"],
        linkproject: [
            ["Test the game", "https://lorrisc.github.io/theLegoWar/"],
            ["Github", "https://github.com/lorrisc/theLegoWar"],
        ],
    },
    {
        name: "Test de mémoire visuelle",
        date: "Sept. 2022",
        roles: "Dev",
        techs: "Html, Css, Js",
        description: [
            "Ce simple projet personnel (inspiré de humanbenchmark.com) m'a permis de développer un premier petit jeu vidéo. Le but est de retrouver les tuiles qui ont été affichées, plus on avance dans les manches, plus le nombre de tuiles augmente.",
        ],
        linkimage: ["projects/images/visualMemory/2.PNG", "projects/images/visualMemory/1.PNG"],
        linkproject: [
            ["Test the game", "https://lorrisc.github.io/Test-de-memoire-visuelle/"],
            ["Github", "https://github.com/lorrisc/Test-de-memoire-visuelle"],
        ],
    },
    {
        name: "MondialMeteo",
        date: "Juin 2022",
        roles: "Dev",
        techs: "Html, Css, Js",
        description: [
            "MondialMeteo est un projet personnel. Avec des options de géolocalisation, ou de saisie de ville, le site affiche la météo du lieu recherché. La météo peut être instantannée, au format 12 heures ou 7 jours. Il est aussi possible de connaître la pollution de l'air et les informations  solaire et lunaire.",
            "Possibilité de sauvegarder les villes recherchées pour les retrouver à la prochaine connexion (géré avec le local storage). Un historique a également été mis en place de la même façon.",
            "Les différentes informations sont classiquement récupérées via des APIs.",
        ],
        linkimage: ["projects/images/meteo/1home.png", "projects/images/meteo/2hourResult.png", "projects/images/meteo/3hourOpen.png", "projects/images/meteo/4homeSunMoon.png", "projects/images/meteo/5days.png"],
        linkproject: [
            ["Visit website", "https://lorrisc.github.io/mondialMeteo/"],
            ["Github", "https://github.com/noix2kgouu/mondialMeteo"],
        ],
    },
    {
        name: "TrainTravel",
        date: "Avril 2022",
        roles: "Design, Dev",
        techs: "Html, Css, Js, Figma",
        description: [
            "Ce site web permet de visualiser et commander des billets de train. Il s'inscrit dans le cadre de ma première année de BUT informatique à Valence. Un serveur nous était fourni pour pouvoir récupérer les différentes informations. Nous pouvions aussi intéragir avec celui-ci pour se connecter à un profil client, ou procéder au paiement de un ou plusieurs billets de train.",
        ],
        linkimage: ["projects/images/traintravel/1market.jpg", "projects/images/traintravel/2search.jpg", "projects/images/traintravel/3result.jpg", "projects/images/traintravel/4inteMaps.jpg", "projects/images/traintravel/5bestsales.jpg"],
        linkproject: [
            ["Visit website (limited functionality)", "https://lorrisc.github.io/TrainTravel/"],
            ["Github", "https://github.com/noix2kgouu/TrainTravel"],
        ],
    },
    {
        name: "Transport de sarcophage",
        date: "Mai 2021",
        roles: "Dev",
        techs: "C++, Arduino",
        description: [
            "Suite à la découverte de sarcophages en bois dans le Cantal, de nombreux acteurs interviennent et prennent part dans ce projet pour oeuvrer en faveur de la bonne conservation de ces pièces. En groupe, en fin de terminale (STI2D SIN), nous avons développé un système permettant la gestion de la sécurité des sarcophages lorsqu'ils seront immergés (pour préserver leur état de conservation) au fond d'un lac.",
            "Nous avons utilisé du matériel Arduino, des capteurs (capteur de température, capteur pH-mètre, capteur de luminosité) pour concevoir un système permettant de surveiller les sarcophages.",
            "Ce projet a été réalisé en groupe de quatre. Deux élèves de STI2D SIN (dont moi) pour la partie informatique, et deux élèves de STI2D ITEC pour concevoir la boîte qui accueillera notre système (plongé à 10 mètre sous l'eau, 365 jours par an). Ce premier projet important nous a également permis de découvrir la gestion de projet.",
        ],
        linkimage: ["projects/images/sarcophage/sarcophage.jpg", "projects/images/sarcophage/realisation.jpg"],
        linkproject: [],
    },
];
