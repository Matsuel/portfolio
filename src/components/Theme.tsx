import React from 'react'
import ThemeButton from './ThemeButton'
import Desktop from '@/assets/Desktop'
import Sun from '@/assets/Sun'
import Moon from '@/assets/Moon'

const Theme = () => {
    return (
        <div className='w-auto h-auto flex flex-row gap-2 p-1'>
            <ThemeButton icon={<Desktop />} themeToSet='system' />
            <ThemeButton icon={<Sun />} themeToSet='light' />
            <ThemeButton icon={<Moon />} themeToSet='dark' />
        </div>
    )
}

export default Theme