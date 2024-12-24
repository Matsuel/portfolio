import { useEffect, useRef, useState } from 'react';

const useMouseMove = () => {
    const [isMouseMove, setIsMouseMove] = useState(false);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = () => {
            setIsMouseMove(true);

            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }

            timeoutId.current = setTimeout(() => {
                setIsMouseMove(false);
            }, 5000);
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