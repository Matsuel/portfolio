import { useEffect, useState } from 'react';

const useMousePosition = () => {
    const [
        mousePosition,
        setMousePosition
    ] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            console.log(ev.offsetY, ev.pageY)
            setMousePosition({ x: ev.pageX, y: ev.pageY });
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return mousePosition;
};
export default useMousePosition;