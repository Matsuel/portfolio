import KeysContext from '@/contexts/Keys'
import { ProviderProps } from '@/types'
import React, { useState } from 'react'

const KeysProvider = ({
    children
}: ProviderProps) => {

    const [keyPressed, setKeyPressed] = useState<string[]>([])

    return (
        <KeysContext.Provider value={{ keyPressed, setKeyPressed }}>
            {children}
        </KeysContext.Provider>
    )
}

export default KeysProvider