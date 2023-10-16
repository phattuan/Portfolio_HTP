import React from 'react'
import { motion, useScroll } from "framer-motion"

const BorderTitle = ({ title, icon }) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div 
    initial= {{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: .5}}
    
    className='border-title'>
      <i className={icon}></i>
      <span>{title}</span>
    </motion.div>
  )
}

export default BorderTitle