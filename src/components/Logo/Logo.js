import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'
const Logo = () => {
  return (
    <div className="ma4 mt0 flex">
      <Tilt>
        <div className="Tilt br2 shadow-2" >
          <div className="pa3">
            <img src={brain} alt='Brain Logo'/>
          </div>
        </div>
      </Tilt>
    </div>
    )

};

export default Logo;