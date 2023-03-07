import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import NextGen from './components/NextGen'
import Numbers from './components/Numbers'
import WeHandle from './components/WeHandle'
import EaseControl from './components/EaseControl'
import BetterDeal from './components/BetterDeal'
import Reviews from './components/Reviews'
import Collaborations from './components/Collaborations'
import Try from './components/Try'
import Footer from './components/Footer'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'



const App = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();
   
  
  useEffect(() => {
      console.log('use effect hook, inView =', inView);
      if(inView){
          animation.start({
              y:0,
              opacity:1,
              transition: {
                  type: 'spring', duration:2, bounce: 0.2
              }
          });
      }
      if(!inView){
          animation.start({y: '10vh', opacity:0})
      }
   
  }, [inView]);
  return (
    <div className='app'>
      <Navbar />
      <NextGen />
      <Numbers />
      <div ref={ref}>
        <motion.div animate={animation} >
           <WeHandle />
        </motion.div>
      </div>
     
      <EaseControl />
      <BetterDeal />
      <Reviews />
      <Collaborations />
      <Try />
      <Footer />
    </div>
  )
}

export default App