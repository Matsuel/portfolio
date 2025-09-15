"use client"
import Link from "next/link";

interface NavbarLinkProps {
    sectionId: string;
    icon: React.ReactNode;
    name: string;
    isActive: boolean;
}

const NavbarLink = ({
    sectionId,
    icon,
    isActive
}: NavbarLinkProps) => {

    const activeClass = isActive ? "text-[#F92C47]" : "text-[#262626]";

    return (
        <Link
            href={sectionId}
            className={`w-[50px] h-[50px] flex flex-col items-center justify-center ${activeClass} rounded-full transition-all duration-300`} 
            >
            {icon}
        </Link>
    )
}

export default NavbarLink;