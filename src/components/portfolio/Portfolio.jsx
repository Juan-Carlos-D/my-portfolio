import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/iss.png";
import IMG2 from "../../assets/photographyport.png";
import IMG3 from "../../assets/eclipj2000_sky_map.png";
import IMG4 from "../../assets/unsplashapi.png";
import IMG5 from "../../assets/fitnesstracker.png";
import IMG6 from "../../assets/neuralnetwork.png";

//THIS IS TO MAP
const data = [
  {
    id: 1,
    image: IMG1,
    title: "International Space Station Tracker",
    github: "https://github.com/Juan-Carlos-D/iss-tracker",
    demo: "https://juan-carlos-d.github.io/iss-tracker/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Dynamic Photography Portfolio",
    github: "https://github.com/Juan-Carlos-D/photographyport?search=1",
    demo: "https://juan-carlos-d.github.io/photographyport/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Space Science Analysis",
    github:
      "https://github.com/Juan-Carlos-D/space-science",
    demo: "#"
  },
  {
    id: 4,
    image: IMG4,
    title: "Unsplash API Image Search App",
    github: "https://github.com/Juan-Carlos-D/unsplashapi?search=1",
    demo: "https://juan-carlos-d.github.io/unsplashapi/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Machine Learning Fitness Tracker",
    github: "https://github.com/Juan-Carlos-D/fitness-tracker",
    demo: "#"
  },
  {
    id: 6,
    image: IMG6,
    title: "Self-Driving Car Machine Learning",
    github: "https://github.com/Juan-Carlos-D/self-driving-car",
    demo: "https://juan-carlos-d.github.io/self-driving-car/"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
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

export default Portfolio;