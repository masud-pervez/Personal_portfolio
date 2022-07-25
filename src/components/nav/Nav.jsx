import React from "react";
import { Tooltip } from "antd";

import "./nav.css";
import { ImHome } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { RiServiceLine } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import { RiFingerprint2Line } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/");

  return (
    <nav>
      
      <Tooltip title="Home" color="geekblue" placement="top">
        <Link
          to='/'
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? "active" : ""}
        >
          <ImHome />
        </Link>
      </Tooltip>

      <Tooltip title="About" color="geekblue" placement="top">
        <Link
         to='/about'
          onClick={() => setActiveNav("/about")}
          className={activeNav === "/about" ? "active" : ""}
        >
          <AiOutlineUser />
        </Link>
      </Tooltip>

      <Tooltip title="Experince" color="geekblue" placement="top">
        <Link
          to='/experince'
          onClick={() => setActiveNav("/experince")}
          className={activeNav === "/experince" ? "active" : ""}
        >
          <ImBook />
        </Link>
      </Tooltip>

      <Tooltip title="Services" color="geekblue" placement="top">
        <Link
        to="/services"
        onClick={() => setActiveNav("/services")}
        className={activeNav === "/services" ? "active" : ""}
      >
        <RiServiceLine />
      </Link>
      </Tooltip>


      <Tooltip title="Portfolio" color="geekblue" placement="top">
      <Link
        to="/portfolio"
        onClick={() => setActiveNav("/portfolio")}
        className={activeNav === "/portfolio" ? "active" : ""}
      >
        <RiFingerprint2Line />
      </Link>
      </Tooltip>

      <Tooltip title="Contact" color="geekblue" placement="top">
      <Link
        to="contact"
        onClick={() => setActiveNav("/contact")}
        className={activeNav === "/contact" ? "active" : ""}
      >
        <SiGooglemessages />
      </Link>
      </Tooltip>

      
      

     
    </nav>
  );
};

export default Nav;
