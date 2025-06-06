import { BentoItem } from '@/types'
import { cn } from '@/utils/cn'

const Item = ({
    icon,
    title,
    description,
    status,
    tags = [],
    colSpan
}: BentoItem) => {
    return (
        <div
            className={cn(
                "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
                "border border-gray-100/80 bg-white",
                "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)]",
                "hover:-translate-y-0.5 will-change-transform",
                colSpan || "col-span-1",
                colSpan === 2 ? "lg:col-span-2" : "",
            )}
        >
            <div
                className={"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
            </div>

            <div className="relative flex flex-col space-y-3">
                <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5">
                        {icon}
                    </div>
                    <span
                        className={cn(
                            "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                            "bg-black/5 text-gray-600"
                        )}
                    >
                        {status}
                    </span>
                </div>

                <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 tracking-tight text-[15px]">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-snug font-[425]">
                        {description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                        {tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-2 py-1 rounded-md bg-black/5 backdrop-blur-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={"absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}
            />
        </div>
    )
}

export default Item