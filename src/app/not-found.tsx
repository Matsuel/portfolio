"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../constants/animation'
import Background from '@/components/Background'

const NotFound = () => {
    return (
        <div className='w-full min-h-screen max-h-screen flex flex-col items-center justify-center'>
            <Background />
            <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
            >
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={200}
                    height={200}
                    className="mb-8"
                />
            </motion.div>
            <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className='text-4xl font-bold text-center mb-4'
            >
                404 - Page non trouvée
            </motion.h1>
            <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className='text-lg text-center mb-8'
            >
                Désolé, la page que vous cherchez n&apos;existe pas.
            </motion.p>
            <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className='flex flex-col items-center'
            >
                <Link href="/" className='text-blue-500 hover:underline'>
                    Retour à la page d&apos;accueil
                </Link>
            </motion.div>
        </div>
    )
}

export default NotFound