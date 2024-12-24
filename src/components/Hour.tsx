import useHour from '@/hooks/useHour'
import React from 'react'
import { motion } from 'framer-motion'

const Hour = () => {

    const { hour } = useHour()

    // ${isMouseMove ? 'w-auto h-auto bottom-8 left-8' : 'w-full min-h-screen bg-black bg-opacity-90 left-0 top-0'}
    // ${isMouseMove ? "text-2xl font-bold " : "text-[250px] font-black"}

    return (
        <motion.div
            className={`fixed z-50 w-auto h-auto bottom-8 left-8 flex flex-row items-center justify-center `}
        >
            <span className={`text-white text-2xl font-bold`}>{hour}</span>
        </motion.div>
    )
}

export default Hour