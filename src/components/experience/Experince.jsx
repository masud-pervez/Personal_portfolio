import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import "aos";

const experince = () => {
  return (
    <section id="experince">
      <h5>What Skills I Have ?</h5>
      <h2>My Experince</h2>

      <div className="container experince_container">
        <div className="experince_frontend" data-aos={"fade-up"}>
          <h3>Frontend Development</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
                <h4 className="text-light">HTML</h4>
                <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
            <div>
              <h4 className="text-light">CSS</h4>
              <small className="text-muted fs-6">Experinced</small>
            </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">JavaScript</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">Bootsrap</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">TailWind</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">React</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experince_backend">
          <h3>Backend Development</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">Node JS</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">MongoDB</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">PHP</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">MySQl</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4 className="text-light">Python</h4>
              <small className="text-muted fs-6">Experinced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  );
};

export default experince;