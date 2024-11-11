import React from 'react'
import gallerypic from "../assets/galleryLogo.png"
import cls1 from "../assets/gallery/cls1.webp"
import cls2 from "../assets/gallery/cls2.webp"
import cls3 from "../assets/gallery/cls3.webp"
import cls4 from "../assets/gallery/cls4.webp"
import cls5 from "../assets/gallery/cls5.webp"
import cls6 from "../assets/gallery/cls6.webp"
import drive1 from "../assets/gallery/drive1.webp"
import drive2 from "../assets/gallery/drive2.webp"
import drive3 from "../assets/gallery/drive3.webp"
import drive4 from "../assets/gallery/drive4.webp"
import drive5 from "../assets/gallery/drive5.webp"
import drive6 from "../assets/gallery/drive6.webp"

const Gallery = () => {
  return (
    <div className="gallery-container">
      <img src={gallerypic} alt="" />
      <div className="classroom">
        <h1>Our Classrooms</h1>
        <div className="cls-img">
          <img src={cls1} alt="" />
          <img src={cls2} alt="" />
          <img src={cls3} alt="" />
          <img src={cls4} alt="" />
          <img src={cls5} alt="" />
          <img src={cls6} alt="" />
        </div>
      </div>
      <div className="drive">
        <h1>Placements Drives</h1>
        <div className="drive-img">
          <img src={drive1} alt="" />
          <img src={drive2} alt="" />
          <img src={drive3} alt="" />
          <img src={drive4} alt="" />
          <img src={drive5} alt="" />
          <img src={drive6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery