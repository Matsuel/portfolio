"use client"
import { IconProps } from "@/types";
import Link from "next/link";
import { FC } from "react";

interface NavbarLinkProps {
    sectionId: string;
    icon: FC<IconProps>;
    name: string;
    isActive: boolean;
}

const NavbarLink = ({
    sectionId,
    icon: Icon,
    isActive
}: NavbarLinkProps) => {

    const activeClass = isActive ? "text-[#F92C47]" : "text-[#262626]";

    return (
        <Link
            href={sectionId}
            className={`w-[50px] h-[50px] flex flex-col items-center justify-center ${activeClass} rounded-full transition-all duration-300`} 
            >
            <Icon size={24} />
        </Link>
    )
}

export default NavbarLink;