import React, { useContext } from 'react'
import { NavbarLinks } from '@/constantes/navbar'
import CustomLink from '@/components/ui/CustomLink'
import { useRouter } from 'next/router'
import { handleClick } from '@/utils/links'
import SectionContext from '@/contexts/Section'

const Sidebar = () => {

    const router = useRouter()
    const { section } = useContext(SectionContext)


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
                    onClick={() => handleClick(href, index, router)}
                    isActive={section === href.slice(1)}
                />
            ))}
        </nav>
    )
}

export default Sidebar