"use client";
import React from 'react'
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
    title: string
}

const AnimatedTitle = ({
    title
}: AnimatedTitleProps) => {
    return (
        <motion.h1 className="text-9xl text-white font-extrabold uppercase"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.7 }}
        >
            {title}
        </motion.h1>
    )
}

export default AnimatedTitle