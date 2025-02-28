"use client";
import React from 'react'
import SectionLayout from './layout'
import Carousel from '../Ui/Carousel';
import { useTranslations } from 'next-intl';


const Projets = () => {

    const t = useTranslations('Projets')

    return (
        <SectionLayout
            title={t('title')}
            subtitle={t('subtitle')}
            id='projets'
        >
            <div className="w-full items-center flex flex-row">
                <div className="w-1/3 flex flex-col gap-8">
                    <h3 className="text-6xl font-extrabold text-coloreven uppercase">
                        {t('title2')}
                    </h3>

                    <p className="text-2xl font-semibold text-coloreven">
                        {t('subtitle2')}
                    </p>
                </div>

                <Carousel
                    autoplay
                    autoplayDelay={5000}
                    loop
                    pauseOnHover
                    baseWidth={700}
                />

            </div>
        </SectionLayout>
    )
}

export default Projets