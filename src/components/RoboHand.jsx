import React from 'react'
import animRobo from "/assets/animRobo.svg"
import './Robohand.css'


function RoboHand() {
  return (
    <div className='roboHand'>
       
        
        <div className="r1">
            <img className='roboBg' src="/assets/roboBg1.png" alt="" />
        </div>
        <div className="r2">
            <object type="image/svg+xml" data={animRobo} className="animRobo"></object>
        </div>
        <div className="robo__grad" />
        <div className="robo__grad2" />
    </div>
  )
}

export default RoboHand