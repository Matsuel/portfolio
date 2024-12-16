import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';

interface ParagraphProps {
    paragraph: string;
}

const Paragraph = ({
    paragraph
}: ParagraphProps) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.7", "start 0.01"]
    })

    const words = paragraph.split(" ")
    return (
        <p
            ref={container}
            className="flex text-[80px] leading-none text-text font-bold w-full flex-wrap mt-[10%]"
        >
            {
                words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                })
            }
        </p>
    )
}

interface WordProps {
    children: string;
    progress: any;
    range: number[];
}

const Word = ({
    children,
    progress,
    range
}: WordProps) => {
    const amount = range[1] - range[0]
    const step = amount / children.length
    return (
        <span className="relative mr-4 mt-0">
            {
                children.split("").map((char, i) => {
                    const start = range[0] + (i * step);
                    const end = range[0] + ((i + 1) * step)
                    return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
                })
            }
        </span>
    )
}

interface CharProps {
    children: string;
    progress: any;
    range: number[];
}

const Char = ({
    children,
    progress,
    range
}: CharProps) => {
    const opacity = useTransform(progress, range, [0, 1])
    return (
        <span>
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity: opacity }}>{children}</motion.span>
        </span>
    )
}

export default Paragraph;