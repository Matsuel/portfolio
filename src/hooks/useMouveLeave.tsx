import MouseContext from "@/contexts/Mouse";
import { useEffect, useRef, useContext } from "react";

const useMouseLeave = () => {
    const { setIsMouseLeave } = useContext(MouseContext);
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

    return { containerRef };
};

export default useMouseLeave;
