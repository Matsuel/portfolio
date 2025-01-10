import React from 'react'
import SectionLayout from './SectionLayout'
import Title from '../Ui/Title'

const Parcours = () => {
    return (
        <SectionLayout title="Parcours" subtitle="Evolutions et étapes clés" id='parcours'>
            <div className='w-4/5 h-auto flex flex-row gap-4'>

                <div className='w-1/2 h-auto flex flex-col items-center gap-2'>
                    <Title>Professionnelles</Title>

                    {/* Faire barre sur le coté avec à chaque étape l'icone de l'école ou de l'entreprise */}
                </div>

                <div className='w-1/2 h-auto flex flex-col items-center gap-2'>
                    <Title>Scolaires</Title>

                    {/* Faire barre sur le coté avec à chaque étape l'icone de l'école ou de l'entreprise */}
                </div>

            </div>
        </SectionLayout>
    )
}

export default Parcours