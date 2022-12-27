import React, { useEffect } from "react";
import ButtonCustom from "../../Components/ButtonCustom";
import "./style.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import AOS from "aos";
const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const portfolioData = [
    {
      img: IMG3,
      title: "Store management",
      demoLink: "https://marionmenye-react-phone-store-bykererion.netlify.app",
      gitLink: "https://github.com/marion586/react-phone-store",
    },
    {
      img: IMG1,
      title: "Invest",
      gitLink: "https://github.com/marion586/front-office-invest",
      demoLink: "#",
    },
    {
      img: IMG2,
      title: "Vanilla store management",
      gitLink: "https://github.com/marion586/all",
      demoLink: "https://marionmenye-javascritprojetby-kererion.netlify.app/",
    },

    {
      img: IMG4,
      title: "Apt social media",
      gitLink: "https://github.com/marion586/apt-web",
      demoLink: "#",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recenet Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ img, title, gitLink, demoLink }, index) => (
          <article className="portfolio__item" key={index} data-aos="zoom-in">
            <figure className="portfolio__item-image">
              <img src={img} alt="" />
            </figure>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <ButtonCustom
                href={gitLink}
                className="btn"
                Text="Github"
                isDisabled={true}
              />
              <ButtonCustom
                href={demoLink}
                className="btn btn-primary"
                Text="Live Demo"
                isDisabled={demoLink === "#" ? true : false}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
