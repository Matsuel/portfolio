import Github from '@/assets/Github';
import Preview from '@/assets/Preview';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProjectProps {
    title: string;
    description: string;
    link: string;
    github: string;
    technologies: string[];
    image?: StaticImageData;
    noPreview?: React.ReactNode;
}

const Project = ({
    title,
    description,
    link,
    github,
    technologies,
    image,
    noPreview
}: ProjectProps) => {
    return (
        <div className='w-[29%] h-auto text-text flex flex-col gap-4 border border-border rounded-xl'>
            {image ? <Image src={image} alt={title} className='w-full h-[200px] rounded-t-xl' /> : noPreview}

            <div className='w-full h-auto p-4 flex flex-col gap-2'>

                <h4 className='text-xl font-bold'>{title}</h4>
                <p className='text-base text-secondary'>{description}</p>

                <div className='w-full h-auto flex flex-row flex-wrap gap-2'>
                    {technologies.map((technology) => (
                        <span className='text-xs bg-tech text-text font-semibold p-2 rounded-md' key={technology}>{technology}</span>
                    ))}
                </div>
                <div className='w-full h-auto flex flex-row gap-4'>
                    <Link href={link} target='_blank' className='flex flex-row items-center justify-center bg-backgroundinverted text-colorinverted text-xs p-1 rounded-md gap-1 px-2'>
                        <Preview size={16} />
                        Preview
                    </Link>
                    <Link href={github} target='_blank' className='flex flex-row items-center justify-center bg-backgroundinverted text-colorinverted text-xs p-1 rounded-md gap-1 px-2'>
                        <Github size={16} />
                        Github
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Project