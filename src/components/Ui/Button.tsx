"use client";

import React, { AnimationEventHandler } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'transparent' | 'primary' | 'secondary';
    whileTap?: number;
}

const Button = ({
    whileTap = 0.95,
    variant = 'primary',
    children,
    className,
    ...props
}: ButtonProps) => {

    const variants = {
        primary: "bg-color text-background",
        secondary: "bg-background text-color",
        transparent: "bg-transparent text-color hover:text-text border-transparent"
    }

    return (
        <motion.button
            whileTap={{ scale: whileTap }}
            className={cn(`w-auto h-auto px-5 py-2 rounded-xl text-lg font-semibold cursor-pointer ${variants[variant]}`, className)}
            {...props as AnimationEventHandler<HTMLButtonElement>}
        >
            {children}
        </motion.button>
    )
}

export default Button