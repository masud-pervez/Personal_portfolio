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
                    <h4 className="text-light fs-5">Experience</h4>
                    <small className="fs-6">1+ year</small>
                  </article>
                </div>
                <div className="col-9 col-md-4 mt-3 mx-5 mx-md-0 mt-md-0 ">
                  <article className="about_card">
                    <FiUsers className="about_icon" />
                    <h4 className="text-light fs-5">Clients</h4>
                    <small className="fs-6">0+ worldwide</small>
                  </article>
                </div>
                <div className="col-9 col-md-4 mt-3 mx-5 mx-md-0 mt-md-0 ">
                  <article className="about_card">
                    <VscFolderLibrary className="about_icon" />
                    <h4 className="text-light fs-5">projects</h4>
                    <small className="fs-6">2+ completed</small>
                  </article>
                </div>
              </div>
            </div>
            <p className="my-3 fst-italic text-center fs-6">
              Looking to join a star life solution as a software engineer to
              offer web designing and design services to attract more customers.
              Desire a software engineer position in an organization where i
              have 1 year of experience in JavaScript,XML and coding.
            </p>
            <div className="text-center">
              <a href="#contact" className="btn btn-primary">
                let's Talk
              </a>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default About;
