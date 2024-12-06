import BlurIn from '@/components/hero/BlurIn'
import Button from '@/components/ui/Button'
import { useRouter } from 'next/router'
import React from 'react'

const Error404 = () => {

    const router = useRouter()

    return (
        <div className="w-full bg-background flex min-h-screen flex-col items-center justify-center relative">
            <BlurIn word="Error 404" />
            <Button variant='white' onClick={() => router.replace('/')} className='absolute z-50'>
                Accueil
            </Button>
        </div>
    )
}

export default Error404