import useMousePosition from '@/hooks/useMousePosition'
import React from 'react'

const Cursor = () => {

    const { x, y } = useMousePosition()

    if (x === null || y === null) {
        return null
    }

    return (
        <div
            className="fixed w-6 h-6 rounded-full border-2 border-cursor"
            style={{
                left: x - 10,
                top: y - 10,
            }}
        />
    )
}

export default Cursor