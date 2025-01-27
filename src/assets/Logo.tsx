import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number
}

const Logo = ({
    className,
    size = 24,
    ...props
}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 48 48" className={className} {...props}>
            <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                d="M42.755 19.266a.965.965 0 0 0 .745-.934h-.004V9.685A.97.97 0 0 0 42.3 8.75l-13.896 3.296a2.4 2.4 0 0 1-1.294-.05l-6.273-2.039a2.4 2.4 0 0 0-1.298-.05L5.245 13.308a.96.96 0 0 0-.745.932v8.648a.973.973 0 0 0 1.202.934l13.763-3.295a2.4 2.4 0 0 1 1.298.05l6.273 2.038a2.43 2.43 0 0 0 1.294.05l14.425-3.402Zm0 15.425a.96.96 0 0 0 .745-.934h-.004V25.11a.97.97 0 0 0-1.197-.934L28.403 27.47a2.4 2.4 0 0 1-1.294-.05l-6.273-2.038a2.4 2.4 0 0 0-1.298-.05L5.245 28.733a.96.96 0 0 0-.745.934v8.648a.973.973 0 0 0 1.202.934l13.763-3.295a2.4 2.4 0 0 1 1.298.05l6.273 2.038a2.4 2.4 0 0 0 1.294.05Z" />
        </svg>
    )
}

export default Logo