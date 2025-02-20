import React from 'react'
import SectionLayout from './SectionLayout'
import { services } from '@/constantes/services'
import Service from '../Ui/Service'

const Services = () => {
    return (
        <SectionLayout title='Services' subtitle='Ce que je peux faire pour vous' id='services'>
            <div className='w-[100%] flex flex-row flex-wrap gap-8'>
                {services.map((service, index) => (
                    <Service
                        title={service.title}
                        description={service.description}
                        expanded={index > 2}
                        key={index}
                    />
                ))}
            </div>

        </SectionLayout>
    )
}

export default Services