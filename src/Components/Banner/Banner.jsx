import React, { useEffect } from 'react'
import './Banner.scss'
import { duration } from '@mui/material';

const Banner = () => {
  
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
  },[]);
  return (
    <div>
      <div className="banner-all">
      <div className=" banner">
        <div className="labels" data-aos="fade-up">
          <h1>Crunchick :</h1>
          <h1>Culinary Delights</h1>
          <h1>On Town !</h1>
          <div className="banner-btn">
           <a href="#book-table"> <button>Book Your Table</button></a>
          </div>
        </div>
        <div className=" banner-img" data-aos="zoom-out">
        <img src="./picture-chicken-wing-with-orange-sprinkles_794908-249.jpg" class="img-fluid" alt="..."/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Banner
