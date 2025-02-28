import React from 'react'
import SectionLayout from './SectionLayout'
import { services } from '@/constantes/services'
import Service from '../Ui/Service'
import { useTranslations } from 'next-intl'

const Services = () => {

    const t = useTranslations('Services')

    return (
        <SectionLayout
            title={t('title')}
            subtitle={t('subtitle')}
            id='services'>
            <div className='w-[100%] flex flex-row flex-wrap gap-8'>
                {services.map((_, index) => (
                    <Service
                        expanded={index > 2}
                        index={index}
                        key={index}
                    />
                ))}
            </div>

        </SectionLayout>
    )
}

export default Services