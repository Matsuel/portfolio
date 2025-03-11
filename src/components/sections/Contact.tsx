import React from 'react'
import SectionLayout from '@/components/sections/layout'
import { useTranslations } from 'next-intl'
import ContactForm from '../Ui/ContactForm'

const Contact = () => {

    const t = useTranslations('Contact')

    return (
        <SectionLayout
            title={t('title')}
            subtitle={t('subtitle')}
            id='contact'
        >
            <ContactForm />
        </SectionLayout>
    )
}

export default Contact