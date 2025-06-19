"use client";
import React, { useContext, useEffect, useState } from 'react';
import useActiveSection from '../hook/useActiveSection';

interface SectionProviderType {
    isSectionActive: boolean;
}

export const SectionContext = React.createContext<SectionProviderType>({
    isSectionActive: false,
});

interface SectionProviderProps {
    children: React.ReactNode;
}

export const SectionProvider = ({
    children
}: SectionProviderProps) => {
    const [isSectionActive, setIsSectionActive] = useState(false);

    const { activeSection } = useActiveSection();

    useEffect(() => {
        setIsSectionActive(!!activeSection);
    }, [activeSection]);

    return (
        <SectionContext.Provider value={{ isSectionActive }}>
            {children}
        </SectionContext.Provider>
    );
}

export const useSection = () => useContext(SectionContext);