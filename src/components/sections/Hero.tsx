"use client";
import React from 'react'
import Image from 'next/image';

const Hero = () => {

    return (
        <section id='hero' className="w-full max-h-screen h-screen flex flex-col justify-start px-24 pt-32 items-center relative overflow-hidden" >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/bordeaux.jpg"
                alt="yacht"
                width={5235}
                height={1745}
            />
        </section>
    )
}

export default Hero