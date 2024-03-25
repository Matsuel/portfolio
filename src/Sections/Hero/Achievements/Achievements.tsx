import React from 'react';

import styles from './Achievements.module.scss';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
    () => {
        return import("react-animated-numbers");
    },
    { ssr: false }
);

interface AchievementsProps {

}

const AchievementsData = [
    {
        title: 'Commits',
        value: "4000",
        postfix: "+",
    },
    {
        title: 'Projects',
        value: "20",
        postfix: "+",
    },
    {
        title: 'Coding Years',
        value: "5",
        postfix: "+"
    },
    {
        title: 'Github Streak',
        value: "49",
        postfix: "Days",
    },
];

const Achievements = ({ }: AchievementsProps) => {


    return (
        <div className={styles.Achievements_container}>
            {AchievementsData.map((achievement, index) => {
                return (
                    <div key={index} className={styles.Achievement}>
                        <h3 className={styles.Achievement_value}>
                            {typeof window !== 'undefined' && window.innerWidth > 768 ? (
                            <AnimatedNumbers
                                animateToNumber={parseInt(achievement.value)}
                                locale='en'
                                transitions={(index) => ({
                                    type: "spring",
                                    duration: index + 0.3,
                                  })}
                            />
                            ) : (
                                parseInt(achievement.value)
                            )}
                            {achievement.postfix}
                        </h3>
                        <h3 className={styles.Achievement_title}>{achievement.title}</h3>
                    </div>
                )
            })}


        </div>
    );
};

export default Achievements;
