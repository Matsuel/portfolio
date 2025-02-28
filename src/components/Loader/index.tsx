"use client"

import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Preloader from '@/components/Loader/Preloader'

const Loader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <AnimatePresence mode='wait'>
            {loading && <Preloader />}
        </AnimatePresence>
    )
}

export default Loader