import React from 'react'
import Introduce from './Introduce'
import About from './About'
import Resume from './Resume'
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from 'framer-motion'
import Services from './Services'
import Skill from './Skill'

const LayoutMain = () => {
    
    return (
        <div className="layout-main ">
           
            {/* //=*=*=*=*= introduce =*=*=*=*= */}
            <Introduce />
            {/* //=*=*=*=*= about =*=*=*=*= */}
            <About />
            {/* //=*=*=*=*= resume =*=*=*=*= */}
            <Resume />
            {/* //=*=*=*=*= services =*=*=*=*= */}
            <Services />
            {/* //=*=*=*=*= skill =*=*=*=*= */}
            <Skill />
        </div>
    )
}

export default LayoutMain