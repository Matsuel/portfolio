import MouseContext from '@/contexts/Mouse'
import { ProviderProps } from '@/types'
import React, { useState } from 'react'

const MouseProvider = ({
    children
}: ProviderProps) => {

    const [isMouseMove, setIsMouseMove] = useState<boolean>(true);
    const [isMouseLeave, setIsMouseLeave] = useState<boolean>(false);

    return (
        <MouseContext.Provider value={{ isMouseMove, setIsMouseMove, isMouseLeave, setIsMouseLeave }}>
            {children}
        </MouseContext.Provider>
    )
}

export default MouseProvider