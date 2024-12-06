import Github from '@/assets/Github'
import Linkedin from '@/assets/Linkedin'
import { github, linkedin } from '@/constantes/socialLinks'
import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <div className='w-auto h-auto flex flex-row items-center justify-center fixed top-8 z-50 self-end p-1 gap-4'>
        <Link href={linkedin}>
            <Linkedin size={28} />
        </Link>
        <Link href={github}>
            <Github size={22} className='text-text' />
        </Link>
    </div>
  )
}

export default Links