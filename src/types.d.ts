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