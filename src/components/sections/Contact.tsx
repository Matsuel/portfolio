import React from 'react'
import SectionLayout from './SectionLayout'
import Input from '../Ui/Input'
import Button from '../Ui/Button'

const Contact = () => {

    return (
        <SectionLayout title='Contact' subtitle='Prêt à démarrer ?' id='contact'>
            <div className='w-full flex flex-col gap-8 items-center'>
                <div className='w-full h-auto flex flex-row gap-4 items-center'>
                    <Input type='text' placeholder='Nom' />
                    <Input type='text' placeholder='Prénom' />
                </div>
                <Input type='email' placeholder='Email' />
                <textarea className='outline-none transition-all duration-300 text-2xl font-semibold w-full bg-[#0f0f0f] p-8 rounded-xl h-52' placeholder='Message'></textarea>
                <Button variant='primary'>Envoyer</Button>
            </div>
        </SectionLayout>
    )
}

export default Contact