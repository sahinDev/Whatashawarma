import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='logo' src={assets.logo} alt="" />
          {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}

        </div>
        <div className="footer-content-center">
          <h2>What A Shawarma</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 647 505 5561</li>
            <li>whatashawarma@gmail.com</li>  
            <li>664 Bloor Street West, Toronto, ON M6G 1L2</li>

          </ul>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/whatashawarma/" target="_blank" rel="noopener noreferrer"> <img src={assets.instagram_icon} alt="" /></a>
            {/* <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" /> */}
            {/* <a href="https://www.instagram.com/whatashawarma/" class="social-link" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a> */}
          </div>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Whatashawarma.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
