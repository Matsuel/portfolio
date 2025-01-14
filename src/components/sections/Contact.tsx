import React from 'react'
import SectionLayout from './SectionLayout'
import Input from '../Ui/Input'

const Contact = () => {
    return (
        <SectionLayout title="Contact" id="contact" subtitle="Parlons de votre projet">
            <Input label="Nom" type="text" className="mb-4" />
        </SectionLayout>
    )
}

export default Contact