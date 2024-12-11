import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div className="fixed z-[60] w-full h-screen bg-background left-0 top-0 flex flex-col justify-center items-center">
            <div className="w-1/2 h-1 bg-transparent rounded-full overflow-hidden flex">
                <motion.div
                    className="h-1 bg-text rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                />
            </div>
        </div>
    )
}

export default Loader