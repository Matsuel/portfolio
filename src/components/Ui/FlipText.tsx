import React from 'react'
import { motion } from 'framer-motion'

interface FlipTextProps {
    children: React.ReactNode
}

const FlipText = ({
    children
}: FlipTextProps) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className="relative block overflow-hidden whitespace-nowrap text-9xl font-black uppercase"
            style={{ lineHeight: 0.85 }}
        >
            {/* Partie qui part vers le haut */}
            <div>
                {children?.toString().split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-100%",
                            },
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                            delay: 0.025 * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>

            {/* Partie qui arrive du bas */}
            <div className="absolute inset-0">
                {children?.toString().split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: 0.25,
                            ease: "easeInOut",
                            delay: 0.025 * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>

        </motion.div>
    )
}

export default FlipText