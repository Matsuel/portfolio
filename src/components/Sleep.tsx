import React, { useEffect, useState } from 'react'

const Sleep = () => {

    const [hour, setHour] = useState("")

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const formattedHour = date.getHours() + ":" + date.getMinutes().toString().padStart(2, '0');
            setHour(formattedHour);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])


    return (
        <h3 className='fixed z-50 text-text text-[200px] font-black top-[50%] left-[50%] transform-gpu -translate-x-1/2 -translate-y-1/2'>
            {hour}
        </h3>
    )
}

export default Sleep