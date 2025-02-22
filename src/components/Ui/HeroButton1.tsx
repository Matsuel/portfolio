"use client";
import React from 'react'
import Button from '@/components/Ui/Button'
import { scrollToSection } from '@/utils/scroll'

const HeroButton1 = () => {
    return (
        <Button whileTap={0.95} variant="transparent" className='text-2xl px-2' onClick={() => scrollToSection('contact')}>
            En savoir plus
        </Button>
    )
}

export default HeroButton1