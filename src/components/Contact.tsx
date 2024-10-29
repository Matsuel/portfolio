import React from 'react'
import SectionTitle from './SectionTitle'
import Input from './Input'
import Button from './Button'

const Contact = () => {
    return (
        <section id='contact' className='w-[83%] h-auto flex flex-col gap-20'>
            <SectionTitle>
                Contact
            </SectionTitle>

            <div className='w-[40%] h-auto flex flex-col gap-5 self-center border border-border rounded-lg p-5'>
                <h4 className='text-text text-3xl font-bold'>Contactez-moi</h4>

                <p className='text-text'>
                    Vous avez une question ou vous souhaitez me contacter pour un projet ? N'hésitez pas à m'envoyer un message !
                </p>

                <div className='w-full h-auto flex flex-row gap-10'>
                    <Input placeholder='Nom' />
                    <Input placeholder='Prénom' />
                </div>

                <Input placeholder='Email' />

                <Input placeholder='Objet' area />

                <Button>
                    Envoyer le message
                </Button>

            </div>

        </section>
    )
}

export default Contact