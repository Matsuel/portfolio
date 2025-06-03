"use client";

import { BentoItem } from "@/types";
import Item from "./bento/Item";

interface BentoGridProps {
    items: BentoItem[];
}

const BentoGrid = ({
    items
}: BentoGridProps) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 w-full">
            {items.map((item, index) => (
                <Item
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    status={item.status}
                    tags={item.tags}
                    colSpan={item.colSpan}
                />
            ))}
        </div>
    );
}

export default BentoGrid;
