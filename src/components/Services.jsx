/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react'
import BorderTitle from './BorderTitle'
import ComponentServicesItem from './ComponentServicesItem'
import { motion } from 'framer-motion'

import { useSelector, useDispatch } from "react-redux";
import { hiddenLog, showLog } from '../../redux/actions/action'
import { connect } from "react-redux"


const Services = () => {
    const dispatch = useDispatch();
    const abc = useSelector((state) => state.reducerTest.username)   
    console.log(abc);


    const container = {
        hidden: {
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2
            }
        }
    }
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return (
        <div className="services" id="services">
            <BorderTitle title='services' icon='las la-stream' />

            {/* //=*=*=*=*= component services item =*=*=*=*= */}
            <motion.div
                className="container-item-services"
                variants={container}
                initial="hidden"
                whileInView="visible"
            >

                {/* <motion.ul
                className='container-motion'
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                > */}
                <motion.div
                    // 
                    className='item-motion'
                    variants={item}
                >
                    <ComponentServicesItem
                        title='development' icon='las la-code' content='I build website by HTML SCSS/CSS JS, ReactJS, NextJS' />
                </motion.div>
                <motion.div
                    // 
                    className='item-motion'
                    variants={item}
                    
                    
                >

                    <ComponentServicesItem title='Design UX/UI' icon='las la-pen-alt' content='I created digital products with unique ideas use Figma & Adobe XD' />
                </motion.div>
                <motion.div
                    // 
                    className='item-motion'
                    variants={item}
                >

                    <ComponentServicesItem title='Edit' icon='las la-camera-retro' content='I edit photo/image by Adobe: Ps, Lr, Pr' />
                </motion.div>

                {/* </motion.ul> */}


            </motion.div>
        
        </div>
    )
}

export default Services

