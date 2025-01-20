"use client";
import React from 'react'
import Button from '@/components/Ui/Button'
import { scrollToSection } from '@/utils/scroll';
import Image from 'next/image';
import Title from '../Ui/Title';
import SimpleArrow from '@/assets/SimpleArrow';

const Hero = () => {

    return (
        <section id='hero' className="w-full max-h-screen h-screen flex flex-col justify-start p-8 gap-12 items-center relative overflow-hidden" >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/Paris.jpg"
                alt="yacht"
                width={5235}
                height={1745}
            />

            <div className='w-auto z-10 flex flex-col items-start gap-16'>

                <Title className='w-1/3 z-10'>
                    Matheo Lang
                </Title>

                <p className='z-10 w-[47%] text-4xl font-bold text-color'>
                    Développeur web spécialisé dans la création de solutions simples mais efficaces, avec une approche qui redéfinit les standards du design
                    <Button variant='transparent' className='text-3xl font-bold'>
                        En savoir plus <SimpleArrow />
                    </Button>
                </p>

            </div>

            <Button variant='primary' className='absolute z-10 bottom-40' onClick={() => scrollToSection('contact')}>
                Signaler votre intérêt
            </Button>
        </section>
    )
}

export default Hero