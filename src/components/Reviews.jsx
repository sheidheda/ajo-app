import React from 'react'
import './Reviews.css'


function Reviews() {
    return (
        <div className='reviews'>
            <div className="rev__gradient" />
            <div className="rv1">
                <h1>What people are saying about us</h1>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>

            <div className="rv2">
                <ul>
                    <li>
                        <div className='revCard'>
                            <h1 className='quote'>"</h1>
                            <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                            <div className="avatar">
                                <img src="/assets/people01.png" alt="" />
                                <div>
                                    <h3>Bilbo Baggings</h3>
                                    <p>Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='revCard'>
                            <h1 className='quote'>"</h1>
                            <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                            <div className="avatar">
                                <img src="/assets/people01.png" alt="" />
                                <div>
                                    <h3>Bilbo Baggings</h3>
                                    <p>Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='revCard'>
                            <h1 className='quote'>"</h1>
                            <p>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                            <div className="avatar">
                                <img src="/assets/people01.png" alt="" />
                                <div>
                                    <h3>Bilbo Baggings</h3>
                                    <p>Founder & Leader</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
 
            </div>
           
        </div>
    )
}

export default Reviews