import SectionContext from "@/contexts/Section";
import { ProviderProps } from "@/types";
import { useState } from "react";


const SectionProvider = ({
    children
}: ProviderProps) => {

    const [section, setSection] = useState<string>('');

    return (
        <SectionContext.Provider value={{ section, setSection }}>
            {children}
        </SectionContext.Provider>
    );
}

export default SectionProvider;