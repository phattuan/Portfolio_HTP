import React from 'react'
import BorderTitle from './BorderTitle'
import { motion } from 'framer-motion'

const Resume = () => {
    const variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2
            }
        },

    }
    const item = {
        hidden: { x: 20, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    }
    return (
        <div className="layout-resume" id="resume">
            {/* //=*=*=*=*= title =*=*=*=*= */}
            <BorderTitle title='resume' icon='las la-briefcase' />
            {/* //=*=*=*=*= content =*=*=*=*= */}
            <div className="content-resume">
                {/* //=*=*=*=*= title content =*=*=*=*= */}
                <h1 className="content-title"
                >Education & Experience</h1>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    className="education education-exp">
                    <motion.span
                        variants={item}
                        className="point-note">
                        Education: 2019-2023
                    </motion.span>
                    <motion.ul
                        variants={variants}
                        className="list-item">
                        <motion.li
                            variants={item}
                            className="item">Studied at Academy of Cryptography Techniques</motion.li>
                        <motion.li
                            variants={item}
                            className="item">
                            Self-taught programming on forums and all platforms: youtube, google, books,...
                        </motion.li>
                        <motion.li
                            variants={item}
                            className="item">
                            Study the code on github
                        </motion.li>
                    </motion.ul>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    className="experience education-exp">
                    <motion.span
                        variants={item}
                        className="point-note">
                        Experience: 2019-2023
                    </motion.span>
                    <motion.ul
                        variants={variants}

                        className="list-item">
                        <motion.li variants={item} className="item">Internship for 2 months at HPT company</motion.li>
                        <motion.li variants={item} className="item">
                            Get Frontend code in some external projects
                        </motion.li>
                        <motion.li variants={item} className="item">
                            Practice frontend and backend code by yourself at home
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>
        </div>
    )
}

export default Resume