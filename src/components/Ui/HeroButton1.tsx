"use client";
import React from 'react'
import Button from '@/components/Ui/Button'
import { scrollToSection } from '@/utils/scroll'

interface HeroButton1Props {
    children?: React.ReactNode
}

const HeroButton1 = ({
    children
}: HeroButton1Props) => {
    return (
        <Button whileTap={0.95} variant="transparent" className='text-2xl px-2' onClick={() => scrollToSection('contact')}>
            {children}
        </Button>
    )
}

export default HeroButton1