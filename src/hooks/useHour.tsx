import { useEffect, useState } from 'react'

const useHour = () => {
    const [hour, setHour] = useState("")

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const formattedHour = date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') + ":" + date.getSeconds().toString().padStart(2, '0');
            setHour(formattedHour);
        }, 500);

        return () => clearInterval(intervalId);
    }, [])

    return { hour }
}

export default useHour