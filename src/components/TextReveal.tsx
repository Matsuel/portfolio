import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";

interface TextRevealByWordProps {
    text: string;
    className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
    text,
    className,
}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { resolvedTheme } = useTheme();
    const [theme, setTheme] = useState<string>("");

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const words = text.split(" ");

    // trouver un moyen de ne pas utiliser le useEffect
    useEffect(() => {
        setTheme(resolvedTheme as string);
    }, [resolvedTheme]);

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
            <div
                className={
                    "sticky top-0 mx-auto flex h-auto w-[90%] items-center bg-transparent px-[1rem] py-[1rem]"
                }
            >
                <p
                    ref={targetRef}
                    className={`flex flex-wrap p-5 text-2xl font-bold ${theme === 'dark' ? "text-white/20" : ""} md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-8xl`}
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

export default TextRevealByWord;

interface WordProps {
    children: ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
            <span className={"absolute opacity-30"}>{children}</span>
            <motion.span
                style={{ opacity: opacity }}
                className={"text-text"}
            >
                {children}
            </motion.span>
        </span>
    );
};