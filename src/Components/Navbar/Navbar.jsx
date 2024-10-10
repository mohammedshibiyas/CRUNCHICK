import React, { useEffect } from 'react'
import './Navbar.scss'

const Navbar = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      <div className="nav-all" data-aos='fade-down'>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid logo">

            <img src="./Crunchick_Logo-removebg-preview.png" alt="" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse naav" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#menu-id">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#about-id">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#contact-id">Contact us</a>
                </li>

              </ul>

            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
