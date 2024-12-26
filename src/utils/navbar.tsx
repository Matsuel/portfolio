import Contact from "@/assets/Contact"
import Graduation from "@/assets/Graduation"
import Storage from "@/assets/Storage"
import User from "@/assets/User"


export const displayIcon = (section: string, size: number) => {
    switch (section) {
        case 'home':
            return <User size={size} />
        case 'contact':
            return <Contact size={size} />
        case 'projets':
            return <Storage size={size} />
        case 'education':
            return <Graduation size={size} />
        default:
            return <User size={size} />
    }
}