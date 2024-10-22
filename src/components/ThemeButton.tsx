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

    const { setTheme } = useTheme()

    return (
        <button
            className='w-10 h-10 rounded-full flex justify-center items-center text-text'
            onClick={() => setTheme(themeToSet)}
        >
            {icon}
        </button>
    )
}

export default ThemeButton