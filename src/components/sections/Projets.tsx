"use client";
import React from 'react'
import SectionLayout from './SectionLayout'
import Carousel from '../Ui/Carousel';


const Projets = () => {

    return (
        <SectionLayout title="Projets" subtitle='Realisations Techniques' id='projets'>
            <div className="w-full min-h-screen items-center flex flex-row">
                <div className="w-1/3 flex flex-col gap-8">
                    <h3 className="text-6xl font-extrabold text-coloreven uppercase">
                        La puissance de la créativité
                    </h3>

                    <p className="text-2xl font-semibold text-coloreven">
                        Du site vitrine aux plateformes interactives, mes projets reflètent une approche tournée vers l&apos;utilisateur et l&apos;innovation. Chaque détail compte : une navigation intuitive, des designs percutants et des performances optimisées. Découvrez comment mes solutions transforment des idées en expériences digitales uniques.
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