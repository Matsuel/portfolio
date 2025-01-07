"use client"
import Arrow from "@/assets/Arrow";
import useScrollPercentage from "@/hooks/usePercentage";
import { scrollToTop } from "@/utils/scroll";
import React from "react";

const CircleProgress = () => {
    const { scrollPercentage } = useScrollPercentage();

    return (
        <div className="fixed right-8 bottom-8 flex flex-row items-center justify-center gap-2">
            <button
                onClick={scrollToTop}
                className={`flex flex-row items-center justify-center border-none outline-none transition-all duration-500 ease-in-out ${scrollPercentage < 10
                    ? "opacity-0 pointer-events-none"
                    : "opacity-100 pointer-events-auto"
                    }`}
            >
                <Arrow size={45} />
            </button>
            <div className="relative flex justify-center items-center">
                <div
                    className="w-10 h-10 rounded-full flex justify-center items-center"
                    style={{
                        background: `conic-gradient(#00E46C ${scrollPercentage}%, #173B2A ${scrollPercentage}% 100%)`,
                    }}
                >
                    <div className="w-8 h-8 bg-background rounded-full flex justify-center items-center">
                        <span className="text-[#00E46C] text-xs font-bold">{scrollPercentage}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleProgress;
