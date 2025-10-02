import React from 'react'
import SectionLayout from './SectionLayout'
import { FeatureSteps } from './Features'
import { projets } from '../../constants/projets'
import { NavbarLinkSection } from '../../constants/navbar'

const Projects = () => {

    return (
        <SectionLayout
            id={NavbarLinkSection.Projects}
        >
            <FeatureSteps
                features={projets}
            />
        </SectionLayout>
    )
}

export default Projects