import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
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
                    Vous avez une question ou vous souhaitez me contacter pour un projet ? N&apos;hésitez pas à m&apos;envoyer un message !
                </p>

                <div className='w-full h-auto flex flex-row gap-10'>
                    <Input
                        placeholder='Niel'
                        registerName='name'
                        register={register}
                        label='Nom'
                        required
                    />

                    <Input
                        placeholder='Xavier'
                        registerName='firstname'
                        register={register}
                        label='Prenom'
                        required
                    />
                </div>

                <Input
                    placeholder='Objet'
                    registerName='object'
                    register={register}
                    label='Objet'
                    required
                />

                <Input
                    placeholder='xavier.niel@free.fr'
                    registerName='email'
                    register={register}
                    label='Email'
                    type='email'
                    required
                />

                <Input
                    placeholder='Saissisez votre message'
                    registerName='message'
                    register={register}
                    label='Message'
                    required
                    area
                />

                <Button type='submit'>
                    Envoyer le message
                </Button>
            </form>
        </section>
    );
};

export default Contact;
