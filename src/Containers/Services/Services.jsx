import React, { useEffect } from "react";
import "./style.css";
import { BiCheck } from "react-icons/bi";
import AOS from "aos";
const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const backend = [
    {
      item: "Database design and management.",
    },
    {
      item: "Server-side scripting.",
    },
    {
      item: "API development.",
    },
    {
      item: "Server configuration and deployment.",
    },
    {
      item: "Security.",
    },
    {
      item: "Performance optimization.",
    },
    {
      item: "Maintenance and support.",
    },
    {
      item: "Integration with third-party systems.",
    },
  ];

  const frontend = [
    {
      item: "Design and layout with the designer",
    },
    {
      item: "HTML, CSS, and JavaScript development.",
    },
    {
      item: "Responsive design.",
    },
    {
      item: "Performance optimization.",
    },
    {
      item: "Accessibility",
    },
    {
      item: "Testing and debugging Application.",
    },
  ];
  const contentCreation = [
    {
      item: "Writing and editing.",
    },
    {
      item: "Graphic design.",
    },
    {
      item: "Video production.",
    },
    {
      item: "Audio production.",
    },
    {
      item: "Photography.",
    },
    {
      item: "Search engine optimization (SEO).",
    },
    {
      item: "Social media management.",
    },
  ];
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>services</h2>

      <div className="container services__container">
        <article className="service" data-aos="zoom-in">
          <div className="service__head">
            <h3>Back-end Developpement</h3>
          </div>

          <ul className="service__list">
            {backend.map((item, index) => (
              <li key={index}>
                <BiCheck className="service__list-icon" />
                <p>{item.item}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service" data-aos="zoom-in">
          <div className="service__head">
            <h3>Front-end Developpement</h3>
          </div>

          <ul className="service__list">
            {frontend.map((item, index) => (
              <li key={index}>
                <BiCheck className="service__list-icon" />
                <p>{item.item}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service" data-aos="zoom-in">
          <div className="service__head">
            <h3>Content Création</h3>
          </div>

          <ul className="service__list">
            {contentCreation.map((item, index) => (
              <li key={index}>
                <BiCheck className="service__list-icon" />
                <p>{item.item}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
