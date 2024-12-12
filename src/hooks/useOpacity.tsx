import MouseContext from '@/contexts/Mouse';
import { useContext, useEffect, useState } from 'react'

const useOpacity = () => {
    const { isMouseLeave, isMouseMove } = useContext(MouseContext);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isMouseLeave || !isMouseMove) {

            const timeout = setTimeout(() => {
                setIsVisible(true);
            }, 700);

            return () => clearTimeout(timeout);
        } else {

            setIsVisible(false);
        }
    }, [isMouseLeave, isMouseMove]);

    return { isVisible }
}

export default useOpacity