import { useEffect, useState } from 'react';

export const useScrollPercentage = () => {
    const [scrollPercentage, setScrollPercentage] = useState('000.00');

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = ((scrollTop / docHeight) * 100).toFixed(2).padStart(6, '0');
            setScrollPercentage(scrolled);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {scrollPercentage};
}

export default useScrollPercentage;
