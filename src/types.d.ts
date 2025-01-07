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