import { parcours } from '../../constants/parcours';
import SectionLayout from './SectionLayout';
import { Timeline } from './Timeline';

const Parcours = () => {
    return (
        <SectionLayout
            id='parcours'
            // title='01 - Parcours'
            className='h-auto'
        >
            <Timeline items={parcours} />
        </SectionLayout>
    )
}


export default Parcours