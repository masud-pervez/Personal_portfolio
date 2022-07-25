import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/pointofsale.jpg";
import Img2 from "../../assets/portfolio6.jpg";
import Img3 from "../../assets/todoapp.jpg";
import { Link, Outlet } from "react-router-dom";

const data = [
  {
    id: 1,
    image: Img1,
    title: "POS ~ Point Of Sale",
    github: "https://github.com/masudpervez05",
    demo: "/portfolio/pos",
  },
  {
    id: 2,
    image: Img2,
    title: "Counter App",
    github: "https://github.com/masudpervez05",
    demo: "/portfolio/Counters",
  },
  {
    id: 3,
    image: Img3,
    title: "TodoApp",
    github: "https://github.com/masudpervez05",
    demo: "/portfolio/todoapp",
  }
];

const portfolio = () => {
  return (
    <section id="portfolio" className="my-5">
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
              <h3 className="text-light fs-5" >{title}</h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  target="blank"
                  className="btn btn-outline-light"
                >
                  Github
                </a>
                <Link
                  to={demo}
                  target="blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </Link>
              </div>
            </article>
          );
        })}
        {Outlet}
      </div>
    </section>
  );
};

export default portfolio;
