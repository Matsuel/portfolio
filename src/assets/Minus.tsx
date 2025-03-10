import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number
}

const Minus = ({
    className,
    size = 28,
    ...props
}: IconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 50 50" fill="none" className={className} {...props}>
            <path d="M24.9844 40.611C33.8833 40.611 41.2284 33.2659 41.2284 24.3827C41.2284 15.4994 33.8676 8.1543 24.9687 8.1543C16.0854 8.1543 8.75598 15.4994 8.75598 24.3827C8.75598 33.2659 16.1011 40.611 24.9844 40.611ZM18.8163 25.9521C17.8275 25.9521 17.1213 25.3714 17.1213 24.4141C17.1213 23.4567 17.7962 22.8446 18.8163 22.8446H31.1524C32.1726 22.8446 32.8317 23.4567 32.8317 24.4141C32.8317 25.3714 32.1412 25.9521 31.1524 25.9521H18.8163Z" fill="currentColor" />
        </svg>
    )
}

export default Minus