"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BlurIntProps {
    word: string;
    className?: string;
    variant?: {
        hidden: { filter: string; opacity: number };
        visible: { filter: string; opacity: number };
    };
    duration?: number;
    delay?: number;
}
const BlurIn = ({
    word,
    className,
    variant,
    duration = 1,
    delay = 0,
}: BlurIntProps) => {

    const defaultVariants = {
        hidden: { filter: "blur(5px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;

    return (
        <motion.span
            initial="hidden"
            animate="visible"
            transition={{ duration, delay }}
            variants={combinedVariants}
            className={cn(
                "font-display text-center md:text-9xl text-4xl font-bold tracking-[-0.02em] drop-shadow-sm",
                className,
            )}
        >
            {word}
        </motion.span>
    );
};

export default BlurIn;