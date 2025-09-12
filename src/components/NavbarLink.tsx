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

    const activeClass = isActive ? "text-[#F92C47]" : "text-white";

    return (
        <Link
            href={sectionId}
            className={`w-[50px] h-[50px] flex flex-col items-center justify-center ${activeClass} rounded-full transition-all duration-300 border border-glassmorphism-border backdrop-blur-glassmorphism bg-[linear-gradient(145deg,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] hover:bg-[linear-gradient(145deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.1)_100%)] shadow-xl`} >
            {icon}
        </Link>
    )
}

export default NavbarLink;