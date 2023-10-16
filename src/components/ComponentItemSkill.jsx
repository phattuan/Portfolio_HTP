/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {motion} from "framer-motion"

const ComponentItemSkill = ({ skillName, skillIcon, parametersSkill, itemMotion }) => {
    return (
        <div className="component-item-skill">
            <div className="outline-item-skill">
                <h1 className="skill-name">{skillName}</h1>
                <img src={skillIcon} className='skill-img' alt="skill icon img" />
                <p className="parameters-skill">{parametersSkill}</p>
            </div>
        </div>
    )
}

export default ComponentItemSkill