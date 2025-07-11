"use client";
import React from 'react';
import Link from 'next/link';
import { mail } from '../../../constants/navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { fadeUp } from '../../../constants/animation';
import Background from '@/components/Background';

const MentionsLegalesPage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center py-12 px-4'>
            <Background />
            <motion.h1
                custom={0}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className='text-4xl font-bold mb-8'>
                Mentions Légales
            </motion.h1>
            <div className='max-w-2xl w-full flex flex-col gap-6 text-base mb-8'>
                <motion.section
                    custom={1}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}>
                    <h2 className='text-xl font-semibold mb-2'>Éditeur du site</h2>
                    <p><strong>Mathéo Lang</strong></p>
                    <p>Email : <Link className='text-blue-500 hover:underline' href={`mailto:${mail}`}>{mail}</Link></p>
                </motion.section>
                <motion.section
                    custom={2}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}>
                    <h2 className='text-xl font-semibold mb-2'>Hébergement</h2>
                    <p>Hébergeur : Vercel Inc.</p>
                    <p>San Francisco, CA, États-Unis</p>
                    <p>Site : <a href="https://vercel.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
                </motion.section>
                <motion.section
                    custom={3}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}>
                    <h2 className='text-xl font-semibold mb-2'>Propriété intellectuelle</h2>
                    <p>
                        Le contenu de ce site (textes, images, code, etc.) est protégé par le droit d’auteur. Toute reproduction ou utilisation sans autorisation est interdite.
                    </p>
                </motion.section>
                <motion.section
                    custom={4}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}>
                    <h2 className='text-xl font-semibold mb-2'>Données personnelles</h2>
                    <p>
                        Ce site ne collecte pas de données personnelles sans votre consentement. Pour toute question, contactez-nous à l’adresse indiquée ci-dessus.
                    </p>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
};

export default MentionsLegalesPage;