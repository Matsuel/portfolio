"use client";
import { useSection } from '@/contexts/SectionProvider'
import Chevron from './icons/Chevron'
import { useRouter } from 'next/navigation';

const ReturnButton = () => {

    const router = useRouter()

    const { isSectionActive } = useSection()

    const handleClick = () => {
        router.push('/')
    }

    return (
        <button
            className={`fixed top-8 left-[7%] bg-white rounded-full p-3 shadow-xl cursor-pointer ${!isSectionActive && 'hidden'}`}
            onClick={handleClick}>
            <Chevron />
        </button>
    )
}

export default ReturnButton