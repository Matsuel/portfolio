import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number
}

const Arrow = ({
    size,
    ...props
}: IconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M31.8779 19.4935C31.8779 19.1042 31.7146 18.7277 31.4257 18.4514L23.1766 10.2022C22.8502 9.88836 22.5112 9.75024 22.1596 9.75024C21.356 9.75024 20.7785 10.3152 20.7785 11.0812C20.7785 11.4829 20.9417 11.8219 21.1929 12.0731L24.0179 14.9358L27.659 18.2631L24.7462 18.0872H9.52848C8.68724 18.0872 8.10968 18.6648 8.10968 19.4935C8.10968 20.3097 8.68724 20.8872 9.52848 20.8872H24.7462L27.659 20.7114L24.0179 24.0387L21.1929 26.9015C20.9417 27.1525 20.7785 27.4915 20.7785 27.8934C20.7785 28.6592 21.356 29.2242 22.1596 29.2242C22.5112 29.2242 22.8502 29.0862 23.1516 28.7974L31.4257 20.5231C31.7146 20.247 31.8779 19.8702 31.8779 19.4935Z" fill="currentColor" />
        </svg>

    )
}

export default Arrow