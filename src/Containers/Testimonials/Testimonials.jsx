import React, { useEffect } from "react";
import "./style.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AOS from "aos";

// Import Swiper React components
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
SwiperCore.use([Autoplay]);

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const testimonialData = [
    {
      img: AVTR1,
      names: "Ernest Achiever",
      review: `I would like to thank all of the team for the hard work over the years, they have always responded quickly by solving any issue that our company have had. Such as implementing new projects, software, updates, quickly and effectively, and many other issues even general enquiries that we may have had..`,
    },
    {
      img: AVTR2,
      names: "Ernest Achiever",
      review: `Extremely helpful, user-friendly, innovative and reliable. Very satisfactory outcome, knowing that I can go back to them at any time for further help.`,
    },
    {
      img: AVTR3,
      names: "Ernest Achiever",
      review: `I wanted to thank the team at The Web  for all their help to design and build my website and to look after all the marketing. I have daily compliments about how nice it looks and how easy it is to use. I would recommend them to anyone wanting to have an online presence.`,
    },
  ];
  return (
    <section id="testmonials" data-aos="zoom-in">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {testimonialData.map(({ names, img, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={img} alt="Avatar one" />
            </div>
            <h5 className="client__name"> {names} </h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
