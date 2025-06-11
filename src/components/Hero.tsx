"use client";
import { motion } from "framer-motion";
import AnimatedText from './AnimatedText';
import AnimatedTitle from './AnimatedTitle';
import SectionLayout from './SectionLayout';
import { mail } from "../../constants/navbar";

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
                Web developer based in Bordeaux 🇫🇷
            </AnimatedText>

            <AnimatedText
                delay={1.8}
                className='text-lg font-semibold'
            >
                I'm specialized in creating high-quality, user-friendly websites. My objective is to deliver a unique and engaging digital experience that meets your needs and exceeds your expectations.
            </AnimatedText>

            <motion.a
                href={`mailto:${mail}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.8, type: "spring" }}
                className="self-start w-auto mt-10 px-10 py-4 bg-white/90 hover:bg-white text-black font-semibold rounded-full shadow-xl text-xl transition-all duration-200 focus:outline-none cursor-pointer"
            >
                Get in touch
            </motion.a>
        </SectionLayout>
    )
}

export default Hero