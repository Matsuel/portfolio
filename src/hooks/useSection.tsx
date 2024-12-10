import SectionContext from '@/contexts/Section';
import { useContext, useEffect } from 'react'

const useSection = () => {
    const { setSection } = useContext(SectionContext);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSection(entry.target.id);
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
}

export default useSection