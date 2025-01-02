import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import Preloader from './Preloader'

const Loader = () => {
    const [loading, setLoading] = React.useState(true)

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