import React from 'react'
import Button from './Button'
import { projectsFilters } from '@/constantes/projects';

interface ProjectsFilterProps {
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}


const ProjectsFilter = ({
    activeFilter,
    setActiveFilter
}: ProjectsFilterProps) => {
    return (
        <div className='w-auto h-auto flex flex-row justify-center gap-4 mt-5'>
            {projectsFilters.map((filter, index) => (
                <Button
                    whileTap={1}
                    key={index}
                    className='font-bold text-2xl'
                    variant={activeFilter === filter.filter ? 'primary' : 'transparent'}
                    onClick={() => setActiveFilter(filter.filter)}
                >
                    {filter.name}
                </Button>
            ))}
        </div>
    )
}

export default ProjectsFilter