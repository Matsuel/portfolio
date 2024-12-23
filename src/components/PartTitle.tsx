import { useState } from "react";

interface PartTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
}

const PartTitle = ({
    title,
    className
}: PartTitleProps) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <h1 className={`text-[170px] font-bold text-center rounded-full tracking-wide uppercase ${isHovered ? "text-black bg-white bg-opacity-20" : "text-black bg-white"} ${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {title}
        </h1>
    )
}

export default PartTitle