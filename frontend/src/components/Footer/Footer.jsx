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
        <div className="map-embed">
          <iframe 
           title= "Our Location"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2295254949054!2d-79.41874112346889!3d43.66419605171903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3529c25afc41%3A0xbcd6c05b48967eb!2sWhat%20A%20Shawarma!5e0!3m2!1sen!2sca!4v1769396799439!5m2!1sen!2sca"
           width="600" 
           height="450" 
           style={{
            border:0
           }} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"
           />
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
