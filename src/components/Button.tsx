"use client";

import React, { AnimationEventHandler } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'white';
}

const Button = ({
    variant = 'primary',
    children,
    className,
    ...props
}: ButtonProps) => {

    const variants = {
        primary: "bg-[#0077ED] text-text",
        secondary: "bg-secondary text-text",
        white: "bg-white text-color-invert"
    }

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={cn(`w-auto h-auto px-5 py-[11px] rounded-full text-lg ${variants[variant]}`, className)}
            {...props as AnimationEventHandler<HTMLButtonElement>}
        >
            {children}
        </motion.button>
    )
}

export default Button