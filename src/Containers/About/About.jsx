import React from "react";
import "./style.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import ButtonCustom from "../../Components/ButtonCustom";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  const aboutData = [
    {
      icon: <FaAward className="about__icon" />,
      subtitle: "Experience",
      content: "1 + years Working",
    },
    {
      icon: <FaAward className="about__icon" />,
      subtitle: "Clients",
      content: "200 + worldwide",
    },
    {
      icon: <VscFolderLibrary className="about__icon" />,
      subtitle: "Projects",
      content: "80+ Completed",
    },
  ];
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {aboutData.map((item, index) => (
              <article className="about__card" key={index}>
                {item.icon}
                <h5>{item.subtitle}</h5>
                <small>{item.content}</small>
              </article>
            ))}
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet
            quos modi quasi consequatur itaque nihil explicabo quam quisquam
            asperiores repudiandae quod quidem, excepturi autem tempore
            consectetur iste voluptatibus! Omnis.
          </p>
          <ButtonCustom
            href="#contact"
            className="btn btn-primary"
            Text="let's talk"
          />
        </div>
      </div>
    </section>
  );
};

export default about;
