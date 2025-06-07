export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status: string;
    tags: string[];
    colSpan?: number;
}

export interface TimelineEntry {
    title: string;
    description: string[];
    date: string;
    company: string;
}

export interface IconProps {
    size?: number;
    color?: string;
}

export interface Projet {
    name: string;
    description: string;
    image: string;
    color: string;
    links: {
        web?: string;
        android?: string;
        ios?: string;
        github?: string;
    }
}