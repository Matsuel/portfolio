import React from 'react'
import ThemeButton from './ThemeButton'
import { Desktop, Moon, Sun } from '@/constantes/ThemeIcon'
import { useTheme } from 'next-themes'

const Theme = () => {

    const {theme} = useTheme()
    console.log(theme)

    return (
        <div className='w-auto h-auto flex flex-row gap-2 p-1'>
            <ThemeButton icon={Desktop} themeToSet='system' />
            <ThemeButton icon={Sun} themeToSet='light' />
            <ThemeButton icon={Moon} themeToSet='dark' />
        </div>
    )
}

export default Theme