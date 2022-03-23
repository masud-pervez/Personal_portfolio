import React from "react";
import "./About.css";
import About_me from "../../assets/about_me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={About_me} alt="about_image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h4>Experience</h4>
              <small>1+ year</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h4>Clients</h4>
              <small>0+ worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h4>projects</h4>
              <small>2+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            maiores autem consequatur commodi temporibus, provident expedita
            voluptate illo molestias voluptates quasi magni magnam, earum
            doloremque sequi quo laboriosam saepe sapiente.
          </p>
          <a href="#contact" className="btn btn-primary">let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
