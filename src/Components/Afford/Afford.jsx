import React, { useEffect } from 'react'
import './Afford.scss'
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import ChairIcon from '@mui/icons-material/Chair';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const Afford = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
  },[]);
  return (
    <div>
      <div className="afford-all">
        <div className=" row afford" >
            <div className="col-lg-4 col-sm-12 col-md-12 price">
            <div className="location-icon" data-aos='fade-up'>
         <MonetizationOnSharpIcon className='loc-icon'/>
         </div>  
            <div className="icon-label" data-aos='fade-up'>
            <h4>Reasonable</h4> 
            <h4>Prices</h4> 
              </div> 
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 price">
            <div className="location-icon" data-aos='fade-up'>
         <ChairIcon className='loc-icon'/>
         </div>  
         <div className="icon-label" data-aos='fade-up'>
            <h4>Cozy</h4> 
            <h4>Atmosphere</h4> 
              </div>   
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 price">
            <div className="location-icon" data-aos='fade-up'>
         <MilitaryTechIcon className='loc-icon'/>
         </div>  
         <div className="icon-label" data-aos='fade-up'>
            <h4>Good </h4> 
            <h4>Quality</h4> 
              </div>   
            </div>
        </div>
      </div>
    </div>
  )
}

export default Afford
