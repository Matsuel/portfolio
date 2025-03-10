import React from 'react'
import SectionLayout from '@/components/sections/layout'
import Input from '../Ui/Input'
import Button from '../Ui/Button'
import { useTranslations } from 'next-intl'

const Contact = () => {

    const t = useTranslations('Contact')

    return (
        <SectionLayout
            title={t('title')}
            subtitle={t('subtitle')}
            id='contact'
        >
            <div className='w-full flex flex-col gap-8 items-center'>
                <div className='w-full h-auto flex flex-row gap-4 items-center'>
                    <Input
                        type='text'
                        placeholder={t('form.name')}
                    />
                    <Input
                        type='text'
                        placeholder={t('form.firstname')}
                    />
                </div>
                <Input
                    type='email'
                    placeholder={t('form.email')}
                />
                <textarea
                    className='outline-none transition-all duration-300 text-2xl font-semibold w-full bg-[#0f0f0f] p-8 rounded-xl h-52'
                    placeholder={t('form.message')}
                ></textarea>
                <Button variant='primary'>
                    {t('form.submit')}
                </Button>
            </div>
        </SectionLayout>
    )
}

export default Contact