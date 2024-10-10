import React,{ useEffect } from 'react'
import './Testimonial.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
    AOS.refresh();
  },[]);
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000,     // Time between slides (3 seconds)
    pauseOnHover: false,     // Prevent autoplay from stopping on hover
    pauseOnFocus: false,     // Prevent autoplay from stopping on focus
    dots: false,
    arrows: true,
    afterChange: () => AOS.refresh(),
    responsive: [
      {
          breakpoint: 1024, // Adjust these breakpoints as needed
          settings: {
              slidesToShow: 3, 
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1, // Change the number of slides to show on mobile devices
          }
      },
      {
          breakpoint: 576,
          settings: {
              slidesToShow: 1, // Change the number of slides to show on mobile devices
          }
      }
  ]
  };
  return (
    <div>
      <div className="testimonial" data-aos='fade-up'>
      <div className="slider-container">
        <div className="slider-head">
          <h6>FEEDBACK</h6>
          <h3>What Customer Says !</h3>
        </div>
        <Slider {...settings} className='card-slide'>
        <div className="card">
          <h3>Alan</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipi, et cum similique veniam deleniti?</p>
        </div>
        <div className="card">
          <h3>shamil</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipi, et cum similique veniam deleniti</p>
        </div>
        <div className="card">
          <h3>Hanna</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipi, et cum similique veniam deleniti</p>
        </div>
        <div className="card">
          <h3>Shinn</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipi, et cum similique veniam deleniti</p>
        </div>
        <div className="card">
          <h3>Achu</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipi, et cum similique veniam deleniti</p>
        </div>
      </Slider>
    </div>
      </div>
    </div>
  )
}

export default Testimonial
