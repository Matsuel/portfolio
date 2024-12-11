import { useEffect, useState } from 'react';

export const useMouseTrail = (x: number | null, y: number | null, count: number) => {
    const [circles, setCircles] = useState(
        Array.from({ length: count }, () => ({ x: 0, y: 0 }))
    );

    useEffect(() => {
        if (x === null || y === null) return;

        let animationFrameId: number;

        const updateCircles = () => {
            setCircles((prevCircles) => {
                const newCircles = [...prevCircles];
                let nextX = x;
                let nextY = y;

                newCircles.forEach((circle, index) => {
                    const dx = nextX - circle.x;
                    const dy = nextY - circle.y;

                    // Approche avec interpolation pour converger doucement
                    circle.x += dx * 0.15; // Facteur de "lissage"
                    circle.y += dy * 0.15;

                    nextX = circle.x;
                    nextY = circle.y;
                });

                return newCircles;
            });

            animationFrameId = requestAnimationFrame(updateCircles);
        };

        updateCircles();

        return () => cancelAnimationFrame(animationFrameId);
    }, [x, y]);

    return circles;
};
