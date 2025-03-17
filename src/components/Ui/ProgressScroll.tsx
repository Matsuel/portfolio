"use client"
import React from 'react'
import useScrollPercentage from '@/hooks/usePercentage'
import { motion } from 'framer-motion'

const ProgressScroll = () => {

    const { scrollPercentage } = useScrollPercentage()

    return (
        <div
            className='z-20 w-72 flex h-auto fixed bottom-8 right-24 bg-transparent flex-col items-start justify-center'
        >
            <div className='w-72 h-1 bg-secondary rounded-full' />
            <motion.div
                className='absolute w-auto h-[6px] bg-white rounded-full'
                initial={{ width: 0 }}
                style={{ width: `${288 * scrollPercentage / 100}px` }}
                transition={{ duration: 0.3 }}
            />
        </div>
    )
}

export default ProgressScroll