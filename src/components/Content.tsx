"use client"

import React from 'react'
import Theme from "@/components/Theme";
import CircleProgress from './CircleProgress';
import Hour from './Hour';
import Hero from '@/components/Hero';

const Content = () => {


    return (
        <div
            className={`w-full flex flex-col items-center justify-start p-8 gap-20 transition-opacity duration-700 ease-in-out`}
        >
            <Theme />
            <CircleProgress />
            <Hour />
            <Hero />
        </div>
    )
}

export default Content