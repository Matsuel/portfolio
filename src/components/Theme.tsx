import React from 'react'
import ThemeButton from '@/components/ThemeButton'
import Desktop from '@/assets/Desktop'
import Sun from '@/assets/Sun'
import Moon from '@/assets/Moon'

const Theme = () => {
    return (
        <div className='fixed w-auto h-auto flex flex-row gap-2 p-1 top-8 left-8 z-50 self-start'>
            <ThemeButton icon={<Desktop size={24} />} themeToSet='system' />
            <ThemeButton icon={<Sun size={24} />} themeToSet='light' />
            <ThemeButton icon={<Moon size={24} />} themeToSet='dark' />
        </div>
    )
}

export default Theme