import React from 'react'

const Hero = () => {
    // TODO: Ajouter un délai de lecture pour la vidéo

    return (
        <section id='home' className='w-full h-auto flex flex-col gap-8 p-8 mt-8 justify-start items-start relative'>
            <p className='w-[30%] text-4xl font-bold text-text z-10'>
                Développeur web <span className='text-secondary'>spécialisé dans la création de </span> solutions simples <span className='text-secondary'>mais</span> efficaces, <span className='text-secondary'>avec une approche qui </span> redéfinit les standards du design
            </p>

            <div className='w-auto h-auto flex flex-col gap-0 z-10'>
                <h1 className='text-[200px] leading-none font-extrabold text-text uppercase'>Matheo</h1>
                <div className='w-auto h-auto flex flex-row gap-4'>
                    <h1 className='text-[200px] leading-none font-extrabold text-text uppercase'>Lang</h1>
                </div>
            </div>

            <div className='w-[65%] h-auto absolute top-[50%] right-0 transform -translate-y-1/2 rounded-full'>
                <video autoPlay muted playsInline>
                    <source src='/herovideo.mp4' type='video/mp4' />
                </video>
            </div>
        </section>
    )
}

export default Hero