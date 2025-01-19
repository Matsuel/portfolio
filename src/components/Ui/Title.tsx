import React from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'
import { cn } from '@/utils/cn'

interface TitleProps extends Omit<HTMLMotionProps<"h1">, "ref"> {
    children?: React.ReactNode
}

const Title = ({
    className,
    children,
    ...props
}: TitleProps) => {

    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };

    return (
        <motion.h1 className={cn('text-[180px] leading-none font-extrabold text-text uppercase', className)} {...props}
            variants={defaultVariants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1, delay: 0 }}
        >
            {children}
        </motion.h1>
    )
}

export default Title