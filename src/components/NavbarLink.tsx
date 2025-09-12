"use client"
import Link from "next/link";
import { useState } from "react";

interface NavbarLinkProps {
    sectionId: string;
    icon: React.ReactNode;
    name: string;
    isActive: boolean;
}

const NavbarLink = ({
    sectionId,
    icon,
    name,
    isActive
}: NavbarLinkProps) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const activeClass = isActive ? "text-[#F92C47] bg-[#3D3E3E]" : "text-foreground-inverted";

    return (
        <Link href={sectionId} className={`flex flex-col items-center ${activeClass}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {icon}
            <span
                className={`text-xs font-semibold ${isHovered ? "block" : "hidden"} lg:block transition-all duration-300 ease-in-out`}
            >
                {name}
            </span>
        </Link>
    )
}

export default NavbarLink;