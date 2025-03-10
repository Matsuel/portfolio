"use client";
import React, { useContext } from 'react'
import NavbarIcon from './NavbarIcon'
import NavbarContext from '@/contexts/NavbarContext'
import { useTranslations } from 'next-intl';

const NavbarMenu = () => {

    const { toggleMenu } = useContext(NavbarContext)
    const t = useTranslations('Navbar')

    return (
        <button className='h-8 fixed z-50 flex flex-row justify-center items-center gap-1 bg-background rounded-full px-3 cursor-pointer bottom-8 left-[50%] transform translate-x-[-50%]' onClick={toggleMenu}>
            <NavbarIcon size={20} />
            <h1 className='text-white text-base uppercase font-extrabold'>
                {t('button')}
            </h1>
        </button>
    )
}

export default NavbarMenu