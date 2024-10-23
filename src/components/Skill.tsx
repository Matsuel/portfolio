import React from 'react'

interface SkillProps {
    skillName: string
}

const Skill = ({
    skillName
}: SkillProps) => {
    return (
        <h4 className='flex items-center justify-center bg-backgroundinverted text-colorinverted px-2.5 py-0.5 rounded-md text-base font-semibold hover:bg-[#cacaca] transition-all duration-300'>
            {skillName}
        </h4>
    )
}

export default Skill