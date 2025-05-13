"use client"

import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Loading from '@/components/Loader/Loading'

const Loader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <AnimatePresence mode='wait'>
            {loading && <Loading onClick={() => setLoading(false)} />}
        </AnimatePresence>
    )
}

export default Loader