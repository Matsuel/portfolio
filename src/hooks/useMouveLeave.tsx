import { useState } from "react";


const useMouseLeave = () => {
    const [isMouseLeave, setIsMouseLeave] = useState(false);

    const handleMouseLeave = () => {
        setIsMouseLeave(true);
    };

    const handleMouseEnter = () => {
        setIsMouseLeave(false);
    };

    return { isMouseLeave, handleMouseLeave, handleMouseEnter };
}

export default useMouseLeave;