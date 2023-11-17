import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User-centric interfaces for exceptional experiences</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive designs for diverse device compatibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive prototypes to validate ideas efficiently</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual branding to enhance brand identity consistently</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Seamless navigation for intuitive user journeys</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Microinteractions add engaging touches, delighting users</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive websites using HTML, CSS, and JavaScript</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive user interfaces for enhanced experiences</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API integration and third-party libraries for functionality</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimized performance through efficient code and images</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dynamic content with frameworks like React</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaborative team efforts for timely project delivery</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Captivating articles that engage and inform readers</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Eye-catching visuals to complement your brand's story</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Compelling social media posts for increased engagement</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>SEO-optimized content for higher search visibility</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Consistent and on-brand messaging across platforms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Engaging video scripts and storyboarding</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
