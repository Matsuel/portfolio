import { Projet } from '@/types';
import { motion, MotionValue, useTransform } from 'framer-motion';
import Apple from '../icons/Apple';
import Android from '../icons/Android';
import Blank from '../icons/Blank';

interface CardProps extends Projet {
    index: number;
    range: [number, number];
    targetScale: number;
    scrollYProgress: MotionValue<number>;
}

const Card = ({
    name,
    description,
    image,
    links,
    color,
    index,
    range,
    targetScale,
    scrollYProgress
}: CardProps) => {

    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    return (
        <div className='w-full h-screen flex items-center justify-center sticky top-0'>
            <motion.div className='relative w-[90%] h-[80%] rounded-xl backdrop-blur-md'
                style={{ backgroundColor: color, top: `calc(-10% + ${index * 25}px)`, scale: scale }}
            >


                <div className='w-full h-auto flex flex-row items-center justify-end gap-4'>
                    <Apple color={"#ee0000"} />
                    <Android color={"#ee0000"} />
                    <Blank color={"#ee0000"} />

                </div>

            </motion.div>
        </div>
    )
}

export default Card