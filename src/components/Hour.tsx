"use client"
import useHour from '@/hooks/useHour'
import React from 'react'
import { motion } from 'framer-motion'

const Hour = () => {

    const { hour } = useHour()

    return (
        <motion.div className="fixed z-50 w-auto h-auto bottom-8 left-8 flex flex-row items-center justify-center">
            <span className="text-text text-2xl font-bold" >
                {hour}
            </span>
        </motion.div>
    )
}

export default Hour