import React from 'react'
import SectionLayout from './SectionLayout'
import BentoGrid from "@/components/bento/BentoGrid"
import { services } from '../../constants/services';

const Services = () => {
    return (
        <SectionLayout
            id='services'
            className='h-auto flex flex-col items-center justify-center'
        >
            <BentoGrid items={services} />

        </SectionLayout>
    )
}

export default Services