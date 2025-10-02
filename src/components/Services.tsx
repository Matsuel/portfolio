import BentoGrid from "@/components/bento/BentoGrid";
import { NavbarLinkSection } from '../../constants/navbar';
import { services } from '../../constants/services';
import SectionLayout from './SectionLayout';

const Services = () => {
    return (
        <SectionLayout
            id={NavbarLinkSection.Services}
            className='h-auto flex flex-col items-center justify-center'
        >
            <BentoGrid items={services} />

        </SectionLayout>
    )
}

export default Services