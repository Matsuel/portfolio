import { Projet } from "@/types";

export const projets: Projet[] = [
    {
        name: "ATPEscrime",
        description: "Ce site internet a été réalisé dans le but de montrer les actions de l'association à travers la pratique de l'escrime pour dénoncer les différents types de violences dans notre société.",
        image: "/atpescrime.png",
        color: "#d0d0d0",
        links: {
            web: "https://atpescrime.com",
            github: "https://github.com/Matsuel/ATPE",
        }
    },
    {
        name: "CACBO Badminton",
        description: "Site web pour le club de badminton Carbon-Blanais, basé à Carbon-Blanc. Ce site permet de présenter le club, les horaires, les tarifs, et même de s'inscrire en ligne.",
        image: "/cacbo.png",
        color: "#f0f0f0",
        links: {
            web: "https://cacbobad.fr/",
            github: "https://github.com/Matsuel/CACBO-Badminton",
        }
    },
    {
        name: "F1 APP",
        description: "Application mobile dédiée à la Formule 1, permettant de suivre les courses, les classements et les actualités de la saison.",
        image: "/f1app.png",
        color: "#c0c0c0",
        links: {
            github: "https://github.com/Wiibleyde/f1-app"
        }
    },
    {
        name: "ONU",
        description: "Jeu vidéo web clone du jeu de société 'UNO', permettant de jouer en ligne avec des amis, via websocket.",
        image: "/onu.png",
        color: "#b0b0b0",
        links: {
            web: "https://onu.matsuel.fr",
            github: "https://github.com/Matsuel/ONU",
        }
    },
    {
        name: "Portfolio",
        description: "Mon portfolio personnel, où je présente mes projets, mon parcours et mes compétences.",
        image: "/portfolio.png",
        color: "#e0e0e0",
        links: {
            github: "https://github.com/Matsuel/portfolio",
        }
    },
]