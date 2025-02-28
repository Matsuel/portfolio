import React from 'react'
import Lang from '@/components/Lang/Lang'

const LangSelector = () => {
    return (
        <div className='h-8 fixed z-20 flex flex-row justify-center items-center gap-1 bg-background rounded-full px-2 top-8 right-24'>
            <Lang flagSrc='/fr.svg' lang='fr' />
            <Lang flagSrc='/en.svg' lang='en' />
            <Lang flagSrc='/eus.svg' lang='eus' />

        </div>
    )
}

export default LangSelector