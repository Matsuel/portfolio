"use client"
import React from 'react'
import SectionLayout from './SectionLayout'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import { mail } from '../../constants/navbar'
import { liquidGlassBg, liquidGlassBorder } from '../../constants/liquidGlass'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

const sendEmail = async (data: Inputs) => {
    try {
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            return { success: true };
        } else {
            return { success: false };
        }

    } catch {
        return { success: false };
    }
}


const Contact = () => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const result = await sendEmail(data);
        if (result.success) {
            reset();
        }
    };

    return (
        <SectionLayout
            id='contact'
        >
            <div className={`w-full h-auto flex flex-col ${liquidGlassBorder} ${liquidGlassBg} p-3 pt-5 rounded-2xl`}>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Contactez-moi</h2>
                    <p className="mt-2 text-base text-white">Un projet ? Et si on construisait ça ensemble.</p>
                    <p className="mt-2 text-base text-white">Remplissez le formulaire ou contactez-moi directement par email <Link href={`mailto:${mail}`} className='underline'>{(mail)}</Link></p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} method="POST" className="mx-auto mt-12 max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
                                Prénom
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    required
                                    {...register("firstName")}
                                    className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 shadow-2xl"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                                Nom
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    {...register("lastName")}
                                    type="text"
                                    autoComplete="family-name"
                                    required
                                    className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    {...register("email")}
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
                                Numéro de téléphone (Optionnel)
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-xl bg-white outline-1 -outline-offset-1 outline-white has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 shadow-2xl">
                                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            aria-label="Country"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-xl py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
                                        >
                                            <option>FR</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                    <input
                                        id="phone-number"
                                        {...register("phone")}
                                        type="text"
                                        placeholder="06 12 34 56 78"
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                                Votre projet
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    {...register("message")}
                                    rows={4}
                                    className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 shadow-2xl"
                                    defaultValue={''}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-xl bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Envoyer ma demande
                        </button>
                    </div>
                </form>
            </div>

        </SectionLayout>
    )
}

export default Contact