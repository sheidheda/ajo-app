import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <div className='Footer'>
        <div className="foot1">
            <div className="ff1">
                <img src="/assets/ajoLogo.png" alt="" />
                <p>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className="ff2">
                <h2>Useful links</h2>
                <ul>
                    <li>Content</li>
                    <li>How it Works</li>
                    <li>Create</li>
                    <li>Explore</li>
                    <li>Terms & Services</li>
                </ul>
            </div>
            <div className="ff3">
            <h2>Community</h2>
                <ul>
                    <li>Help Center</li>
                    <li>Partners</li>
                    <li>Suggestions</li>
                    <li>Blog</li>
                    <li>Newsletters</li>
                </ul>
            </div>
            <div className="ff4">  <h2>Partner</h2>
                <ul>
                    <li>Our Partners</li>
                    <li>Become a Partner</li>
                </ul>
            </div>
        </div>
        <hr className="line" />
        <div className="foot2">
            <div className="fs1">
                <p>Copyright  © 2023 Faithful Ajah. All Rights Reserved.</p>
            </div>
            <div className="fs2">
                <ul>
                    <li><InstagramIcon /> </li>
                    <li><FacebookIcon /></li>
                    <li>
                        <TwitterIcon />
                    </li>
                    <li><LinkedInIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer