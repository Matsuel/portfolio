import Arrow from "@/assets/Arrow";
import useScrollPercentage from "@/hooks/usePercentage";
import React from "react";

const CircleProgress = () => {
    const { scrollPercentage } = useScrollPercentage();
    const percentageNumber = parseInt(scrollPercentage, 10);


    return (
        <div className="fixed right-8 bottom-8 flex flex-row items-center justify-center gap-2">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`flex flex-row items-center justify-center border-none outline-none transition-all duration-500 ease-in-out ${percentageNumber < 10 ? "opacity-0" : "opacity-100"}`}>
                <Arrow size={40} />
            </button>
            <div className="relative flex justify-center items-center">
                <div
                    className="w-10 h-10 rounded-full flex justify-center items-center"
                    style={{
                        background: `conic-gradient(#00E46C ${percentageNumber}%, #173B2A ${percentageNumber}% 100%)`,
                    }}
                >
                    <div className="w-8 h-8 bg-black rounded-full flex justify-center items-center">
                        <span className="text-[#00E46C] text-xs font-bold">{percentageNumber}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CircleProgress;
