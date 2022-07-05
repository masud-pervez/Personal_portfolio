import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const header = () => {
  return (
    <header>
      <div className="container header_container mt-5">
        <div className="header_container">
          <h4 className="text-light">Hello I'm</h4>
          <h1>MASUD PERVEZ</h1>
          <h4 className="text-light">Fullstack Developer</h4>
          
          <CTA />
          <span className='d-none  d-md-block'>
          <HeaderSocial/>
          </span>

          <div className="me">
            <img className="me_image img-fluid" src={ME} alt="" />
          </div>
          <a href="#contact" className="scroll_down d-none d-md-block">
            Scroll Down
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;
