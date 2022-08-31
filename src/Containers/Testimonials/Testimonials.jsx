import React from "react";
import "./style.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// Import Swiper React components
import SwiperCore, { Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
SwiperCore.use([Autoplay]);

const Testimonials = () => {
  const testimonialData = [
    {
      img: AVTR1,
      names: "Ernest Achiever",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed
              aspernatur perspiciatis ex sint officia ad, nulla vero, ab sit
              nostrum illo delectus eligendi, nisi nihil excepturi temporibus
              dolore doloribus.`,
    },
    {
      img: AVTR2,
      names: "Ernest Achiever",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed
              aspernatur perspiciatis ex sint officia ad, nulla vero, ab sit
              nostrum illo delectus eligendi, nisi nihil excepturi temporibus
              dolore doloribus.`,
    },
    {
      img: AVTR3,
      names: "Ernest Achiever",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed
              aspernatur perspiciatis ex sint officia ad, nulla vero, ab sit
              nostrum illo delectus eligendi, nisi nihil excepturi temporibus
              dolore doloribus.`,
    },
    {
      img: AVTR4,
      names: "Ernest Achiever",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed
              aspernatur perspiciatis ex sint officia ad, nulla vero, ab sit
              nostrum illo delectus eligendi, nisi nihil excepturi temporibus
              dolore doloribus.`,
    },
  ];
  return (
    <section id="testmonials">
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
