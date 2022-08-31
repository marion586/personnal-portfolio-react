import React from "react";
import ButtonCustom from "../../Components/ButtonCustom";
import "./style.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const Portfolio = () => {
  const portfolioData = [
    {
      img: IMG1,
      title: "title1",
    },
    {
      img: IMG2,
      title: "title1",
    },
    {
      img: IMG3,
      title: "title1",
    },
    {
      img: IMG4,
      title: "title1",
    },
    {
      img: IMG5,
      title: "title1",
    },
    {
      img: IMG6,
      title: "title1",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recenet Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ img, title }, index) => (
          <article className="portfolio__item" key={index}>
            <figure className="portfolio__item-image">
              <img src={img} alt="" />
            </figure>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <ButtonCustom
                href="https://github.com/marion586/portfolio-project"
                className="btn"
                Text="Github"
              />
              <ButtonCustom
                href="https://dribbble.com/Alien_pixels"
                className="btn btn-primary"
                Text="Live Demo"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
