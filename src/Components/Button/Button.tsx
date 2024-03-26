import React from 'react';

import styles from './Button.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
    index: number;
    href: string;
    icon: any;
    name: string;
}

const Button = ({
    index,
    href,
    icon,
    name
}: ButtonProps) => {

    return (
        <div className={styles.Button_container}>
            <Link key={index} href={href} className={styles.Button_social} target={href.includes('mailto') ? "" : "_blank"}>
                <div className={styles.Button_social_top}>
                    <FontAwesomeIcon icon={icon} className={styles.Button_social_icon} />
                    <span className={styles.Button_social_name}>{name}</span>
                </div>
                <div className={styles.Button_social_line}></div>
            </Link>

        </div>
    );
};

export default Button;
