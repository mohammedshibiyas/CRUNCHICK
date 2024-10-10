
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Contact from './Components/Contact us/Contact'
import Story from './Components/Story/Story'
import Menu from './Components/Menu/Menu'
import About from './Components/About/About'
import Afford from './Components/Afford/Afford'
// import Testimonial from './Components/Testimonial/Testimonial'
import Booking from './Components/Booking/Booking'
import Footer from './Components/Footer/Footer'
import Testimonial from './Testimonial/Testimonial'
import { useState } from 'react'
import Preloader from './Components/Preloader/Preloader'

function App() {

  const[loading,setLoading]=useState(true);
useState(()=>{
  const timer=setTimeout(() => {
    setLoading(false)
  }, 2000);
  return ()=> clearTimeout(timer)
})

  
  
  return (
   <>
   {loading ? (
      <Preloader/>
   ):(
    <>
    <Navbar/>
    <Banner/>
    <Contact/>
    <Story/>
    <Menu/>
    <About/>
    <Afford/>
    <Booking/>
    <Testimonial/>
    <Footer/>
   
    </>

   )}
   </>
  )
}

export default App
