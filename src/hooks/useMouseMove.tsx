import MouseContext from '@/contexts/Mouse';
import { useEffect, useRef, useContext } from 'react';

const useMouseMove = () => {
    const { setIsMouseMove } = useContext(MouseContext);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = () => {
            setIsMouseMove(true);

            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }

            timeoutId.current = setTimeout(() => {
                setIsMouseMove(false);
            }, 20000);
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

};

export default useMouseMove;
