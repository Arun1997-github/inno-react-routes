import React from 'react'
import placementPic from "../assets/placementLogo.png"
import plc1 from "../assets/placements/plc1.webp"
import plc2 from "../assets/placements/plc2.webp"
import plc3 from "../assets/placements/plc3.webp"
import plc4 from "../assets/placements/plc4.webp"
import plc5 from "../assets/placements/plc5.webp"
import plc6 from "../assets/placements/plc6.webp"
import plc7 from "../assets/placements/plc7.webp"
import plc8 from "../assets/placements/plc8.webp"
import plc9 from "../assets/placements/plc9.webp"
import plc10 from "../assets/placements/plc10.webp"
import plc11 from "../assets/placements/plc11.webp"
import plc12 from "../assets/placements/plc12.webp"

const Placements = () => {
  return (
    <div className="placement-container">
      <img src={placementPic} alt="" />
      <div className="img-container">
        <img src={plc1} alt="" />
        <img src={plc2} alt="" />
        <img src={plc3} alt="" />
        <img src={plc4} alt="" />
        <img src={plc5} alt="" />
        <img src={plc6} alt="" />
        <img src={plc7} alt="" />
        <img src={plc8} alt="" />
        <img src={plc9} alt="" />
        <img src={plc10} alt="" />
        <img src={plc11} alt="" />
        <img src={plc12} alt="" />
      </div>
    </div>
  );
}

export default Placements