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
            }, 30000);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleMouseMove);
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, []);

    return { isMouseMove };
};

export default useMouseMove;
