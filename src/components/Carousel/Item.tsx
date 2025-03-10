import React from 'react'
import { motion, useTransform } from 'framer-motion'
import Button from '../Ui/Button'
import { CarouselItem } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

interface ItemProps {
    index: number
    x: any
    item: CarouselItem
    trackItemOffset: number
    itemWidth: number
    effectiveTransition: any
}

const Item = ({
    index,
    x,
    item,
    trackItemOffset,
    itemWidth,
    effectiveTransition,
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
            className="relative shrink-0 flex flex-col h-96 items-start bg-[#0f0f0f] border border-[#222] rounded-[12px] overflow-hidden cursor-grab active:cursor-grabbing"
            style={{
                width: itemWidth,
                rotateY: rotateY,
            }}
            transition={effectiveTransition}
        >
            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#060606] mt-4 ml-4">
                {item.icon}
            </span>
            <div className="p-4">
                <div className='flex flex-row gap-4 items-center'>
                    <h4 className="mb-1 font-black text-4xl text-white">
                        {item.title}
                    </h4>
                    {item.link && <Button>
                        <Link target='_blank' href={item.link}>
                            Voir le projet
                        </Link>
                    </Button>}
                </div>
                <p className="text-base text-white">{item.description}</p>
            </div>
            {item.preview &&
                <Image
                    src={item.preview}
                    alt={item.title}
                    width={itemWidth}
                    height={itemWidth * 0.2}
                />
            }
        </motion.div>
    );
}

export default Item