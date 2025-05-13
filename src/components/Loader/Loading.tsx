"use client"
import React, { useEffect, useMemo, useState } from 'react'
import BlurIn from './BlurIn'
import SteperButton from './Steper'
import { motion } from 'framer-motion'


const Loading = () => {

    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }, [])

    const slideUp = {
        initial: {
            top: 0
        },
        exit: {
            top: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
        }
    }

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

    const word = 'Bonjour'

    const delays = useMemo(
        () =>
            word.split('').map(() =>
                Math.random() * 1.5
            ),
        [word]
    )

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="w-full h-full fixed top-0 left-0 z-99 flex justify-center items-center">

            {dimension.width > 0 && (
                <>
                    <div className='z-10'>
                        {word.split('').map((word, index) => (
                            <BlurIn
                                key={index}
                                word={word}
                                delay={delays[index]}
                            />
                        ))}
                    </div>
                        <SteperButton />

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
            )}
        </motion.div>
    )
}

export default Loading