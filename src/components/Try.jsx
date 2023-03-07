
import React, { useEffect, useState } from 'react'
import './Try.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

function Try() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    console.log('use effect hook, inView =', inView);
    if (inView) {
      animation.start({
 
        opacity: 1, 
        scale: 1,
        transition: {
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01]
          },
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001
          }
         
        }
      });
    }
    if (!inView) {
      animation.start({ scale: 0.5, opacity: 0 })
    }

  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div animate={animation}>
        <div className="try">
          <div className="tt1">
            <h1>Let's try our service now!</h1>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
          </div>
          <button>Get Started</button>
        </div>
      </motion.div>
    </div>

  )
}

export default Try