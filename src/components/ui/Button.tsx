import React, { AnimationEventHandler } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps extends  React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

const Button = ({
    variant = 'primary',
    children,
    ...props
}: ButtonProps) => {

    const variants = {
        primary: "rounded-lg focus:outline-text bg-input border border-border focus:border-primary text-text",
        secondary: "bg-secondary text-text"
    }

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-md ${variants[variant]}`}
            {...props as AnimationEventHandler<HTMLButtonElement>}
        >
            {children}
        </motion.button>
    )
}

export default Button