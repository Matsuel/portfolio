"use client";
import React from 'react'
import SectionLayout from './SectionLayout';

const Hero = () => {
    return (
        <SectionLayout
            className="relative"
            style={{
                backgroundImage: "url('/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <h1 className="text-8xl font-semibold w-1/4">
                Matheo Lang
            </h1>

        </SectionLayout>
    )
}

export default Hero