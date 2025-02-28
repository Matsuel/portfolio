import React from 'react'
import { motion } from 'framer-motion'

interface DotProps {
    index: number
    currentIndex: number
    setCurrentIndex: (index: number) => void
    itemsLength: number
}

const Dot = ({
    index,
    currentIndex,
    setCurrentIndex,
    itemsLength,
}: DotProps) => {
    return (
        <motion.div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${currentIndex % itemsLength === index ? "bg-[#333333]" : "bg-[rgba(51,51,51,0.4)]"}`}
            animate={{ scale: currentIndex % itemsLength === index ? 1.2 : 1, }}
            onClick={() => setCurrentIndex(index)}
            transition={{ duration: 0.15 }}
        />
    )
}

export default Dot