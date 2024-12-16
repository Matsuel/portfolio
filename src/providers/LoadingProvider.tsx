import LoadingContext from '@/contexts/Loading';
import { ProviderProps } from '@/types'
import React, { useState } from 'react'

const LoadingProvider = ({
    children
}: ProviderProps) => {

    const [loading, setLoading] = useState<boolean>(true);

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider