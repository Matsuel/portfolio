import React from 'react'
import SectionLayout from './SectionLayout'
import { FeatureSteps } from './Features'
import { projets } from '../../constants/projets'

const Projects = () => {

    return (
        <SectionLayout
            id='projets'
        >
            <FeatureSteps
                features={projets}
            />
        </SectionLayout>
    )
}

export default Projects