"use client";
import { motion } from "framer-motion";
import { mail } from "../../constants/navbar";
import AnimatedText from './AnimatedText';
import AnimatedTitle from './AnimatedTitle';
import SectionLayout from './SectionLayout';

const Hero = () => {

    return (
        <SectionLayout
            id='/'
            className='flex flex-col items-start justify-center h-screen gap-4'
        >
            <AnimatedTitle className='w-1/3'>
                Matheo LANG
            </AnimatedTitle>

            <AnimatedText
                delay={1.5}
                className='text-2xl font-semibold'
            >
                Développeur web basé à Bordeaux 🇫🇷
            </AnimatedText>

            <AnimatedText
                delay={1.8}
                className='text-lg font-semibold'
            >
                Je suis spécialisé dans la création de sites web de haute qualité et conviviaux. Mon objectif est de fournir une expérience numérique unique et engageante qui répond à vos besoins et dépasse vos attentes.
            </AnimatedText>

            <motion.a
                href={`mailto:${mail}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.8, type: "spring" }}
                className="self-start w-auto mt-10 px-10 py-4  font-semibold rounded-full shadow-xl text-xl focus:outline-none cursor-pointer transition-all duration-300 border-2 border-glassmorphism-border text-neutral-500 hover:text-foreground backdrop-blur-glassmorphism bg-[linear-gradient(145deg,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] hover:bg-[linear-gradient(145deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.1)_100%)]"
            >
                Prenons contact
            </motion.a>

        </SectionLayout>
    )
}

export default Hero