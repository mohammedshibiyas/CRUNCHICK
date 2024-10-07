import React from 'react'
import './Footer.scss'
import XIcon from '@mui/icons-material/X';
import { Instagram } from '@mui/icons-material';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <div>
      <div className="footer-all">
        <div className="foot">
        <div class="footer">
      <div class="f-upper">
        <div class="f-address">
          <div className="crunchick-logo">
            <img src="./crunch white.png" alt="" />
          </div>
        </div>
        <div class="f-service">
          <div class="f-address">
            <h4>Services</h4>
            <div class="arrow"><a href="">Dining</a></div>
            <div class="arrow">  <a href="">Take away</a></div>
            <div class="arrow"><a href="">Delivery</a></div>
            <div class="arrow"><a href="">Zomato</a></div>
            <div class="arrow"><a href="">Swiggy</a></div>
        </div>
        </div>
        <div class="f-quicklines">
          <div class="f-address">
            <h4>Quick Links</h4>
            <div class="arrow"> <a href="">About Us</a></div>
            <div class="arrow"> <a href="">Contact Us</a></div>
            <div class="arrow"><a href="">Our Services</a></div>
            <div class="arrow"><a href="">Terms & Conditions</a></div>
            <div class="arrow"><a href="">Support</a></div>
        </div>
        </div>
        <div class="f-address">
          <h4>Address</h4>
          <div> <i class="fa fa-map-marker " aria-hidden="true"><a href="">Perinthalmanna,Kerala</a></i></div>
          <div>  <i class="fa fa-phone " aria-hidden="true"><a href="">7566576746</a></i></div>
          <div><i class="fa fa-envelope" aria-hidden="true"><a href="">crunchick@gmail.com</a></i></div>
          <div class="f-icons">
            <FacebookIcon className='tweet'/>
            <XIcon className='tweet'/>
            <Instagram className='tweet'/>
            <PinterestIcon className='tweet'/>
           
          </div>
        </div>
      </div>
      {/* <div className="crunchick-logo">
            <img src="./crunch white.png" alt="" />
          </div> */}
      <div class="f-lower"></div>
      <div class="container copy">
        <p>© Crunchick, All Right Reserved.</p>
        <p>Designed By Shibiyas</p>
      </div>

      </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
