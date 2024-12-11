import { useEffect, useState } from 'react'

const useLoading = () => {

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return { loading }
}

export default useLoading