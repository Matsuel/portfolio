"use client"
import useCurrentSection from "@/hooks/useCurrentSection"
import useSectionProgress from "@/hooks/useSectionProgress"
import { navbarLinksObj } from "../../constants/navbar"
import NavbarIcons from "./NavbarIcons"
import NavbarProgress from "./NavbarProgress"

const Navbar = () => {

    const sectionIds = Object.values(navbarLinksObj).map(link => link.sectionId.replace("#", ""));

    const { activeId } = useCurrentSection(sectionIds)

    const { progress } = useSectionProgress(activeId);

    return (
        <nav className='fixed z-50 bottom-0 w-full h-auto flex flex-col items-center justify-center bg-[rgba(255,255,255,0.1)] backdrop-blur-xs py-2'>
            <div className='w-auto h-[50px] flex items-center gap-5 px-3 rounded-full shadow-2xl bg-[#f7f7f7]'>
                <NavbarIcons
                    activeId={activeId}
                />
                <NavbarProgress
                    activeId={activeId}
                    progress={progress}
                />
            </div>
        </nav>
    )
}

export default Navbar;