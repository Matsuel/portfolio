export interface IconProps {
    size?: number;
}

export type ProviderProps = {
    children: React.ReactNode;
};

export type NavbarContextType = {
    isMenuOpen: boolean;
    toggleMenu: () => void;
};

export type Experience = {
    title: string;
    role: string;
    date: string;
    link: string;
    image: string;
};