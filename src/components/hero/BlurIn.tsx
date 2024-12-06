import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn';


interface BlurIntProps {
    word: string;
    className?: string;
    variant?: {
        hidden: { filter: string; opacity: number };
        visible: { filter: string; opacity: number };
    };
    duration?: number;
}

const BlurIn = ({
    word,
    className,
    variant,
    duration = 1
}: BlurIntProps) => {

    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;

    const splitWord = word.split(' ')

    return (
        <div className='w-[80%] h-[420px] flex flex-col justify-between items-center'>
            <motion.h1
                initial="hidden"
                animate="visible"
                transition={{ duration }}
                variants={combinedVariants}
                className={cn(`text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-[256px] md:leading-[5rem] text-text self-start mt-12 ml-12`, className)}
            >
                {splitWord[0]}
            </motion.h1>
            <motion.h1
                initial="hidden"
                animate="visible"
                transition={{ duration }}
                variants={combinedVariants}
                className={cn(`text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-[256px] md:leading-[5rem] text-text self-end mr-12 mb-12`, className)}
            >
                {splitWord[1]}
            </motion.h1>
        </div>
    )
}

export default BlurIn