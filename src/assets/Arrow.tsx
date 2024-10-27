import React from 'react'
import { motion } from 'framer-motion'
import { IconProps } from '@/types'

const Arrow = ({
    size
}: IconProps) => {
    return (
        <motion.svg
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -5 }}
            transition={{ duration: 0.3 }}
            width={size}
            height={size}
            viewBox="0 0 28 28"
            fill="none"
            className="text-text"
        >
            <path fill="currentColor" d="M10.8018 6.29883L17.6396 12.9873C17.8857 13.2246 18 13.4883 18 13.7959C18 14.1035 17.877 14.3848 17.6396 14.6133L10.8018 21.293C10.5996 21.4863 10.3623 21.5918 10.0723 21.5918C9.4834 21.5918 9.02637 21.1348 9.02637 20.5547C9.02637 20.2734 9.14062 20.001 9.34277 19.7988L15.5039 13.8047L9.34277 7.79297C9.14062 7.59082 9.02637 7.32715 9.02637 7.03711C9.02637 6.45703 9.4834 6 10.0723 6C10.3535 6 10.5996 6.10547 10.8018 6.29883Z" />
        </motion.svg>
    )
}

export default Arrow