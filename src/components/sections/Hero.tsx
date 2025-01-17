"use client";
import React from 'react'
import Button from '@/components/Ui/Button'
import { scrollToSection } from '@/utils/scroll';
import Image from 'next/image';

const Hero = () => {


    return (
        <section id='hero' className="w-full max-h-screen min-h-screen flex flex-col justify-center p-8 items-center relative overflow-hidden" >
            <Image className='absolute top-0 left-0 w-full h-full object-cover' src='/yacht.jpg' alt='yacht' width={1920} height={1080} />


            <p className='z-10 w-[60%] text-4xl font-bold text-text text-center'>
                Développeur web spécialisé dans la création de solutions simples mais efficaces, avec une approche qui redéfinit les standards du design
            </p>

            {/* <p className='absolute right-8 w-[25%] text-text text-2xl'>
                "Pour atteindre un nouveau rivage, il faut accepter de quitter le port."
                — Christophe Colomb
            </p> */}

            <div className='bottom-12 z-10 w-auto h-auto flex flex-col items-center'>
                <h1 className='text-[160px] leading-none font-extrabold text-text uppercase'>Matheo Lang</h1>

            </div>

            <Button variant='primary' className='mt-12 z-10' onClick={() => scrollToSection('contact')}>
                Signaler votre intérêt
            </Button>
        </section>
    )
}

export default Hero