import { NextRouter } from "next/router"

export const handleClick = (href: string, index: number, router: NextRouter) => {
    if (index === 0) {
        router.push('/')
    } else {
        router.push(href)
    }
}