import React from 'react'
import { motion, useTransform } from 'framer-motion'

interface ItemProps {
    index: number
    x: any
    item: any
    trackItemOffset: number
    itemWidth: number
    effectiveTransition: any
    round: boolean
}

const Item = ({
    index,
    x,
    item,
    trackItemOffset,
    itemWidth,
    effectiveTransition,
    round
}: ItemProps) => {
    const range = [
        -(index + 1) * trackItemOffset,
        -index * trackItemOffset,
        -(index - 1) * trackItemOffset,
    ];
    const outputRange = [90, 0, -90];
    const rotateY = useTransform(x, range, outputRange, { clamp: false });
    return (
        <motion.div
            key={index}
            className={`relative shrink-0 flex flex-col h-96 ${round
                ? "items-center justify-center text-center bg-[#060606] border-0"
                : "items-start justify-between bg-[#0f0f0f] border border-[#222] rounded-[12px]"
                } overflow-hidden cursor-grab active:cursor-grabbing`}
            style={{
                width: itemWidth,
                rotateY: rotateY,
                ...(round && { borderRadius: "50%" }),
            }}
            transition={effectiveTransition}
        >
            <div className={`${round ? "p-0 m-0" : "mb-4 p-5"}`}>
                <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060606]">
                    {item.icon}
                </span>
            </div>
            <div className="p-5">
                <div className="mb-1 font-black text-lg text-white">
                    {item.title}
                </div>
                <p className="text-sm text-white">{item.description}</p>
            </div>
        </motion.div>
    );
}

export default Item