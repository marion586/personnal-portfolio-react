import React, { useEffect } from "react";
import "./style.css";
import ME from "../../assets/smile.jpg";
import { FaAward } from "react-icons/fa";
import ButtonCustom from "../../Components/ButtonCustom";
import { VscFolderLibrary } from "react-icons/vsc";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const aboutData = [
    {
      icon: <FaAward className="about__icon" />,
      subtitle: "Experience",
      content: "1 + years Working",
    },
    {
      icon: <FaAward className="about__icon" />,
      subtitle: "Clients",
      content: "10+ worldwide",
    },
    {
      icon: <VscFolderLibrary className="about__icon" />,
      subtitle: "Projects",
      content: "10+ Completed",
    },
  ];

  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="fade-right">
          <div className="about__me-image">
            <img src={ME} alt="about imge" />
          </div>
        </div>

        <div className="about__content" data-aos="fade-left">
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
            Throughout my 5 years of study as a software developer, I focused on
            developing scalable and welldocumented code. I like to work in
            collaboration but I can also manage projects independently
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

export default About;
