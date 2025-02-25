import {
    FiCircle,
    FiCode,
    FiFileText
} from "react-icons/fi";


export const projects = [
    {
        title: "CACBO-Badminton",
        description: "Site web pour le club de badminton Carbon-Blanais, basé à Carbon-Blanc. Ce site permet de présenter le club, les horaires, les tarifs, et même de s'inscrire en ligne.",
        link: "https://cacbobad.fr/",
        github: "https://github.com/Matsuel/CACBO-Badminton",
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "Figma"],
        icon: <FiCircle size={16} />,
        preview: "/cacbo.png"
    },
    {
        title: "ATPEscrime",
        description: "Ce site internet a été réalisé dans le but de montrer les actions de l'association à travers la pratique de l'escrime pour dénoncer les différents types de violences dans notre société.",
        link: "https://atpescrime.com",
        github: "https://github.com/Matsuel/ATPE",
        technologies: ["Next.js", "SCSS", "TypeScript"],
        icon: <FiCode size={16} />,
        preview: "/atpe.png"
    },
    {
        title: "ONU",
        description: "Projet Next.js réalisé en 3ème année chez Ynov Bordeaux, avec une équipe de 3 personnes. Ce jeu est un clone du jeu UNO, mais en version en ligne.",
        link: null,
        github: "https://github.com/Matsuel/ONU",
        technologies: ["Next.js", "TypeScript", "Socket.io", "TailwindCSS"],
        icon: <FiFileText size={16} />,
    }
]
