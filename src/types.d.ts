export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status: string;
    tags: string[];
    colSpan?: number;
}