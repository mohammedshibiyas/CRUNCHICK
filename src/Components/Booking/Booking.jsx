import React, { useEffect } from 'react'
import './Booking.scss'

const Booking = () => {
    useEffect(()=>{
        AOS.init({
          duration:1000,
          once:true
        });
      },[]);
  return (
    <div>
      <div className="booking-all">
        <div className="booking-head" data-aos="fade-up" id='book-table'>
            <h6>BOOK YOUR TABLE</h6>
            <h2>Make a Reservation</h2>
            <p>Reservations reqiuired for Parties of 4 or more.</p>
        </div>
        <div className="booking" data-aos="fade-up" >
            <div className="book-name">
                <input type="text" placeholder='Your Name' />
            </div>
            <div className="book-contact">
                <input type="text" placeholder='Mobile Number' />
                <input type="text" placeholder='Email address' />
            </div>
            <div className="reserve">
            <input type="text" placeholder='Date & Time' />
            <input type="text" placeholder='Seats' />
            </div>
            <div className="msg">
                <textarea name="" id="" placeholder='Message'></textarea>
            </div>
            <button>Book Your Table</button>

        </div>
      </div>
    </div>
  )
}

export default Booking
