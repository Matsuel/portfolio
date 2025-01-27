"use client";
import React from 'react'
import Button from '@/components/Ui/Button'
import { scrollToSection } from '@/utils/scroll';
import Image from 'next/image';
import Title from '../Ui/Title';

const Hero = () => {

    return (
        <section id='hero' className="w-full max-h-screen h-screen flex flex-col justify-start p-24 pt-32 items-center relative overflow-hidden" >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/Paris.jpg"
                alt="yacht"
                width={5235}
                height={1745}
            />

            <div className='w-full z-10 flex flex-col items-start gap-12'>

                <Title className='w-1/3'>
                    Matheo Lang
                </Title>

                <p className='w-[30%] text-2xl font-bold text-color'>
                    Votre projet mérite une vitrine exceptionnelle.
                    Mon objectif est de concevoir une solution à la hauteur de vos ambitions -
                    <Button
                        className='p-0 ml-3 font-bold text-2xl'
                        variant='transparent'
                    >
                        En savoir plus
                    </Button>
                </p>

            </div>

            <Button
                className='absolute z-10 flex flex-row items-center justify-center bottom-32'
                onClick={() => scrollToSection('contact')}
                whileTap={1}
                variant='primary'
            >
                Construisons ensemble votre succès <Image src='/rightArrow.svg' alt='right arrow' width={24} height={24} />
            </Button>
        </section>
    )
}

export default Hero