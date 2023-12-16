import React from 'react';
import img1 from "../../img/home-bg1.png";
import imgTop1 from "../../img/home-bgTop1.png";
import "./home.css";
import Feature from '../feature/Feature';
import Slider from '../slider/Slider';

function Home() {
  return (
    <>
      <div className="home">
        <div className="container grid">
          <img src={img1} alt="" />
          <div className="input-box">
            <input type="text" class="icon" placeholder='Search your favorite clothing' />
          </div>
          <div className="inner-img">
            <div className="text">
              <h1 className='head'>GET 30% OFF ON DENIM</h1>
              <h1 className='head'>GET 30% OFF ON DENIM</h1>
              <button type='button' className='home-button'>SHOP NOW
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                  <path d="M40 21C40 10.5063 31.4937 2 21 2C10.5063 2 2 10.5063 2 21C2 31.4937 10.5063 40 21 40C31.4937 40 40 31.4937 40 21Z" stroke="white" stroke-width="4" stroke-linejoin="round" />
                  <path d="M18.15 12.45L26.7 21L18.15 29.55" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </button>
            </div>
            <div className="i-img">
              <img src={imgTop1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Feature />
      <Slider />
    </>
  );
}

export default Home;
