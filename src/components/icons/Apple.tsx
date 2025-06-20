import { IconProps } from '@/types'
import React from 'react'

const Apple = ({
    size = 24,
    color = 'currentColor',
}: IconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 1000 1000" width={size} height={size} fill={color}>
            <title>iOS</title>
            <path d="M772.2,531.3c0-84.8,45.3-157.3,109.6-187.8c-17.9-23.4-41.9-45.4-74.2-68.4c-41.8-29.8-134.4-33.2-195.1-17.7c-46.1,11.7-85.4,34.3-106.4,35.3c-19,1-59.8-24.4-106.4-35.3c-56.2-13.2-117.5-5.8-159.6,17.7C117.7,343.5,98.1,413.4,98.1,557.8c0,166.4,60.3,307.5,195.1,406.5C322.8,986,376,998.8,417.4,982c35.6-14.5,54.6-32.2,88.7-35.3c49.8-4.5,73,12.2,97,27.1c21.8,13.5,72.1,24.4,98.1,8.3c91.1-56.4,162.8-148.6,200.7-255C827.1,703.1,772.2,624.6,772.2,531.3z M665.7,151.4C701.9,94.6,702,9.7,701.2,10c-15,5-65.6-6.8-141.9,53c-26.6,20.9-59.3,72.3-71,106c-8.9,25.6-17.6,88.3-17.8,88.4c-0.9,0.1,58.5-3.2,88.7-17.7C590.2,224.9,642.3,188.2,665.7,151.4z">
            </path>
        </svg>
    )
}

export default Apple