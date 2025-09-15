import { useEffect, useState } from "react";

type Section = string; // ou remplace par un type plus précis si besoin

const useCurrentSection = (sectionIds: Section[], offset = 0) => {
    const [activeId, setActiveId] = useState<Section>("home");

    useEffect(() => {
        const handleScroll = () => {
            let current: Section | null = null;

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (!el) continue;

                const rect = el.getBoundingClientRect();
                if (rect.top - offset <= 0 && rect.bottom - offset > 0) {
                    current = id;
                    break;
                }
            }

            setActiveId(current as Section || "home");
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, offset]);

    return {activeId};
}

export default useCurrentSection;