import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Alice Smith",
    review: "I am extremely satisfied with JC's web development services. His expertise in creating responsive and user-friendly websites is truly commendable. He transformed my ideas into a beautifully designed and functional website that perfectly represents my business."
  },
  {
    avatar: AVTR2,
    name: "Bob Johnson",
    review: "JC's UI/UX design skills are exceptional. He crafted a user-centric interface for my app that not only looks great but also provides an intuitive user experience. The interactive prototypes helped me visualize and validate my ideas efficiently, resulting in a more streamlined app development process."
  },
  {
    avatar: AVTR3,
    name:"Daniel Brown",
    review: "I'm beyond happy with JC's content creation services. He has a knack for producing engaging and relevant content that resonates with my target audience. From captivating blog posts to eye-catching social media graphics, his content has significantly enhanced my brand's online presence."
  },
  {
    avatar: AVTR4,
    name: "Emily Williams",
    review: "JC's attention to detail in content creation is truly remarkable. The way he handles every aspect of the content, from research to writing and editing, is impressive. The quality and consistency of his work have boosted my website's SEO and user engagement, contributing to my business's growth."
  }
];


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="my description" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
