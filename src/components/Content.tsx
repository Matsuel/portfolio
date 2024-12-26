"use client"

import React from 'react'
import Theme from "@/components/Theme";
import CircleProgress from './CircleProgress';
import Hour from './Hour';
import Navbar from './Navbar';
import Hero from '@/components/Hero';

const Content = () => {


    return (
        <div
            className={`w-full flex flex-col items-center justify-start p-8 pt-24 gap-20 transition-opacity duration-700 ease-in-out`}
        >
            <Navbar />
            <Theme />
            <CircleProgress />
            <Hour />

            <Hero />
        </div>
    )
}

export default Content