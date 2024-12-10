import { SectionContextType } from '@/types';
import { createContext } from 'react';

const SectionContext = createContext<SectionContextType>({} as SectionContextType);

export default SectionContext;