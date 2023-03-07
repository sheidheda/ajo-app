import React, { useEffect, useState } from 'react'
 
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'


function BetterDeal() {
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
    <div  ref={ref}>
<motion.div animate={animation}>
    
    <div className='EaseControl'>
      
        <div className="es1">
        <div className="weHandle1">
                <h1>Find a better card deal in few easy steps.</h1>
                <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                <button>Get Started</button>
            </div>
        </div>
      
      
        <div className="es2">
            <img src="/assets/card.png" alt="" className="bill" />
        </div>
       
        
    </div>
    </motion.div>
    </div>
  )
}

export default BetterDeal