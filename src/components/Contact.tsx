import React from 'react'
import SectionLayout from './SectionLayout'
import { ChevronDownIcon } from 'lucide-react'
import Link from 'next/link'
import { mail } from '../../constants/navbar'


const Contact = () => {
    return (
        <SectionLayout
            id='contact'
        >
            <div className='w-full h-auto flex flex-col bg-[#fafafa]/90 p-3 pt-5 rounded-2xl'>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contactez-moi</h2>
                    <p className="mt-2 text-base text-gray-600">Un projet ? Et si on construisait ça ensemble.</p>
                    <p className="mt-2 text-base text-gray-600">Remplissez le formulaire ou contactez-moi directement par email <Link href={`mailto:${mail}`} className='underline'>{(mail)}</Link></p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-12 max-w-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
                                Prénom
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 shadow-2xl"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-gray-900">
                                Nom
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
                                Numéro de téléphone (Optionnel)
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-full bg-white outline-1 -outline-offset-1 outline-white has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 shadow-2xl">
                                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            aria-label="Country"
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-full py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 "
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
                                        name="phone-number"
                                        type="text"
                                        placeholder="06 12 34 56 78"
                                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                                Votre projet
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full rounded-xl bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-white placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 shadow-2xl"
                                    defaultValue={''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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