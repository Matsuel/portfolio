"use client";
import React from 'react'
import SectionLayout from './SectionLayout';

const Hero = () => {
    return (
        <SectionLayout
            style={{
                backgroundImage: "url('/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1 className="text-title leading-none font-semibold w-1/4">
                trouver palette de couleurs
            </h1>

        </SectionLayout>
    )
}

export default Hero