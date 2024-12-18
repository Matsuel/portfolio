"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

interface ThemeButtonProps {
    icon: React.ReactNode
    themeToSet: string
}

const ThemeButton = ({
    icon,
    themeToSet
}: ThemeButtonProps) => {

    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <button
            className={`w-9 h-9 rounded-full flex justify-center items-center ${theme === themeToSet ? 'bg-backgroundinverted text-colorinverted' : 'bg-background text-text'}`}
            onClick={() => setTheme(themeToSet)}
        >
            {icon}
        </button>
    )
}

export default ThemeButton