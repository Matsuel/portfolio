import React from 'react'
import SectionLayout from './SectionLayout'
import Accordion from '../Ui/Accordion'
import { schools } from '@/constantes/school'

const Parcours = () => {
    return (
        <SectionLayout
            title="Parcours"
            subtitle='Une carrière en construction'
            dark
        >
            <Accordion title='Expériences scolaires' data={schools} />


        </SectionLayout >
    )
}

export default Parcours