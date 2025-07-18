import React from 'react'
import { IconProps } from '@/types'

const CV = ({
    color = "currentColor",
    size = 24,
}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M15 18a3 3 0 1 0-6 0" />
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
            <circle cx="12" cy="13" r="2" />
        </svg>
    )
}

export default CV