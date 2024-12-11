import useMousePosition from '@/hooks/useMousePosition';
import { useMouseTrail } from '@/hooks/useMouseTrail';
import React, { Fragment } from 'react';

const Cursor = () => {
    const { x, y } = useMousePosition();
    const circles = useMouseTrail(x, y, 5); // 8 cercles dans la traînée

    if (x === null || y === null) {
        return null;
    }

    return (
        <Fragment>
            {circles.map((circle, index) => (
                <div
                    key={index}
                    className="fixed w-6 h-6 rounded-full pointer-events-none bg-backgroundinverted"
                    style={{
                        left: `${circle.x - 12}px`,
                        top: `${circle.y - 12}px`,
                        zIndex: 9999,
                        transform: `scale(${(circles.length - index) / circles.length})`,
                    }}
                />
            ))}
        </Fragment>
    );
};

export default Cursor;
