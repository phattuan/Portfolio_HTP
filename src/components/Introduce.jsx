import React from 'react'
import BorderTitle from './BorderTitle'
import {motion} from 'framer-motion'

const Introduce = () => {
    return (
        <div className="layout-introduce" id="introduce">
            {/* //=*=*=*=*= title =*=*=*=*= */}
            <BorderTitle title='introduce' icon='las la-home' />
            {/* //=*=*=*=*= content =*=*=*=*= */}
            <motion.div 
             initial= {{opacity:0, y:50}}
             whileInView={{opacity:1, y:0}}
             transition={{duration: .5, delay: 0.3}}
             
            className="content-introduce">
                <p className="content content-1">
                    Hello, i&apos;m <span className="text-strong">Ho Tuan Phat</span>
                </p>
                <p className="content content-2">My desire is to become a fullstack programmer</p>
            </motion.div>
        </div>
    )
}

export default Introduce