import React, { useEffect } from 'react'
import './Story.scss'
import {  Instagram, YouTube } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Story = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
  },[]);
  return (
    <div>
      <div className="story-all">
      <div className="story">
          <div className="mini-head" data-aos="fade-up">
            <h6>OUR STORY</h6>
            <h2>The Crunchick Crispiness</h2>
          </div>
          <div className="story-para" data-aos="fade-up">
          <p>Journey with us from our inception to today as we revolutionize the way food is enjoyed <br /> on the go. Our passion for culinary excellence and commitment to quality have driven<br /> us to create a unique dining experience,  bringing gourmet flavors right to your doorstep.</p>
          </div>
          <div className="gallery">
            <div className="left-side">
            <img src="./66e162d17ee515828c70f086_Rectangle 33 (1).avif" class="img-fluid" alt="..." data-aos="flip-left"/>
           
           <div className="youtube">
              
                <YouTube className='yt-icon'/>
                <p>14K+</p>
                <h6>Subscribe</h6>
              
            </div>
           
            </div>
            <div className="middle">
            <img src="./66e162d27f2ed3582e4ae320_Rectangle 34 (1).avif" class="img-fluid" alt="..."  data-aos="zoom-in"/> 
            </div>
            <div className="right-side">
            <div className="instagram">
              <InstagramIcon className='insta-icon'/>
              <p>14K+</p>
              <h6>Follow</h6>
          </div>
              <img src="./public/66e162d212c98e24c888bb76_Frame 214.avif" class="img-fluid"  alt="" data-aos="flip-left"  />
            </div>
          </div>
          </div> 
      </div>
    </div>
  )
}

export default Story
