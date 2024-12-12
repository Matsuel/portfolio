import LoadingContext from '@/contexts/Loading';
import { useContext, useEffect, useState } from 'react'

const useLoading = () => {

    const { setLoading } = useContext(LoadingContext)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

}

export default useLoading