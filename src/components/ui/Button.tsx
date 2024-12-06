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
        primary: "rounded-lg focus:outline-text bg-input border border-border focus:border-primary text-text",
        secondary: "bg-secondary text-text",
        white: "bg-white text-color-invert"
    }

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={cn(`px-4 py-2 rounded-md ${variants[variant]}`, className)}
            {...props as AnimationEventHandler<HTMLButtonElement>}
        >
            {children}
        </motion.button>
    )
}

export default Button