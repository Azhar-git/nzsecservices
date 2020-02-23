import React from 'react';
import { Fade } from 'react-slideshow-image';
import './slides.css';


const fadeProperties = {
  duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>

        <div className="each-fade">
          <div className="image-container">
            <img src={require("./img/building.jpg")} alt="NZ" />
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={require("./img/Service.png")} alt="NZ" />
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={require("./img/Industry.jpg")} alt="NZ" />
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={require("./img/cctv.jpg")} alt="NZ" />
          </div>
        </div>

        <div className="each-fade">
          <div className="image-container">
            <img src={require("./img/hospital.jpg")} alt="NZ" />
          </div>
        </div>

      </Fade>

    </div >
  );
}

export default Slideshow;