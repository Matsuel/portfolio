import React from 'react'
import SectionLayout from './SectionLayout'
import Accordion from '../Ui/Accordion'
import { schools } from '@/constantes/school'
import { jobs } from '@/constantes/jobs'

const Parcours = () => {
    return (
        <SectionLayout
            className='pb-10'
            title="Parcours"
            subtitle='Une carrière en construction'
            dark
        >
            <Accordion title='Expériences scolaires' data={schools} />
            <Accordion title='Expériences professionnelles' data={jobs} />


        </SectionLayout >
    )
}

export default Parcours