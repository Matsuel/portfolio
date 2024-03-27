import React, { useState, useEffect } from 'react';

import styles from './ScrollToTop.module.scss';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface ScrollToTopProps {

}

const ScrollToTop = ({ }: ScrollToTopProps) => {
    
    const [isFadingOut, setIsFadingOut] = useState<boolean>(true);

    useEffect(() => {
        const checkScroll = () => {
            if (window.scrollY > 250) {
                setIsFadingOut(false);
            } else {
                setIsFadingOut(true);
            }
        };
        window.addEventListener('scroll', checkScroll);

        return () => {
            window.removeEventListener('scroll', checkScroll);
        };
    }, []);

    return (
        <Link href="/" className={styles.ScrollToTop_link + (isFadingOut ? ' ' + styles.ScrollToTop_fadeOut : '')}>
            <FontAwesomeIcon icon={faArrowUp} className={styles.ScrollToTop_icon} />
        </Link>
    );
};

export default ScrollToTop;
