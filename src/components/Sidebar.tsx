import React from 'react'
import { NavbarLinks } from '@/constantes/navbar'
import CustomLink from './CustomLink'
import { useRouter } from 'next/router'

const Sidebar = () => {

    const router = useRouter()

    return (
        <nav
            className='w-auto h-auto flex flex-col fixed top-1/2 left-3 transform -translate-y-1/2 z-50 self-start p-3 gap-12 bg-transparent text-text'
        >
            <div className='-z-10 absolute top-0 left-8 w-[2px] h-full bg-text' />
            {Object.entries(NavbarLinks).map(([text, href], index) => (
                <CustomLink
                    key={text}
                    text={text}
                    index={index}
                    onClick={() => router.push(href)}
                />
            ))}
        </nav>
    )
}

export default Sidebar