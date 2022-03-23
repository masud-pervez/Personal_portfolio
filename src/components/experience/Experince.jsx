import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experince = () => {
  return (
    <section id="experince">
      <h5>What Skills I Have ?</h5>
      <h2>My Experince</h2>

      <div className="container experince_container">
        <div className="experince_frontend">
          <h3>Frontend Development</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experinced</small>
            </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>Bootsrap</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>TailWind</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>

{/* backend */}

        <div className="experince_backend">
          <h3>Backend Development</h3>
          <div className="experince_content">
            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>Node JS</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>PHP</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>MySQl</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>

            <article className="experince_details">
              <BsPatchCheckFill className="experince_icon"/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experince;
