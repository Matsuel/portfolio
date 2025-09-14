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
            className={`w-[50px] h-[50px] flex flex-col items-center justify-center ${activeClass} rounded-full transition-all duration-300 border border-glassmorphism-border shadow-xl`} 
            >
            {icon}
        </Link>
    )
}

export default NavbarLink;

/* bg */

// position: absolute;
// width: 152px;
// height: 151px;
// left: calc(50% - 152px/2);
// top: calc(50% - 151px/2 + 0.5px);

// background: rgba(136, 136, 136, 0.15);
// backdrop-filter: blur(2.5px);
// /* Note: backdrop-filter has minimal browser support */

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
// z-index: 0;
