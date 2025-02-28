"use client";
import React from 'react'
import { motion } from 'framer-motion';

const MouseIcon = () => {
    return (
        <motion.img
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
                delay: 2,
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
            }}
            src="/Icons/magicMouse.svg"
            alt="scroll down"
            width={50}
            height={50}
        />
    )
}

export default MouseIcon