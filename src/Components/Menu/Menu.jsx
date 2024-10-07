import React, { useEffect } from 'react'
import './Menu.scss'

const Menu = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    });
  },[]);
  return (
    <div>
      <div className="menu-all" id='menu-id'>
        <div className="menu-head" data-aos="fade-up" >
            <h6>FEATURED RECEPIES</h6>
            <h2>Signature Selections</h2>
        </div>
        <div className="menu-first" >
            <div className="fried">
        
  <div class="card" data-aos="fade-right">
  <img src="./fried-chicken-french-fries-white-plate.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Fried Chicken</h5>
    <p class="card-text">This dish has a crunchy and crispy texture on the outside, while the meat inside is tender and juicy.</p>
    <button>₹ 499</button>
  </div>
</div>
            </div>
            <div className="burger">
            <div class="card" data-aos="fade-up">
  <img src="./front-close-view-chicken-sandwich-with-green-salad-vegetables-inside-white-desk.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Burgers</h5>
    <p class="card-text">mix with cheese and meat. Salty and sweet, crunchy. Flavors and textures combine with each chew.</p>
    <button>₹ 99</button>
  </div>
</div>
            </div>
            <div className="pizza">
            <div class="card" data-aos="fade-left">
  <img src="./sandwich.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Club Sandwiches</h5>
    <p class="card-text">triple-decker sandwich made up of three slices toasted white bread, deli-sliced chicken  and mayonnaise..</p>
    <button>₹ 149</button>
  </div>
</div>
            </div>
        </div>
        <div className="menu-second">
        <div className="fried">
        
        <div class="card" data-aos="fade-right">
        <img src="./orange-juice.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Juices</h5>
          <p class="card-text">Pure, delicious and hydrating fruit juice recipes. it makes sense to juice the fruits at home.</p>
          <button>₹ 99</button>
        </div>
      </div>
                  </div>
                  <div className="burger">
                  <div class="card" data-aos="fade-up">
        <img src="./steamed-dumplings-isolated-white-background.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Momos</h5>
          <p class="card-text">A type of steamed or fried dumpling that can be described as a traditional food of the Himalayan belt.</p>
          <button>₹ 150</button>
        </div>
      </div>
                  </div>
                  <div className="pizza">
                  <div class="card" data-aos="fade-left">
        <img src="./side-view-delicious-pizza-with-tomatoes-greens-stained-white-surface.png" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Pizza</h5>
          <p class="card-text">An Italian dish that typically consists of a flattened bread dough disk topped with a variety of ingredients.</p>
          <button>₹ 349</button>
        </div>
      </div>
                  </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
