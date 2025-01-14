import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Input = ({
    className,
    label,
    ...props
}: InputProps) => {
    return (
        <input
            className={`border border-border rounded p-2 w-full text-text ${className}`}
            {...props}
        />
    )
}

export default Input