import React from 'react';
import first from "../../img/first-slide.png";
import second from "../../img/second-slide.png";
import third from "../../img/third-slide.png";
import fourth from "../../img/fourth-slide.png";
import arrow from "../../img/Arrow 1.svg";
import "./slider.css";

function Slider() {
  return (
    <div className="slider">
        <div className="container grid">
            <div className="items">
                <div className="left-img">
                    <img className='l-img' src={first} alt="" />
                </div>
                <div className="right-img">
                    <div className="content">
                        <h2 className='feat-h2'>EXPLORE NOW</h2>
                        <h1 className='feat-h1 slid-h1'>Latest Women Clothing</h1>
                        <p className="para">Are u ready to rock this season with our new collection specially for you to shine in this holiday season.. <span>More</span></p>
                    </div>
                    <div className="img">
                        <img className='s-img' src={second} alt="" />
                        <img className='s-img' src={third} alt="" />
                        <img className='s-img' src={fourth} alt="" />
                    </div>
                    <div className="b-content">
                        <p className='fill'></p>
                        <h4 className='slid-h4'>Explore Clothes</h4>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slider;