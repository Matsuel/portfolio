"use client"
import useCurrentSection from "@/hooks/useCurrentSection"
import { navbarLinksObj } from "../../constants/navbar"
import NavbarContactButton from "./NavbarContactButton"
import NavbarIcons from "./NavbarIcons"

const Navbar = () => {

    const sectionIds = Object.values(navbarLinksObj).map(link => link.sectionId.replace("#", ""));

    const { activeId } = useCurrentSection(sectionIds)


    return (
        <nav className='fixed z-50 bottom-0 flex flex-col w-full h-auto items-center justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-xs py-2'>
            {/* Faire ça mais sans flex pour pouvoir faire glisser et mettre à droite le bouton */}
            {/* Assombrir le fond pcq là on voit plus rien après */}
            <div className='flex'>

                <NavbarIcons
                    activeId={activeId}
                />
                <NavbarContactButton />
            </div>
        </nav>
    )
}

export default Navbar;