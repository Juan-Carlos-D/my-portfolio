import React from "react";
import "./about.css";
import ME from "../../assets/aboutthree.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>MS Computer Science</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>

          <p>
          Hello world! My name is Juan Carlos Dominguez, and I am a passionate learner and tech enthusiast currently enrolled at Southern Methodist University Lyle School of Engineering. I'm on an exciting journey pursuing a Master of Science in Computer Science with a specialized focus in Artificial Intelligence.
          </p>
          <p>
          As I continue my educational journey, I am eagerly seeking opportunities for internships to apply and expand my knowledge in practical settings. I aspire to contribute to cutting-edge projects, collaborate with talented teams, and further develop my expertise in computer science.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;