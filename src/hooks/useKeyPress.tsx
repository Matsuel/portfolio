import KeysContext from '@/contexts/Keys'
import LoadingContext from '@/contexts/Loading'
import { useContext, useEffect } from 'react'

const useKeyPress = () => {
    const { keyPressed, setKeyPressed } = useContext(KeysContext)
    const { loading } = useContext(LoadingContext)

    useEffect(() => {
        if (loading) return
        const downHandler = (e: KeyboardEvent) => {
            setKeyPressed((prev) => {
                return [...prev, e.key]
            })
            console.log(e.key)
        }

        window.addEventListener('keydown', downHandler)

        return () => {
            window.removeEventListener('keydown', downHandler)

        }
    }, [keyPressed, setKeyPressed, loading])

    return { keyPressed }
}

export default useKeyPress