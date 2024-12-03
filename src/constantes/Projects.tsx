import ATPE from "@/assets/projects/atpe.png";
import CACBO from "@/assets/projects/cacbo.png";
import Blog from "@/assets/projects/blog.png";
import NoPreview from "@/components/NoPreview";
import ONU from "@/assets/projects/onu.png";

export const projects = [
    {
        title: "CACBO-Badminton",
        description: "Site web pour le club de badminton Carbon-Blanais, basé à Carbon-Blanc. Ce site permet de présenter le club, les horaires, les tarifs, et même de s'inscrire en ligne.",
        link: "https://cacbo-badminton.vercel.app/",
        github: "https://github.com/Matsuel/CACBO-Badminton",
        technologies: ["Next.js", "TailwindCSS", "TypeScript", "Figma"],
        image: CACBO
    },
    {
        title: "ATPEscrime",
        description: "Ce site internet a été réalisé dans le but de montrer les actions de l'association à travers la pratique de l'escrime pour dénoncer les différents types de violences dans notre société.",
        link: "https://atpescrime.com",
        github: "https://github.com/Matsuel/ATPE",
        technologies: ["Next.js", "SCSS", "TypeScript"],
        image: ATPE
    },
    {
        title: "Blog stage 2024",
        description: "Site web faisant office de rapport de stage pour mon stage de 2ème année chez Ynov Bordeaux réalisé chez Shinken Solutions.",
        link: "https://blog-matheo-lang.vercel.app/",
        github: "https://github.com/Matsuel/blog",
        technologies: ["Next.js", "SCSS", "TypeScript", "Vercel"],
        image: Blog
    },
    {
        title: "HHPI Bank",
        description: "Banque fictive réalisée en 3ème année chez Ynov Bordeaux, avec une équipe de 8 personnes. L'objectif de cette banque est de nous permettre de comprendre le fonctionnement d'une banque, et de réaliser un projet complet.",
        link: "",
        github: "https://github.com/Bank-HHPI",
        technologies: ["Next.js", "React Native", "TypeScript", "Express", "MongoDB", "Figma", "TailwindCSS", "Trello"],
        noPreview: <NoPreview />
    },
    {
        title: "ONU",
        description: "Projet Next.js réalisé en 3ème année chez Ynov Bordeaux, avec une équipe de 3 personnes. Ce jeu est un clone du jeu UNO, mais en version en ligne.",
        link: "",
        github: "https://github.com/Matsuel/ONU",
        technologies: ["Next.js", "TypeScript", "Socket.io", "TailwindCSS"],
        image: ONU
    }
]