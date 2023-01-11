import React from "react";
import Header from "./Containers/Header";
import Nav from "./Containers/Nav";
import About from "./Containers/About";
import Experience from "./Containers/Experience";
import Services from "./Containers/Services";
import Portfolio from "./Containers/Portfolio";
import Testimonials from "./Containers/Testimonials";
import NavMenu from "./Containers/NavMenu/NavMenu";
import Footer from "./Containers/Footer";
import "aos/dist/aos.css";

const App = () => {
  return (
    <>
      <NavMenu />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default App;
