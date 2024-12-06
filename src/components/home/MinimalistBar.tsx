import { NavbarLinks } from '@/constantes/navbar'
import React from 'react'
import useSection from '@/hooks/useSection'
import { useRouter } from 'next/router'
import MinimalistLink from '../ui/MinimalistLink'

const MinimalistBar = () => {
    const { activeSection } = useSection()
    const router = useRouter()

    return (
        <nav
            className='w-auto h-auto flex flex-col items-end fixed top-1/2 right-3 transform -translate-y-1/2 z-50 self-and p-3 gap-12 bg-transparent text-text'
        >
            {Object.entries(NavbarLinks).map(([text, href], index) => (
                <MinimalistLink
                    key={text}
                    text={text}
                    href={href}
                    index={index}
                    activeSection={activeSection}
                    router={router}
                />
            ))}
        </nav>
    )
}

export default MinimalistBar