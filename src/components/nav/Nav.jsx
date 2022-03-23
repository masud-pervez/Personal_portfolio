import React from "react";
import "./nav.css";
import { ImHome } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { ImBook } from "react-icons/im";
import { RiServiceLine } from "react-icons/ri";
import { SiGooglemessages } from "react-icons/si";
import { RiFingerprint2Line } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <ImHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experince"
        onClick={() => setActiveNav("#experince")}
        className={activeNav === "#experince" ? "active" : ""}
      >
        <ImBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiFingerprint2Line />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <SiGooglemessages />
      </a>

    </nav>
  );
};

export default Nav;
