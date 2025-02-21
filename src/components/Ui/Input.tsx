import React from 'react'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string
    placeholder: string
}

const Input = ({ ...props }: InputProps) => {
    return (
        <input
            className='outline-none transition-all duration-300 text-4xl font-semibold w-full bg-[#0f0f0f] p-8 rounded-xl'
            {...props}
        />
    )
}

export default Input