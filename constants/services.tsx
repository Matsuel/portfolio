import { BentoItem } from "@/types";
import {
    CheckCircle,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

export const services: BentoItem[] = [
    {
        title: "Site vitrine",
        meta: "v2.4.1",
        cta: "En savoir plus →",
        description:
            "Créez une présence en ligne impactante avec un site vitrine moderne et responsive. Idéal pour mettre en avant vos produits, services ou activités avec une navigation fluide et un design attrayant. (Wordpress ou autres CMS)",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["Statistics", "Reports", "AI"],
        colSpan: 2
    },
    {
        title: "Développement Backend",
        meta: "84 completed",
        cta: "En savoir plus →",
        description: "Construisez un backend robuste et scalable avec les dernières technologies (Node.js, Python, Go). Parfait pour gérer vos données, votre sécurité, et vos flux d’informations.",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: ["Productivity", "Automation"],
    },
    {
        title: "Web App Full-Stack",
        meta: "12GB used",
        cta: "En savoir plus →",
        description: "Je développe des applications web interactives et performantes en utilisant des technologies modernes. Mon objectif est de créer des solutions robustes et évolutives qui répondent parfaitement à vos besoins spécifiques. Je prends en charge toutes les étapes du développement, de la conception à la mise en production, en mettant l’accent sur la qualité du code et la scalabilité des applications.",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        status: "Active",
        tags: ["Storage", "CDN"],
    },
    {
        title: "Maintenance et support technique",
        meta: "6 regions",
        cta: "En savoir plus →",
        description: "Je propose des services de maintenance réguliers pour vos sites et applications web afin de garantir qu'ils restent à jour, fonctionnels et sécurisés. Que ce soit pour des mises à jour de contenu, des corrections de bugs, ou des ajustements techniques, je veille à ce que votre projet continue de fonctionner de manière optimale. Vous pourrez ainsi vous concentrer sur vos objectifs sans vous soucier des aspects techniques.",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
    },
    {
        title: "Maintenance et support technique",
        meta: "6 regions",
        cta: "En savoir plus →",
        description: "Je propose des services de maintenance réguliers pour vos sites et applications web afin de garantir qu'ils restent à jour, fonctionnels et sécurisés. Que ce soit pour des mises à jour de contenu, des corrections de bugs, ou des ajustements techniques, je veille à ce que votre projet continue de fonctionner de manière optimale. Vous pourrez ainsi vous concentrer sur vos objectifs sans vous soucier des aspects techniques.",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: ["Infrastructure", "Edge"],
    }
];