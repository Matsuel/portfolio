import { useEffect, useState } from 'react'

const useOpacity = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 700);

        return () => clearTimeout(timeout);
    }, []);

    return { isVisible }
}

export default useOpacity