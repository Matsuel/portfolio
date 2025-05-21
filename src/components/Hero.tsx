"use client";
import React from 'react'
import SectionLayout from './SectionLayout';
import AnimatedTitle from './AnimatedTitle';
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText';
import { useRouter } from 'next/navigation';

const Hero = () => {

    const router = useRouter();

    const handleContactClick = () => {
        router.push("#contact");
    };

    return (
        <SectionLayout
            id='/'
            style={{
                backgroundImage: "url('/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            className='flex flex-col items-start justify-center h-screen px-[5%] gap-4'
        >
            <AnimatedTitle className='w-1/3'>
                Matheo LANG
            </AnimatedTitle>

            <AnimatedText
                delay={1.5}
                className='text-2xl font-semibold'
            >
                Développeur Web basé à Bordeaux 🇫🇷
            </AnimatedText>

            <AnimatedText
                delay={1.8}
                className='text-lg font-semibold'
            >
                Votre projet mérite une vitrine exceptionnelle. Mon objectif est de concevoir une solution à la hauteur de vos ambitions et de vos besoins.
            </AnimatedText>

            <motion.button
                type="button"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.8, type: "spring" }}
                onClick={handleContactClick}
                className="self-start w-auto mt-10 px-10 py-4 bg-white/90 hover:bg-white text-black font-semibold rounded-full shadow-xl text-xl transition-all duration-200 focus:outline-none cursor-pointer"
            >
                Discutons de votre projet
            </motion.button>
        </SectionLayout>
    )
}

export default Hero