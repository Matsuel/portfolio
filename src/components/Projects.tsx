import React from 'react'
import SectionLayout from './SectionLayout'
import { FeatureSteps } from './Features'
import { features } from '../../constants/projets'

const Projects = () => {

    return (
        <SectionLayout>
            <FeatureSteps
                features={features}
            />
        </SectionLayout>
    )
}

export default Projects