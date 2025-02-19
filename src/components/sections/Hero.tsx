import React from 'react'
import Image from 'next/image';
import MouseIcon from '../Ui/MouseIcon';

const Hero = () => {

    return (
        <section id='hero' className="w-full max-h-screen h-screen flex flex-col justify-start px-24 pt-32 items-start relative overflow-hidden" >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                src="/bordeaux.jpg"
                alt="yacht"
                width={5235}
                height={1745}
            />

            <div className='w-1/3 z-30 h-auto flex flex-col items-start gap-12'>
                <h1 className="text-9xl text-white font-extrabold uppercase">Matheo LANG</h1>
                <p className="text-2xl text-white font-semibold">
                    Votre projet mérite une vitrine exceptionnelle.
                    Mon objectif est de concevoir une solution à la hauteur de vos ambitions - En savoir plus
                </p>
            </div>

            <div className='w-auto h-auto z-30 flex flex-col items-center gap-8 self-center absolute bottom-24'>
                <MouseIcon />
            </div>
        </section>
    )
}

export default Hero