import React, { useEffect } from "react";
import "./style.css";
import { BsPatchCheckFill } from "react-icons/bs";
import AOS from "aos";
const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const XPlevel = ["Experienced", "Intermediate", "Basic"];
  const fontendData = [
    {
      icon: <BsPatchCheckFill />,
      name: "HTHML",
      level: XPlevel[0],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "CSS",
      level: XPlevel[0],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "JavaScript",
      level: XPlevel[0],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "Bootstrap",
      level: XPlevel[1],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "Tailwind",
      level: XPlevel[2],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "React",
      level: XPlevel[0],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "Typescript",
      level: XPlevel[1],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "Vue Js",
      level: XPlevel[0],
    },
  ];

  const backendData = [
    {
      icon: <BsPatchCheckFill />,
      name: "MongoDB",
      level: XPlevel[0],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "PostGresSql",
      level: XPlevel[2],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "Mysql",
      level: XPlevel[1],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "Node Js",
      level: XPlevel[0],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "PHP",
      level: XPlevel[1],
    },
    {
      icon: <BsPatchCheckFill />,
      name: "GraphQl",
      level: XPlevel[2],
    },
  ];
  return (
    <section id="experience">
      <h5>What Skills I have </h5>
      <h2>My Experince</h2>

      <div className="container experience__container">
        <div className="experience__frontend" data-aos="zoom-in">
          <h3>Fontend Development</h3>
          <div className="experience__content">
            {fontendData.map((item) => (
              <article className="experience__details" key={item.name}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item.name}</h4>
                  <small className="text-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* end of frontend */}

        <div className="experience__backend" data-aos="zoom-in">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendData.map((item) => (
              <article className="experience__details" key={item.name}>
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{item.name}</h4>
                  <small className="text-light">{item.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
