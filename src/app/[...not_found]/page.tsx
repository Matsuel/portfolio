"use client";
import Button from '@/components/Ui/Button'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

    const router = useRouter()

    return (
        <div className='w-full min-h-screen max-h-screen flex flex-col justify-center items-center bg-background'>

            <Button
                onClick={() => router.replace('/')}
                variant='secondary'
                whileTap={1}
            >
                Retour à l'accueil
            </Button>


        </div>
    )
}

export default page