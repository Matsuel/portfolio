import { useState, useEffect, useRef } from "react";

const useMouseLeave = () => {
    const [isMouseLeave, setIsMouseLeave] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseOut = (event: MouseEvent) => {
            if (!containerRef.current) return;

            // Vérifie si la souris a quitté la fenêtre ou le conteneur
            if (!containerRef.current.contains(event.relatedTarget as Node)) {
                const isInputFocused = document.activeElement instanceof HTMLInputElement;
                if (!isInputFocused) {
                    setIsMouseLeave(true);
                }
            }
        };

        const handleMouseOver = (event: MouseEvent) => {
            if (!containerRef.current) return;

            // Vérifie si la souris revient dans le conteneur
            if (containerRef.current.contains(event.target as Node)) {
                setIsMouseLeave(false);
            }
        };

        // Écoute les événements
        const node = containerRef.current;
        if (node) {
            node.addEventListener("mouseout", handleMouseOut);
            node.addEventListener("mouseover", handleMouseOver);
        }

        // Nettoyage
        return () => {
            if (node) {
                node.removeEventListener("mouseout", handleMouseOut);
                node.removeEventListener("mouseover", handleMouseOver);
            }
        };
    }, []);

    return { isMouseLeave, containerRef };
};

export default useMouseLeave;
