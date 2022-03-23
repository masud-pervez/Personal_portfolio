import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: Img1,
    title: "Crypto Currency Dashboard & financial Visualization",
    github: "https://github.com/masudpervez05",
    demo: "#",
  },
  {
    id: 2,
    image: Img2,
    title: "Charts template & infographics in figma",
    github: "https://github.com/masudpervez05",
    demo: "#",
  },
  {
    id: 3,
    image: Img3,
    title: "Figma Dashboard UI kit for data desgin web app",
    github: "https://github.com/masudpervez05",
    demo: "#",
  },
  {
    id: 4,
    image: Img4,
    title: "Maintaing tasks and tracking progress",
    github: "https://github.com/masudpervez05",
    demo: "#",
  },
  {
    id: 5,
    image: Img5,
    title: "Charts template & infographics in figma",
    github: "https://github.com/masudpervez05",
    demo: "#",
  },
  {
    id: 6,
    image: Img6,
    title: "Charts template & infographics in figma",
    github: "https://github.com/masudpervez05",
    demo: "#",
  }
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>portfolio</h2>
      <div className="container portdolio_container">
        {data.map((item) => {
          const { id, image, title, github,demo } = item;
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item_image">
                <img src={image} alt="portfolio1" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
