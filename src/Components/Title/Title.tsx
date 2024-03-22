import React from 'react';

import styles from './Title.module.scss';

interface TitleProps {
    content: string;
}

const Title = ({ content }: TitleProps) => {
    return (
        <>
            <h1 className={styles.Title}>
                {content}
            </h1>
        </>
    );
};

export default Title;
