import React, { useEffect, useState } from 'react'

const useSection = () => {
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 } // Déclenche l'événement quand 30% de la section est visible
        );

        // Observer toutes les sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return { activeSection };
}

export default useSection