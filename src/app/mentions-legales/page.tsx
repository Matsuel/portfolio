import React from 'react';
import Link from 'next/link';
import { mail } from '../../../constants/navbar';

const MentionsLegalesPage = () => {
    return (
        <div className='w-full min-h-screen bg-background flex flex-col items-center py-12 px-4'>
            <h1 className='text-4xl font-bold mb-8'>Mentions Légales</h1>
            <div className='max-w-2xl w-full flex flex-col gap-6 text-base'>
                <section>
                    <h2 className='text-xl font-semibold mb-2'>Éditeur du site</h2>
                    <p><strong>Mathéo Lang</strong></p>
                    <p>Email : <Link className='text-blue-500 hover:underline' href={`mailto:${mail}`}>{mail}</Link></p>
                </section>
                <section>
                    <h2 className='text-xl font-semibold mb-2'>Hébergement</h2>
                    <p>Hébergeur : Vercel Inc.</p>
                    <p>San Francisco, CA, États-Unis</p>
                    <p>Site : <a href="https://vercel.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
                </section>
                <section>
                    <h2 className='text-xl font-semibold mb-2'>Propriété intellectuelle</h2>
                    <p>
                        Le contenu de ce site (textes, images, code, etc.) est protégé par le droit d’auteur. Toute reproduction ou utilisation sans autorisation est interdite.
                    </p>
                </section>
                <section>
                    <h2 className='text-xl font-semibold mb-2'>Données personnelles</h2>
                    <p>
                        Ce site ne collecte pas de données personnelles sans votre consentement. Pour toute question, contactez-nous à l’adresse indiquée ci-dessus.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MentionsLegalesPage;