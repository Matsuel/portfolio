import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import Input from './Input';
import Button from './Button';
import { useForm, SubmitHandler } from "react-hook-form"
import { IFormValues } from '@/types';
import { toast } from 'sonner';

const Contact = () => {


    const { register, handleSubmit, reset } = useForm<IFormValues>()
    const sendEmail: SubmitHandler<IFormValues> = async (data) => {

        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const response = await res.json()

        console.log(response)

        if (response.sent) {
            toast.success('Votre message a bien été envoyé !', {
                className: 'bg-background text-text border-border'
            })
            reset()
        } else {
            toast.error('Une erreur est survenue lors de l\'envoi du message', {
                className: 'bg-background text-red-700 border-border'
            })
        }

    }



    return (
        <section id='contact' className='w-[83%] h-auto flex flex-col gap-20'>
            <SectionTitle>
                Contact
            </SectionTitle>

            <form className='w-[40%] h-auto flex flex-col gap-5 self-center border border-border rounded-lg p-5' onSubmit={handleSubmit(sendEmail)}>
                <h4 className='text-text text-3xl font-bold'>Contactez-moi</h4>

                <p className='text-text'>
                    Vous avez une question ou vous souhaitez me contacter pour un projet ? N'hésitez pas à m'envoyer un message !
                </p>

                <div className='w-full h-auto flex flex-row gap-10'>
                    <Input placeholder='Nom' register={register} label='name' required />
                    <Input placeholder='Prénom' register={register} label='firstname' required />
                </div>

                <Input placeholder='Objet' register={register} label='object' required />

                <Input placeholder='Email' type='email' register={register} label='email' required />

                <Input placeholder='Message' area register={register} label='message' required />

                <Button type='submit'>
                    Envoyer le message
                </Button>
            </form>
        </section>
    );
};

export default Contact;
