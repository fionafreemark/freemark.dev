// Modules
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Assets
import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarCheck, FaFileDownload } from "react-icons/fa";
import resume from '../assets/docs/fiona-freemark-resume.pdf';

const Contact = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView();

  const fadeVariant = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  }
  const fadeVariant2 = {
    visible: { opacity: 1, transition: { duration: 1.2 }, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }
  const fadeVariant3 = {
    visible: { opacity: 1, transition: { duration: 1.6 }, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <section className="contact-section" id="contact">
      <div className="wrapper">
        <div className="contact-outer-box">
          <div className="contact-left-box ">
            <motion.h3
              ref={ref}
              variants={fadeVariant}
              initial="hidden"
              animate={control}
              className="contact-header">Contact</motion.h3>
            <div >
              <motion.p
                ref={ref}
                variants={fadeVariant2}
                initial="hidden"
                animate={control}
                className="contact-body"> Thank you for visiting my portfolio. I am currently open to new opportunities and would love to hear about your project. Please feel free to send me a message using the form below, and I'll get back to you as soon as possible! </motion.p>
              <motion.div
                ref={ref}
                variants={fadeVariant2}
                initial="hidden"
                animate={control}
                className="contact-icon-box">
                <a href="https://www.linkedin.com/in/fiona-freemark/" title="linked in" className="social-icon-box" target="_blank" rel="noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com/fionafreemark" title="github" className="social-icon-box" target="_blank" rel="noreferrer">
                  <FaGithub className="social-icon" />
                </a>
                <a href="mailto:freemark.dev@gmail.com" title="email me!" className="social-icon-box" target="_blank" rel="noreferrer">
                  <FaEnvelope className="social-icon" />
                </a>
                <a href="https://calendly.com/fionafreemark/15-minute-chat" title="book a chat" className="social-icon-box" target="_blank" rel="noreferrer">
                  <FaCalendarCheck className="social-icon" />
                </a>
                <a className="menu-link" href={resume} title="download resume" download="fiona-freemark-resume.pdf" target="_blank" rel='noreferrer' ><FaFileDownload className="social-icon" /></a>
              </motion.div>
            </div>
          </div>
          <motion.div
            ref={ref}
            variants={fadeVariant2}
            initial="hidden"
            animate={control}
            className="contact-right-box ">
            <form className="contact-form" method="post" data-netlify="true" name="contact-form">
              <label for="client-name">Name</label>
              <input type="text" id="client-name" className="client-name" name="client-name" required />
              <label for="client-email">Email Address</label>
              <input type="email" id="client-email" className="client-name" name="client-email" required />
              <label for="client-message">Message</label>
              <textarea type="text" id="client-message" className="client-message" name="client-message" rows="8" placeholder="Leave me a message!" required></textarea>
              <motion.button
                ref={ref}
                variants={fadeVariant3}
                initial="hidden"
                animate={control} name="message-submission" type="submit" className="button-outline form-button">Get in Touch</motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
