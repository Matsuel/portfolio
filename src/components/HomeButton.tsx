import Logo from '@/assets/Logo'
import Link from 'next/link'
import React from 'react'

const HomeButton = () => {
    return (
        <Link className='absolute top-8 left-24 z-10 cursor-pointer text-color' href='/'>

            <Logo className='w-10 h-10' />
        </Link>
    )
}

export default HomeButton