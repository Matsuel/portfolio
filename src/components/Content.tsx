import React, { useContext } from 'react'
import Theme from "@/components/Theme";

const Content = () => {

    return (
        <div
            className={`w-full flex flex-col items-center justify-start p-8 pt-24 gap-20 transition-opacity duration-700 ease-in-out`}
        >
            <Theme />
        </div>
    )
}

export default Content