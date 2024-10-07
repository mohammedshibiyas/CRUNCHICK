import React, { useEffect } from 'react'
import './Contact.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CalendarMonth, CalendarViewDayRounded, LockClock, Timeline, WatchLater, YouTube } from '@mui/icons-material';

const Contact = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
  },[]);
  return (
    <div>
      <div className="contact-all" id='contact-id'>
      <div className="details">
        <div className="location" data-aos="fade-up" >
         <div className="location-icon">
         <LocationOnIcon className='loc-icon'/>
         </div>
         <div className="location-label">
          <h3>Find Us</h3>
          <p>Bypass Road <br />Perinthalmanna</p>
         </div>
        </div>
        <div className="location" data-aos="fade-up">
         <div className="location-icon">
         <WatchLater className='loc-icon'/>
         </div>
         <div className="location-label">
          <h3>Open Hours</h3>
          <p>All Day <br />11:00 AM-11:00 PM</p>
         </div>
        </div>
        <div className="location" data-aos="fade-up">
         <div className="location-icon">
         <CalendarMonth className='loc-icon'/>
         </div>
         <div className="location-label">
          <h3>Reservation</h3>
          <p>8658865709 <br />Crunchik@gmail.com</p>
         </div>
        </div>
        {/* <div className="time"></div>
        <div className="date"></div> */}
      </div>
      </div>
    </div>
  )
}

export default Contact
