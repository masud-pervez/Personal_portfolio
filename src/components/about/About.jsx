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
        <div className="row justify-content-between">

          <div className="col-12 col-md-6 m-5 m-md-0">
            <div className="about_me ">
              <div className="about_me-image">
                <img src={About_me} alt="about_image" className="img-fluid" />
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            {/* <div className="about_content"> */}
            <div className="about_cards">
              <div className="row">
                <div className="col-9  col-md-4 mt-3 mx-5 mx-md-0 mt-md-0 ">
                  <article className="about_card">
                    <FaAward className="about_icon" />
                    <h4>Experience</h4>
                    <small>1+ year</small>
                  </article>
                </div>
                <div className="col-9 col-md-4 mt-3 mx-5 mx-md-0 mt-md-0 ">
                  <article className="about_card">
                    <FiUsers className="about_icon" />
                    <h4>Clients</h4>
                    <small>0+ worldwide</small>
                  </article>
                </div>
                <div className="col-9 col-md-4 mt-3 mx-5 mx-md-0 mt-md-0 ">
                  <article className="about_card">
                    <VscFolderLibrary className="about_icon" />
                    <h4>projects</h4>
                    <small>2+ completed</small>
                  </article>
                </div>
              </div>





            </div>
            <p className="mt-3 fst-italic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              maiores autem consequatur commodi temporibus, provident expedita
              voluptate illo molestias voluptates quasi magni magnam, earum
              doloremque sequi quo laboriosam saepe sapiente.
            </p>
            <div className="text-center">
              <a href="#contact" className="btn btn-primary">let's Talk</a>
            </div>
          </div>
        </div>
        {/* </div> */}


      </div>
    </section >
  );
};

export default About;
