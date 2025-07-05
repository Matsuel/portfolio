import NavbarLink from "@/components/NavbarLink"
import Link from "next/link"
import { contactSection, mail, navbarLinks } from "../../constants/navbar"

const Navbar = () => {
    return (
        <nav className='fixed bottom-8 left-[7%] z-50 w-auto h-auto p-3 px-4 rounded-full bg-white shadow-xl flex flex-row gap-4'>
            {navbarLinks.map((link) => (
                <NavbarLink
                    key={link.sectionId}
                    {...link}
                />
            ))}

        </nav>
    )
}

export default Navbar;

export const ContactButton = () => {
    return (
        <Link
            href={`mailto:${mail}`}
            className='fixed bottom-8 right-[7%] z-50 w-auto h-auto p-3 rounded-full bg-white text-foreground-inverted shadow-xl flex items-center justify-center overflow-visible tooltip'
        >
            <span className="wave absolute inset-0 rounded-full border-2 border-blue-400 animate-wave pointer-events-none" />
            <span className="wave absolute inset-0 rounded-full border-2 border-blue-400 animate-wave2 pointer-events-none" />
            {contactSection.icon}
        </Link>
    )
}