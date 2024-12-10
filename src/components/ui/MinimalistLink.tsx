import SectionContext from '@/contexts/Section'
import { handleClick } from '@/utils/links'
import { NextRouter } from 'next/router'
import React, { useContext } from 'react'

interface MinimalistLinkProps {
    text: string
    href: string
    index: number
    router: NextRouter
}

const MinimalistLink = ({
    text,
    href,
    index,
    router
}: MinimalistLinkProps) => {

    const { section } = useContext(SectionContext)

    return (
        <button
            key={text}
            onClick={() => handleClick(href, index, router)}
            className={`h-5 bg-transparent cursor-pointer border-b-2 transition-all duration-300 ease-in-out hover:border-text hover:w-8 ${section === href.slice(1) ? 'border-text w-8' : 'border-secondary w-5'}`}
        />
    )
}

export default MinimalistLink