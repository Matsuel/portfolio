import React from 'react'
import SectionLayout from './SectionLayout'
import Title from '../Ui/Title'
import { jobs } from '@/constantes/jobs'
import Experience from '../Ui/Experience'
import { schools } from '@/constantes/school'

const Parcours = () => {
    return (
        <SectionLayout title="Parcours" subtitle="Evolutions et étapes clés" id='parcours'>
            <div className='w-4/5 h-auto flex flex-row gap-4'>

                <div className='w-1/2 h-auto flex flex-col items-center gap-6'>
                    <Title className='mb-10'>Professionnelles</Title>

                    {jobs.map((job, index) => (
                        <Experience
                            key={job.title}
                            title={job.title}
                            role={job.role}
                            date={job.date}
                            link={job.link}
                            image={job.image}
                        />
                    ))}
                </div>

                <div className='w-1/2 h-auto flex flex-col items-center gap-6'>
                    <Title className='mb-10'>Scolaires</Title>

                    {schools.map((school, index) => (
                        <Experience
                            key={school.title}
                            title={school.title}
                            role={school.role}
                            date={school.date}
                            link={school.link}
                            image={school.image}
                        />
                    ))}
                </div>

            </div>
        </SectionLayout>
    )
}

export default Parcours