"use client";
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';
import { toast } from 'sonner';

const ContactForm = () => {

    const t = useTranslations('Contact')
    const [name, setName] = useState<string>('')
    const [firstname, setFirstname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }
    const handleFirstname = (e: React.ChangeEvent<HTMLInputElement>) => { setFirstname(e.target.value) }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }
    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setMessage(e.target.value) }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name, firstname, email, message)
        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, firstname, email, message })
        })

        const response = await res.json()
        if (response.message === 'Message sent') {
            toast.success('Votre message a bien été envoyé !', {
                style: {
                    borderRadius: '12px',
                    backgroundColor: '#0f0f0f',
                    color: '#fff',
                    borderColor: '#0f0f0f'
                }
            })
        } else {
            toast.error('Une erreur est survenue lors de l\'envoi du message', {
                style: {
                    borderRadius: '12px',
                    backgroundColor: '#0f0f0f',
                    color: '#fff',
                    borderColor: '#0f0f0f'
                }
            })
        }

    }

    return (
        <form className='w-full flex flex-col gap-8 items-center' onSubmit={handleSubmit}>
            <div className='w-full h-auto flex flex-row gap-4 items-center'>
                <Input
                    type='text'
                    placeholder={t('form.name')}
                    onChange={handleName}
                    value={name}
                />
                <Input
                    type='text'
                    placeholder={t('form.firstname')}
                    onChange={handleFirstname}
                    value={firstname}
                />
            </div>
            <Input
                type='email'
                placeholder={t('form.email')}
                onChange={handleEmail}
                value={email}
            />
            <textarea
                className='outline-none transition-all duration-300 text-2xl font-semibold w-full bg-[#0f0f0f] p-8 rounded-xl h-52'
                placeholder={t('form.message')}
                onChange={handleMessage}
                value={message}
            ></textarea>
            <Button variant='primary' type='submit'>
                {t('form.submit')}
            </Button>
        </form>
    )
}

export default ContactForm