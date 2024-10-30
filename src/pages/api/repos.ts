import type { NextApiRequest, NextApiResponse } from 'next'
import { Repo } from '@/types'

type ResponseData = {
    repos: Repo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {


    const response = await fetch('https://api.github.com/users/Matsuel/repos', {
        method: 'GET',
        headers: {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
        }
    })

    const data: Repo[] = await response.json()
    const filteredData = data.filter(repo => repo.homepage?.length as number > 0)

    res.status(200).json({ repos: filteredData })

}