import React from 'react'
import SectionLayout from './SectionLayout'
import Input from '../Ui/Input'

const Contact = () => {

    return (
        <SectionLayout title='Contact' subtitle='Prêt à démarrer ?' id='contact'>
            <Input type='text' placeholder='Nom' />
            <Input type='email' placeholder='Email' />
            <textarea className='outline-none transition-all duration-300 text-3xl font-bold w-4/5 bg-[#0f0f0f] p-8 rounded-xl h-auto' placeholder='Message'></textarea>
        </SectionLayout>
    )
}

export default Contact