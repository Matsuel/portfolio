import Head from 'next/head'
import React from 'react'

interface TitleProps {
    title: string
}

const Title = ({
    title
}: TitleProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta charSet='utf-8' />
        </Head>
    )
}

export default Title