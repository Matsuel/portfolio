import { cn } from "@/utils/cn";

interface PartTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    title: string;
}

const PartTitle = ({
    title,
    className
}: PartTitleProps) => {

    return (
        <h1 className={cn(`text-[170px] font-bold text-center rounded-full tracking-wide uppercase transition-all duration-500 ease-in-out text-black bg-white hover:bg-opacity-20`, className)}>
            {title}
        </h1>
    )
}

export default PartTitle