"use client";
import { projects } from '@/constantes/projects';
import React, { useEffect, useState } from 'react'
import Projet from './Projet';
import Dot from '@/components/Ui/Dot';


const Carousel = () => {

    const [active, setActive] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % 3)
        }, 5000)

        return () => clearInterval(interval)
    }, [active])

    return (
        <div className="w-2/3 h-auto flex flex-col gap-8 relative">
            <div className="h-[600px] flex flex-row items-start justify-start pl-52 gap-5 overflow-hidden relative">
                {projects.map((project, index) => {

                    return (
                        <Projet
                            projectsLength={projects.length}
                            index={index}
                            active={active}
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            link={project.link}
                            technologies={project.technologies}
                            icon={project.icon}
                            key={project.title}
                        />
                    );
                })}
            </div>

            <div className="w-full flex flex-row items-center justify-center gap-5 mt-8 relative z-10">
                <Dot active={active === 0} setActive={() => setActive(0)} />
                <Dot active={active === 1} setActive={() => setActive(1)} />
                <Dot active={active === 2} setActive={() => setActive(2)} />
            </div>
        </div>
    )
}

export default Carousel