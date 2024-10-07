import React, { useEffect } from 'react'
import './About.scss'

const About = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
  },[]);
  return (
    <div>
      <div className="about-all">
        <div className="about">
          <div className="about-head" data-aos="fade-up" id='about-id'>
            <h6>ABOUT US</h6>
            <h2>VOICES OF FLAVOUR</h2>
          </div>
          <div className="about-main">
            <div className="about-img" data-aos="zoom-out">
              <img src="./fried smoke.avif" class="img-fluid" alt="" />
             
            </div>
            <div className="about-para " data-aos="fade-up">
              <h4>" Crunchick brings a fresh twist to delicious food! Their gourmet dishes are not just mouthwatering but also visually stunning. The food truck offers the perfect blend of convenience and luxury. Their truffle mac & cheese is absolutely irresistible.I keep coming back for more! "</h4>

              <div className="quote-name" data-aos="fade-up">
                <h3>Aguro Martinez</h3>
                <h6>New York,USA</h6>
              </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
