import React from 'react'
import Image from 'next/image';
import MouseIcon from '../Ui/MouseIcon';
import AnimatedTitle from '../Ui/AnimatedTitle';
import HeroButton1 from '../Ui/HeroButton1';
import { useTranslations } from 'next-intl';

const Hero = () => {

    const t = useTranslations('Hero');

    return (
        <section id='hero' className="w-full max-h-screen h-screen flex flex-col justify-start md:p-24 p-12 items-start relative overflow-hidden snap-start" >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                src="/Hero/bordeaux.jpg"
                alt="yacht"
                width={5235}
                height={1745}
            />

            <div className='2xl:w-1/3 lg:w-1/2 md:w-2/3 w-full z-30 h-auto flex flex-col items-start gap-12'>
                <AnimatedTitle title={t("title")} />

                <p className="w-full text-2xl text-white font-semibold">
                    {t("subtitle")}
                    <HeroButton1>
                        {t("cta")}
                    </HeroButton1>
                </p>
            </div>

            <div className='w-auto h-auto z-30 flex flex-col items-center gap-8 self-center absolute bottom-24'>
                <MouseIcon />
            </div>
        </section>
    )
}

export default Hero