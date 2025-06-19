"use client";
import { useEffect, useState } from 'react';
import { NavbarLinkSection } from '../../constants/navbar';

const useActiveSection = () => {

    const [activeSection, setActiveSection] = useState<string | NavbarLinkSection>('')

    useEffect(() => {
        const handleHashChange = () => {
            console.log('Hash changed:', window.location.hash)
            setActiveSection(window.location.hash)
        }

        handleHashChange()

        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    return { activeSection }
}

export default useActiveSection