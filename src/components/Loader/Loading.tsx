"use client"
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { opacity, slideUp, words } from '../../../constants/preloader'
import SteperButton from './Steper'

interface LoadingProps {
    onClick?: () => void
}


const Loading = ({
    onClick
}: LoadingProps) => {

    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000 : 150)
    }, [index])


    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="w-full h-screen fixed top-0 left-0 z-99 flex justify-center items-center bg-background text-foreground-inverted">
            {dimension.width > 0 &&
                <>
                    <motion.p
                        className="flex text-text md:text-[200px] text-4xl font-bold items-center absolute z-1"
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                    >
                        {words[index]}
                    </motion.p>
                    <SteperButton
                        onClick={onClick}
                    />
                    <svg
                        className="absolute top-0 w-full"
                        style={{ height: "calc(100% + 300px)" }}
                    >
                        <motion.path
                            className="fill-current text-background"
                            variants={curve}
                            initial="initial"
                            exit="exit"
                        ></motion.path>
                    </svg>
                </>
            }
        </motion.div >
    )

}

export default Loading