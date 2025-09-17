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

    const activeClass = isActive ? "text-[#F92C47] bg-[#f8e3e4]" : "text-[#b5b5b5] hover:text-black";

    return (
        <Link
            href={sectionId}
            className={`w-[30px] h-[30px] flex flex-col items-center justify-center ${activeClass} rounded-full transition-all duration-300`}
        >
            <Icon size={18} />
        </Link>
    )
}

export default NavbarLink;