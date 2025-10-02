import { NavbarLinkSection } from '../../constants/navbar';
import { parcours } from '../../constants/parcours';
import SectionLayout from './SectionLayout';
import { Timeline } from './Timeline';

const Parcours = () => {
    return (
        <SectionLayout
            id={NavbarLinkSection.Education}
            className='h-auto'
        >
            <Timeline items={parcours} />
        </SectionLayout>
    )
}


export default Parcours