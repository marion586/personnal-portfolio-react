import "./style.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();
  const [btnactive, setBtnactive] = useState(false);
  const sendEmail = (e) => {
    setBtnactive(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o2jk9e9",
        "template_cikrbtk",
        form.current,
        "SNp7FWyoG6WE-iSuF"
      )
      .then(
        (result) => {
          const notify = () =>
            toast.success("Email sent successfully", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          notify();
          setBtnactive(false);
        },
        (error) => {
          console.log(error.text);
          const notify = () =>
            toast.error("Something went wrong,email not sent", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          notify();
          setBtnactive(false);
        }
      );
  };
  const contactData = [
    {
      icon: <MdOutlineEmail className="contact__icon" />,
      title: "Email",
      subtitle: "marionmenye@gmail.com",
      href: "mailto:marionmenye@gmail.com",
      linkContent: "Send a message",
    },
    {
      icon: <RiMessengerLine className="contact__icon" />,
      title: "Messenger",
      subtitle: "devcomminuty",
      href: "https://m.me/ernest.achiever",
      linkContent: "Send a message",
    },
    {
      icon: <BsWhatsapp className="contact__icon" />,
      title: "Whatsapp",
      subtitle: "+261347351927",
      href: "https://api.whatsapp.com/send?phone=+261347351927",
      linkContent: "Send a message",
    },
  ];
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me </h2>

      <div className="container contact__container" data-aos="zoom-in">
        <div className="contact__options">
          {contactData.map(
            ({ icon, title, href, subtitle, linkContent }, index) => (
              <article className="contact__option" key={index}>
                {icon}
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <a href={href} target="_blank" rel="noreferrer">
                  {linkContent}
                </a>
              </article>
            )
          )}
        </div>

        {/* end of contact  */}

        <form ref={form} action="" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="text" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            id=""
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit" className="btn btn-contact btn-primary">
            <div className="btn-grp">
              {btnactive && (
                <TailSpin
                  height="40"
                  width="40"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              )}

              <span>Send Message</span>
            </div>
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
