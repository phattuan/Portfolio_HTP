import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ComponentServicesItem = ({ title, icon, content }) => {

  return (
      <section
        className="component-services-item">
        <h1 className="title-service">
          {title}
        </h1>
        <div className={`${icon} icon`} ></div>
        <p className="content-item-service">
          {content}
        </p>
      </section>

  )
}

export default ComponentServicesItem