import { useEffect, useState } from "react";

type SectionInfo = {
    id: string;
    offsetTop: number;
    height: number;
};

const useSectionProgress = (
    currentSection: string | null
) => {
    const [progress, setProgress] = useState(0);
    const [sections, setSections] = useState<SectionInfo[]>([]);

    // Calcul des positions et hauteurs dynamiquement
    useEffect(() => {
        const updateSections = () => {
            const els = Array.from(document.querySelectorAll<HTMLElement>("section"));
            const info = els.map((el) => ({
                id: el.id,
                offsetTop: el.offsetTop,
                height: el.offsetHeight,
            }));
            setSections(info);
        };

        updateSections();
        window.addEventListener("resize", updateSections);
        return () => window.removeEventListener("resize", updateSections);
    }, []);

    // Calcul du pourcentage
    useEffect(() => {
        const handleScroll = () => {
            if (!currentSection) return;
            const section = sections.find((s) => s.id === currentSection);
            if (!section) return;

            const scrollY = window.scrollY;
            const scrolledInSection = scrollY - section.offsetTop;

            const percentage = Math.round(
                Math.min(100, Math.max(0, (scrolledInSection / section.height) * 100))
            );

            setProgress(percentage);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentSection, sections]);

    return { progress };
}

export default useSectionProgress;