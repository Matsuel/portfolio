"use client"

import React from 'react'
import Theme from "@/components/Theme";
import CircleProgress from './CircleProgress';
import useScrollPercentage from '@/hooks/usePercentage';
import Island from './Island';

const Content = () => {

    const { scrollPercentage } = useScrollPercentage();

    return (
        <div
            className={`w-full flex flex-col items-center justify-start p-8 pt-24 gap-20 transition-opacity duration-700 ease-in-out`}
        >
            <Island />
            <div className="fixed z-40 w-52 h-12 top-8 bg-black rounded-3xl flex flex-row justify-between">
                <div />
                <CircleProgress percentage={scrollPercentage} />
            </div>
            <Theme />
        </div>
    )
}

export default Content