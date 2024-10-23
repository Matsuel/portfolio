import { useEffect, useState } from 'react';

const useMouseMove = () => {
    const [isMouseMove, setIsMouseMove] = useState<boolean>(true);
    let timeoutId: NodeJS.Timeout;

    useEffect(() => {
        const handleMouseMove = () => {
            setIsMouseMove(true);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                setIsMouseMove(false);
            }, 15000); // 15 seconds
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    return {isMouseMove};
};

export default useMouseMove;