"use client"
import Link from "next/link";
import { useState } from "react";

interface NavbarLinkProps {
    sectionId: string;
    icon: React.ReactNode;
    name: string;
}

const NavbarLink = ({
    sectionId,
    icon,
    name
}: NavbarLinkProps) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <Link href={sectionId} className='flex items-center gap-2' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {icon}
            <span
                className={`text-sm font-semibold ${isHovered ? "block" : "hidden"} md:block transition-all duration-300 ease-in-out`}
            >
                {name}
            </span>
        </Link>
    )
}

export default NavbarLink;