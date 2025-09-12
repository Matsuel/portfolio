"use client"
import useCurrentSection from "@/hooks/useCurrentSection"
import Link from "next/link"
import { contact, mail, navbarLinksObj } from "../../constants/navbar"
import NavbarLink from "./NavbarLink"
import { useState } from "react"
import NavbarIcon from "./NavbarIcon"

const Navbar = () => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const sectionIds = Object.values(navbarLinksObj).map(link => link.sectionId.replace("#", ""));

    const { activeId } = useCurrentSection(sectionIds)

    const currentSection = navbarLinksObj[activeId as keyof typeof navbarLinksObj];

    return (
        <nav
            className='fixed top-8 left-1/6 z-50 w-auto h-auto px-1 rounded-full shadow-2xl flex flex-row gap-2 border border-glassmorphism-border'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered && <NavbarIcon
                icon={currentSection?.icon}
                link={currentSection?.sectionId}
            />}
            {isHovered && Object.values(navbarLinksObj).map((link) => (
                <NavbarLink
                    key={link.sectionId}
                    sectionId={link.sectionId}
                    name={link.name}
                    icon={link.icon}
                    isActive={activeId === link.sectionId.replace("#", "")}
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
            className='relative z-50 w-auto h-auto p-3 rounded-full bg-white text-foreground-inverted shadow-xl flex items-center justify-center overflow-visible tooltip'
        >
            <span className="wave absolute inset-0 rounded-full border-2 border-blue-400 animate-wave pointer-events-none" />
            <span className="wave absolute inset-0 rounded-full border-2 border-blue-400 animate-wave2 pointer-events-none" />
            {contact.icon}
        </Link>
    )
}