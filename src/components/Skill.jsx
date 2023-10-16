import React, { useState } from 'react'
import ComponentItemSkill from './ComponentItemSkill'
import BorderTitle from './BorderTitle'
import { motion } from 'framer-motion'

const Skill = () => {
    const [skillValue, setSkillValue] = useState(
        [
            {
                skillName: 'React JS',
                icon: 'images/atomic.png',
                paramsSkill: '80%'
            },
            {
                skillName: 'Next JS',
                icon: 'images/framework.png',
                paramsSkill: '60%'
            },
            {
                skillName: 'HTML/CSS/JS',
                icon: 'images/coding.png',
                paramsSkill: '90%'
            },
            {
                skillName: 'Node JS',
                icon: 'images/nodejs.png',
                paramsSkill: '50%'
            },
            {
                skillName: 'Adobe',
                icon: 'images/adobe.png',
                paramsSkill: '70%'
            },
            {
                skillName: 'Figma',
                icon: 'images/figma.png',
                paramsSkill: '80%'
            },


        ])
    const animate = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.3

            }
        },
    }
    const itemChildren = {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    return (
        <div className="layout-skill">
            <BorderTitle title="skill" icon="las la-shapes" />
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={animate}
                className="container-skill">

                {skillValue.map((item, index) => {
                    return (
                        <motion.div className='item-motion' key={index} variants={itemChildren}>
                        <ComponentItemSkill
                            key={index}
                            skillName={item.skillName} skillIcon={item.icon} parametersSkill={item.paramsSkill}
                            itemMotion={itemChildren}

                        />
                        </motion.div> 
                    )
                })}
            </motion.div>

        </div>
    )
}

export default Skill