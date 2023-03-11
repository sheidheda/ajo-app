import React, { useEffect, useState } from 'react'
import RoboHand from './RoboHand'
import './NextGen.css'
import { motion } from 'framer-motion'
 
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

function NextGen() {
    const {ref, inView} = useInView();
    const animation = useAnimation();
    const animation2 = useAnimation();
    
    useEffect(() => {
        console.log('use effect hook, inView =', inView);
        if(inView){
            animation.start({
                x:0,
                opacity:1,
                transition: {
                    type: 'spring', duration:2, bounce: 0.3
                }
            });
        }
        if(!inView){
            animation.start({x: '10vw', opacity:0})
        }
        if(inView){
            animation2.start({
                x:0,
                opacity:1,
                transition: {
                    type: 'spring', duration:2, bounce: 0.3
                }
            });
        }
        if(!inView){
            animation2.start({x: '-10vw', opacity:0})
        }
     
    }, [inView]);
    

    return (
     <div>
         <div ref={ref} className='nextGen'>
            
            <motion.div 
             
            animate={animation2}
             
            className="nxt__content">
             
                <img src="/assets/discount.png" className='discImg' alt="" />

                <div className="nxt__content1">

                    <h1>The Next <p className='text-gradient'>Generation</p>  Contribution Method.</h1>
                    <img src="/assets/gst.png" className='gst' alt="" />

                    <p className="nxt__content2">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                        We examine annual percentage rates, annual fees.</p>
                </div>
                
            </motion.div>
           
            <motion.div
             
            animate={animation}
         
            className="nxt___svg">
                <RoboHand />
            </motion.div>
        </div> 
        <div className="nxt__grad" />
     </div>
       
      
    )
}

export default NextGen