import React from "react";

interface CircleProgressProps {
    percentage: string; // Pourcentage à afficher sur la bordure
}

const CircleProgress: React.FC<CircleProgressProps> = ({ percentage }) => {
    const percentageNumber = parseInt(percentage, 10);


    return (
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
    );
};

export default CircleProgress;
