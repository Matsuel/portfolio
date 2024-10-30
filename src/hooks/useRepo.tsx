import { Repo } from '@/types'
import { useEffect, useState } from 'react'

const useRepo = () => {
    
    const [repos, setRepos] = useState<Repo[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchRepos = async () => {
        const response = await fetch('/api/repos')
        const data = await response.json()
        setRepos(data.repos)
        setLoading(false)
    }

    useEffect(() => {
        fetchRepos()
    }, [])

    return { repos, loading }
}

export default useRepo