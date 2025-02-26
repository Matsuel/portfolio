"use client";
import React from 'react'
import Button from '@/components/Ui/Button'
import { useRouter } from 'next/navigation'

const NotFound = () => {

    const router = useRouter()

    return (
        <div className='w-full min-h-screen max-h-screen flex flex-col justify-center items-center bg-background relative'>

            <h1 className='text-[400px] font-black text-text'>404</h1>

            <p className='text-text text-2xl font-semibold mt-4'>
                Oops... Il semble que cette page n&apos;existe pas
            </p>

            <p className='text-text text-lg font-normal mt-4'>
                Mais ne vous inquiétez pas, vous toujours pouvez retourner à l&apos;accueil
            </p>

            <Button
                onClick={() => router.push('/')}
                className='mt-8'
                whileTap={1}
            >
                Retourner à l&apos;accueil
            </Button>
        </div>
    )
}

export default NotFound