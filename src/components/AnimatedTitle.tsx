"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface AnimatedTitleProps extends React.ComponentProps<typeof motion.h1> {
    children?: React.ReactNode;
}

const AnimatedTitle = ({
    children,
    className,
    ...props
}: AnimatedTitleProps) => {
    return (
        <motion.h1 className={cn("xl:text-9xl sm:text-8xl text-6xl text-foreground font-extrabold uppercase", className)}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.7 }}
            {...props}
        >
            {children}
        </motion.h1>
    )
}

export default AnimatedTitle