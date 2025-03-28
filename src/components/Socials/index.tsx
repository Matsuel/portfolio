import { socials } from '@/constantes/socials'
import React from 'react'
import Social from '@/components/Socials/Social'

const Socials = () => {
    return (
        <div className='h-8 fixed z-20 bottom-8 left-24 flex flex-row justify-center items-center gap-2 bg-background rounded-full px-2'>
            {socials.map((social, index) => (
                <Social
                    key={index}
                    icon={social.icon}
                    link={social.link}
                />
            ))}
        </div>
    )
}

export default Socials