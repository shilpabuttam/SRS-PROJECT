import "../assets/css/home.css";
import slideimage from "../assets/images/leftimage.png";

import React, { useRef, useState } from "react";
import Homepageswiper from "./Homepageswiper";



export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-minicontainer">
          <div className="home-imagediv">
            <div className="home-miniimagediv">
              <img src={slideimage} alt="" />
            </div>
          </div>

          <div className="home-righttext">
            <p className="home-headingtag">Our Mission</p>
            <p className="home-paratag">
              Our mission is to connect businesses, foster collaboration, and
              drive growth through an innovative networking platform. We
              understand the power of strong connections and the impact they can
              have on your business's success. That's why we've developed a
              platform that brings together businesses of all sizes, industries,
              and backgrounds.
            </p>
            <button>contact us</button>
          </div>
        </div>
      </div>

   

   <Homepageswiper />
    </> 
  )
}
