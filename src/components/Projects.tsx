import { NavbarLinkSection } from '../../constants/navbar'
import { projets } from '../../constants/projets'
import { FeatureSteps } from './Features'
import SectionLayout from './SectionLayout'

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