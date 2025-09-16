"use client"
import useCurrentSection from "@/hooks/useCurrentSection"
import useSectionProgress from "@/hooks/useSectionProgress"
import { navbarLinksObj } from "../../constants/navbar"
import NavbarContactButton from "./NavbarContactButton"
import NavbarIcons from "./NavbarIcons"
import NavbarProgress from "./NavbarProgress"

const Navbar = () => {

    const sectionIds = Object.values(navbarLinksObj).map(link => link.sectionId.replace("#", ""));

    const { activeId } = useCurrentSection(sectionIds)

    const { progress } = useSectionProgress(activeId);

    return (
        <nav className='fixed z-50 bottom-0 flex flex-col w-full h-auto items-center justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-xs py-2'>
            {/* Ajouter un current section avec une barre indiquant le pourcentage de scroll de la section */}
            <div className='flex gap-5 rounded-full shadow-2xl'
            style={{
                background: 'rgba(247, 247, 247, 1)',
            }}>

                <NavbarIcons
                    activeId={activeId}
                />
                <NavbarProgress
                    activeId={activeId}
                    progress={progress}
                />
                <NavbarContactButton />
            </div>
        </nav>
    )
}

export default Navbar;