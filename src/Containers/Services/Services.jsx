import React from "react";
import "./style.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  const uiDesign = [
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];

  const webDevelloppement = [
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];
  const contentCreation = [
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
    {
      item: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ];
  return (
    <section id="services">
      <h5>I what i offer</h5>
      <h2>services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            {uiDesign.map((item, index) => (
              <li key={index}>
                <BiCheck className="service__list-icon" />
                <p>{item.item}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Developpement</h3>
          </div>

          <ul className="service__list">
            {webDevelloppement.map((item, index) => (
              <li key={index}>
                <BiCheck className="service__list-icon" />
                <p>{item.item}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="service">
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
