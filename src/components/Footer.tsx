import Link from 'next/link'
import { socials, SOCIALS } from '../../constants/socials'

const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-col items-center justify-center bg-background text-text p-4'>

            <div className='flex md:flex-col md:fixed left-8 bottom-8 flex-row items-center justify-center gap-2'>
                {socials.map((social, index) => (
                    <Link
                        key={index}
                        href={social.link}
                        target='_blank'
                        className='flex items-center justify-center p-3 rounded-full transition-colors duration-300 text-neutral-500 hover:text-foreground'
                    >
                        {social.icon}
                    </Link>
                ))}

                <div className='w-[2px] h-16 bg-gradient-to-t from-purple-500 to-blue-500 md:block hidden rounded-full'></div>
            </div>

            <span>Designed & Developed by <Link href={SOCIALS.GITHUB} target='_blank' className='underline'>Matheo Lang</Link></span>
            <div className='text-sm mt-2'>
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    )
}

export default Footer