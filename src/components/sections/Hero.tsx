"use client";
import React from 'react'
import Button from '@/components/Ui/Button'
import { scrollToSection } from '@/utils/scroll';
import Image from 'next/image';

const Hero = () => {

    return (
        <section id='hero' className="w-full max-h-screen min-h-screen flex flex-col justify-center p-8 gap-12 items-center relative overflow-hidden" >
            <Image className='absolute top-0 left-0 w-full h-full object-center' src='/nyc.jpg' alt='yacht' width={1920} height={1080} />

            <h1 className='z-10 text-[160px] leading-none font-extrabold text-text uppercase'>Matheo Lang</h1>
            <p className='z-10 w-[65%] text-4xl font-bold text-color text-center mb-32'>
                Développeur web spécialisé dans la création de solutions simples mais efficaces, avec une approche qui redéfinit les standards du design
            </p>

            <Button variant='primary' className='mt-12 z-10' onClick={() => scrollToSection('contact')}>
                Signaler votre intérêt
            </Button>
        </section>
    )
}

export default Hero