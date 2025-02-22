import React from 'react'
import Image from 'next/image';
import MouseIcon from '../Ui/MouseIcon';
import AnimatedTitle from '../Ui/AnimatedTitle';
import HeroButton1 from '../Ui/HeroButton1';

const Hero = () => {

    return (
        <section id='hero' className="w-full max-h-screen h-screen flex flex-col justify-start p-24 items-start relative overflow-hidden snap-start" >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                src="/bordeaux.jpg"
                alt="yacht"
                width={5235}
                height={1745}
            />

            <div className='w-1/3 z-30 h-auto flex flex-col items-start gap-12'>
                <AnimatedTitle title="Matheo LANG" />

                <p className="text-2xl text-white font-semibold">
                    Votre projet mérite une vitrine exceptionnelle.
                    Mon objectif est de concevoir une solution à la hauteur de vos ambitions -
                    <HeroButton1 />
                </p>
            </div>

            <div className='w-auto h-auto z-30 flex flex-col items-center gap-8 self-center absolute bottom-24'>
                <MouseIcon />
            </div>
        </section>
    )
}

export default Hero