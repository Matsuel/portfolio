import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

const Button = ({
    variant = 'primary',
    children,
    ...props
}: ButtonProps) => {

    const variants = {
        primary: "rounded-lg focus:outline-text bg-input border border-border focus:border-primary text-text",
        secondary: "bg-secondary text-text"
    }

    return (
        <button className={`px-4 py-2 rounded-md ${variants[variant]}`} {...props}>
            {children}
        </button>
    )
}

export default Button