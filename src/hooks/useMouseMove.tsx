import { useEffect, useState, useRef } from 'react';

const useMouseMove = () => {
    const [isMouseMove, setIsMouseMove] = useState<boolean>(true);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = () => {
            setIsMouseMove(true);

            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }

            timeoutId.current = setTimeout(() => {
                setIsMouseMove(false);
            }, 15000); // 15 secondes d'inactivité
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, []);

    return { isMouseMove: true };
};

export default useMouseMove;
