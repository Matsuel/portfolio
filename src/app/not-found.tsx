import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='w-full min-h-screen max-h-screen flex flex-col items-center justify-center bg-background'>
            <Image
                src="/logo.svg"
                alt="Logo"
                width={200}
                height={200}
                className="mb-8"
            />
            <h1 className='text-4xl font-bold text-center mb-4'>404 - Page non trouvée</h1>
            <p className='text-lg text-center mb-8'>Désolé, la page que vous cherchez n'existe pas.</p>
            <Link href="/" className='text-blue-500 hover:underline'>Retour à la page d'accueil</Link>
        </div>
    )
}

export default NotFound