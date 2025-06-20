import { BentoItem } from "@/types";
import {
    TrendingUp,
    Globe,
    Unplug,
    Hammer,
    HeartPulse
} from "lucide-react";

export const services: BentoItem[] = [
    {
        title: "Site vitrine",
        description:
            "Créez une présence en ligne impactante avec un site vitrine moderne et responsive. Idéal pour mettre en avant vos produits, services ou activités avec une navigation fluide et un design attrayant. (Wordpress ou autres CMS)",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Actif",
        tags: ["Wordpress", "CMS", "Design Web"],
        colSpan: 2
    },
    {
        title: "Développement Backend",
        description: "Construisez un backend robuste et scalable avec les dernières technologies (Node.js, Python, Go). Parfait pour gérer vos données, votre sécurité, et vos flux d’informations.",
        icon: <Hammer className="w-4 h-4 text-emerald-500" />,
        status: "Mis à jour",
        tags: ["Node.js", "Python", "Go", "API"],
    },
    {
        title: "Web App Full-Stack",
        description: "Je développe des applications web interactives et performantes en utilisant des technologies modernes. Mon objectif est de créer des solutions robustes et évolutives qui répondent parfaitement à vos besoins spécifiques. Je prends en charge toutes les étapes du développement, de la conception à la mise en production, en mettant l’accent sur la qualité du code et la scalabilité des applications.",
        icon: <Globe className="w-4 h-4 text-purple-500" />,
        status: "Actif",
        tags: ["React", "Node.js", "Full-Stack", "Web App"],
    },
    {
        title: "Maintenance et support technique",
        description: "Je propose des services de maintenance réguliers pour vos sites et applications web afin de garantir qu'ils restent à jour, fonctionnels et sécurisés. Que ce soit pour des mises à jour de contenu, des corrections de bugs, ou des ajustements techniques, je veille à ce que votre projet continue de fonctionner de manière optimale. Vous pourrez ainsi vous concentrer sur vos objectifs sans vous soucier des aspects techniques.",
        icon: <HeartPulse className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Maintenance", "Support", "Infrastructure"],
    },
    {
        title: "Intégration de services tiers",
        description: "J'intègre des API externes et des services tiers dans vos applications pour étendre leurs fonctionnalités. Que vous ayez besoin d'une solution de paiement, d'un système de géolocalisation, ou d'une autre fonctionnalité externe, je m'assure que l'intégration soit fluide, rapide et sécurisée.",
        icon: <Unplug className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Intégration", "API", "Services Tiers"],
    }
];