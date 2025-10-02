import React from 'react'
import SectionLayout from './SectionLayout'
import BentoGrid from "@/components/bento/BentoGrid"
import { services } from '../../constants/services';
import { NavbarLinkSection } from '../../constants/navbar';

const Services = () => {
    return (
        <SectionLayout
            id={NavbarLinkSection.Services}
            className='h-auto flex flex-col items-center justify-center'
        >
            <BentoGrid items={services} />

        </SectionLayout>
    )
}

export default Services