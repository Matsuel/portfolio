import React from 'react'
import { motion } from "framer-motion"
import { cn } from '@/utils/cn'

interface AnimatedTextProps extends React.ComponentProps<typeof motion.div> {
    className?: string
    delay?: number
}

const AnimatedText = ({
    children,
    className,
    delay = 0,
    ...props
}: AnimatedTextProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay, duration: 0.8, type: "spring" }}
            className={cn("w-1/2 text-black/80", className)}
            {...props}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedText