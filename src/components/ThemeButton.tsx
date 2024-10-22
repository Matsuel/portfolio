import { useTheme } from 'next-themes'
import React from 'react'

interface ThemeButtonProps {
    icon: React.ReactNode
    themeToSet: string
}

const ThemeButton = ({
    icon,
    themeToSet
}: ThemeButtonProps) => {

    const { setTheme, theme } = useTheme()

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