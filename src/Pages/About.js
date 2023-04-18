// Modules
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Components
import Skills from '../Components/Skills';
// Assets
import Fiona from '../assets/fiona-freemark-lilac-headshot.jpg';
import { TfiArrowCircleDown } from 'react-icons/tfi';

function About() {
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
    <>
      <section className="about-me-section">
        <div className="about-me-container wrapper">
          <div className="about-me-text-container">
            <motion.h3
              ref={ref}
              variants={fadeVariant}
              initial="hidden"
              animate={control}
              className="about-me-heading">
              About Me
            </motion.h3>
            <motion.div
              ref={ref}
              variants={fadeVariant2}
              initial="hidden"
              animate={control}>
              <p className="about-me-text"><span className="bold-link">Hi, my name is Fiona!</span></p>
              <p className="about-me-text">I'm a front-end developer and artist with 10 years of experience in the <span className="bold-link">design, production and presentation of artworks</span> online and in-person. I bring a unique blend of creative and technical skills to the table.</p>
              <p className="about-me-text">
                As a recent graduate of Juno College's <a
                  className="juno-link" href="https://junocollege.com/bootcamp/web-development-toronto/"> Immersive Web Development
                  Bootcamp</a>, I am well-versed in the latest web development technologies, including <span className="bold-link">React, ES6, Firebase, SASS, CSS3, and HTML5.</span> I am passionate about using these tools to build <span className="bold-link">accessible and responsive code</span> that meets the needs of modern web users.
              </p>
              <p className="about-me-text">
                With a keen <span className='bold-link'> eye for design and an unwavering attention to detail,</span> I strive to build pixel-perfect websites that are not only functional but also visually stunning. I am always using my problem-solving abilities to look for <span className="bold-link">innovative ways to bring my artistic vision to life</span> as I take on new projects and continue to grow my tech stack.</p>
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            variants={fadeVariant2}
            initial="hidden"
            animate={control}
            className="about-me-img-container">
            <img className="fiona-portrait" src={Fiona}
              alt="Portrait of Fiona Freemark, the developer of this website." />
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          variants={fadeVariant3}
          initial="hidden"
          animate={control} className="scroll-btn">
          <a href="#skills">
            <TfiArrowCircleDown className='down-arrow-btn' />
          </a>
        </motion.div>
      </section>
      < Skills id="skills" />
    </>
  );
}

export default About;
