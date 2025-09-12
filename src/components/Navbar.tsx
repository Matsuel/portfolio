"use client"
import useCurrentSection from "@/hooks/useCurrentSection"
import { navbarLinksObj } from "../../constants/navbar"
import NavbarCurrentSection from "./NavbarCurrentSection"
import NavbarIcons from "./NavbarIcons"
import NavbarContactButton from "./NavbarContactButton"

const Navbar = () => {

    const sectionIds = Object.values(navbarLinksObj).map(link => link.sectionId.replace("#", ""));

    const { activeId } = useCurrentSection(sectionIds)

    const currentSection = navbarLinksObj[activeId as keyof typeof navbarLinksObj];

    return (
        <nav className='fixed z-50 bottom-8 left-1/6 flex flex-col w-auto h-auto'>
            <NavbarCurrentSection
                currentSection={currentSection.name}
            />
            {/* Faire ça mais sans flex pour pouvoir faire glisser et mettre à droite le bouton */}
            {/* Assombrir le fond pcq là on voit plus rien après */}
            <div className='flex'>

                <NavbarIcons
                    currentSection={currentSection}
                    activeId={activeId}
                />
                <NavbarContactButton />
            </div>
        </nav>
    )
}

export default Navbar;