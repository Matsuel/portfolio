"use client";
import React from 'react'
import SectionLayout from './SectionLayout';
import AnimatedTitle from './AnimatedTitle';
import { motion } from "framer-motion";

const Hero = () => {
    // Fonction pour scroll vers la section contact
    const handleContactClick = () => {
        const el = document.getElementById("contact");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <SectionLayout
            style={{
                backgroundImage: "url('/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
            className='flex flex-col items-start justify-center h-screen px-[5%]'
        >
            <div className="relative z-10 w-full">
                <AnimatedTitle className='w-1/2'>
                    Matheo LANG
                </AnimatedTitle>
                {/* Sous-titre animé */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
                    className="w-1/2 mt-4 text-2xl font-normal text-black/80"
                >
                    Designer & Développeur créatif basé à Paris
                </motion.div>
                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
                    className='w-1/2 mt-6 text-lg font-normal text-black/70'
                >
                    J’aide les marques à se démarquer grâce à des expériences web élégantes, interactives et sur-mesure.
                </motion.div>
                {/* Call to action */}
                <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.1, duration: 0.8, type: "spring" }}
                    onClick={handleContactClick}
                    className="relative inline-block mt-10 px-10 py-4 bg-white/90 hover:bg-white text-black font-semibold rounded-full shadow-xl text-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/60"
                    style={{ backdropFilter: "blur(2px)" }}
                >
                    <span className="relative z-10">Discutons de votre projet</span>
                    {/* Glow effet */}
                    <span
                        className="absolute inset-0 rounded-full pointer-events-none"
                        style={{
                            boxShadow: "0 0 32px 8px rgba(255,255,255,0.25), 0 2px 8px 0 rgba(0,0,0,0.10)"
                        }}
                    />
                </motion.button>
            </div>
        </SectionLayout>
    )
}

export default Hero