import React, { useEffect, useState } from 'react';
import './Booking.scss';
import axios from 'axios';
import AOS from 'aos'; // Ensure you have AOS imported

const Booking = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    const [email, setEmail] = useState({
        name: '',
        message: "",
        email: '',
        date: '',
        mob_no: '',
        seat: ''
    });

    const sendMail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3008/booktable', email);
            alert('Email sent successfully');
            console.log(response.data);

            // Reset the form fields after successful submission
            setEmail({ name: '', message: '', email: '', date: '', mob_no: '', seat: '' });
        } catch (error) {
            console.error("Error sending email:", error); // Log the error message
            alert('Failed to send email. Please try again.'); // Provide user feedback
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="booking-all">
                <div className="booking-head" data-aos="fade-up" id='book-table'>
                    <h6>BOOK YOUR TABLE</h6>
                    <h2>Make a Reservation</h2>
                    <p>Reservations required for parties of 4 or more.</p>
                </div>
                <form onSubmit={sendMail}>
                    <div className="booking" data-aos="fade-up">
                        <div className="book-name">
                            <input type="text" placeholder='Your Name' name='name' value={email.name} onChange={handleChange} required />
                        </div>
                        <div className="book-contact">
                            <input type="number" placeholder='Mobile Number' name='mob_no' value={email.mob_no} onChange={handleChange} required />
                            <input type="email" placeholder='Email address' name='email' value={email.email} onChange={handleChange} required />
                        </div>
                        <div className="reserve">
                            <input type="date" placeholder='Date & Time' name='date' value={email.date} onChange={handleChange} required />
                            <input type="number" placeholder='Seats' value={email.seat} name='seat' onChange={handleChange} required />
                        </div>
                        <div className="msg">
                            <textarea name="message" placeholder='Message' value={email.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit">Book Your Table</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Booking;
