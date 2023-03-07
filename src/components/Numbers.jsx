import React, { useState } from 'react'
import './Numbers.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
function Numbers() {
    const [counterOn, setCounterOn] = useState(false
    )

    return (
        <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div className='Numbers'>
                <ul>
                    <li>
                        <h1>{counterOn && <CountUp
                            start={0}
                            end={3200}
                            duration={1}
                            delay={0}
                        />}+ <span className='text-gradient numSpan'>USERS ACTIVE</span></h1>
                    </li>
                    <div className="vl"></div>
                    <li>
                    
                        <h1>{counterOn && <CountUp
                            start={0}
                            end={200}
                            duration={1}
                            delay={0}
                        />}+ <span className='text-gradient numSpan'>TRUSTED BY COMPANY</span></h1>
                    </li>
                    <div className="vl"></div>
                    <li>
                   
                        <h1>$ {counterOn && <CountUp
                            start={0}
                            end={230}
                            duration={1}
                            delay={0}
                        />}M+ <span className='text-gradient numSpan'>TRANSACTIONS</span></h1>
                    </li>

                </ul>
            </div>
        </ScrollTrigger>

    )
}

export default Numbers