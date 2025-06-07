import Github from "@/components/icons/Github"
import Instagram from "@/components/icons/Instagram"
import Linkedin from "@/components/icons/Linkedin"

export const SOCIALS = {
    GITHUB: 'https://www.github.com/Matsuel',
    LINKEDIN: 'https://www.linkedin.com/in/matheo-lang',
    INSTAGRAM: 'https://www.instagram.com/matheo_lang/'
}

export const SOCIALS_ICONS = {
    GITHUB: <Github size={24} />,
    LINKEDIN: <Linkedin size={24} />,
    INSTAGRAM: <Instagram size={24} />
}

export const socials = [
    {
        name: 'GitHub',
        link: SOCIALS.GITHUB,
        icon: SOCIALS_ICONS.GITHUB
    },
    {
        name: 'LinkedIn',
        link: SOCIALS.LINKEDIN,
        icon: SOCIALS_ICONS.LINKEDIN
    },
    {
        name: 'Instagram',
        link: SOCIALS.INSTAGRAM,
        icon: SOCIALS_ICONS.INSTAGRAM
    }
]