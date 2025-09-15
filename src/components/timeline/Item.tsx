import { TimelineEntry } from '@/types'
import Link from 'next/link'

interface ItemProps {
    item: TimelineEntry
    index: number
}

const Item = ({
    item,
    index
}: ItemProps) => {
    return (
        <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-2"
        >
            <div className="sticky flex flex-col md:flex-row z-10 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 w-10 rounded-full border-2 border-glassmorphism-border backdrop-blur-glassmorphism bg-[linear-gradient(145deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.1)_100%)] shadow-xl flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-white " />
                </div>

                <div className="hidden md:flex w-auto h-auto flex-col items-start justify-center md:pl-20">
                    <p className="text-xl md:text-2xl font-bold text-foreground">
                        {item.date}
                    </p>
                </div>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-3xl mb-4 text-left font-bold text-foreground">
                    {item.title}
                </h3>

                <Link className="text-lg md:text-xl font-semibold text-foreground mb-2 hover:underline" href={item.link} target="_blank">
                    @{item.company}
                </Link>


                <div className='flex flex-col gap-2'>
                    <h3 className="text-xl md:text-3xl font-bold text-foreground">
                        {item.title}
                    </h3>
                    {item.description.map((desc) => (
                        <p className="text-foreground text-xs md:text-base font-normal" key={desc}>
                            {desc}
                        </p>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Item