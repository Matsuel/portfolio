import React from 'react'
import PartTitle from './PartTitle'

const HeroTitle = () => {
    return (
        <div className='absolute top-[50vh] transform -translate-y-1/2 w-auto h-auto flex flex-col items-end'>
            <PartTitle title='Matheo' className='px-16 rotate-[4deg]' />
            <PartTitle title='LANG' className='px-20 rotate-[-4deg]' />
        </div>
    )
}

export default HeroTitle