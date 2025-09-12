import Link from 'next/link'
import { mail } from '../../constants/navbar'
import Write from './icons/Write'

const NavbarContactButton = () => {
    return (
        <Link
            href={`mailto:${mail}`}
            className='relative w-[50px] h-[50px] p-3 rounded-full bg-white text-foreground-inverted shadow-xl flex items-center justify-center overflow-visible tooltip'
        >
            <span className="wave absolute inset-0 rounded-full border-2 border-blue-400 animate-wave pointer-events-none" />
            <span className="wave absolute inset-0 rounded-full border-2 border-blue-400 animate-wave2 pointer-events-none" />
            <Write />
        </Link>
    )
}

export default NavbarContactButton