import Link from 'next/link'
import { socials, SOCIALS } from '../../constants/socials'
import { mail } from '../../constants/navbar'

const Footer = () => {
    return (
        <footer className='w-full h-auto flex flex-col items-center justify-center text-text p-4 md:gap-2 gap-6'>

            <div className='flex flex-col items-center gap-2'>
                <h2 className='text-4xl font-bold'>Contactez moi</h2>
                <p className='text-center text-lg mt-2'>Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour en discuter !</p>
                <Link href={`mailto:${mail}`}>
                    {mail}
                </Link>

            </div>

            <div className='flex md:flex-col md:fixed flex-row items-center justify-center gap-2 md:left-8 md:bottom-[50%] md:translate-y-[50%] '>
                {socials.map((social, index) => (
                    <Link
                        key={index}
                        href={social.link}
                        target='_blank'
                        className='flex items-center justify-center p-3 rounded-glassmorphism transition-all duration-300 text-neutral-500 hover:text-foreground border border-glassmorphism-border backdrop-blur-glassmorphism bg-[linear-gradient(145deg,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] hover:bg-[linear-gradient(145deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.1)_100%)] shadow-xl'
                    >
                        {social.icon}
                    </Link>
                ))}

            </div>

            <span>Pensé & développé par <Link href={SOCIALS.GITHUB} target='_blank' className='underline'>Matheo Lang</Link></span>
            <span className='text-sm'>
                © &nbsp;
                <Link href={`https://fr.wikipedia.org/wiki/${new Date().getFullYear()}`} target='_blank' className='underline'>
                    {new Date().getFullYear()}
                </Link>
                &nbsp;Tous droits réservés.
            </span>

            <Link href="/mentions-legales" className='underline text-sm'>
                Mentions légales
            </Link>
        </footer>
    )
}

export default Footer