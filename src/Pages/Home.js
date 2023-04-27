// Modules
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Assets
import DesktopView from "../assets/desktop-view-by-covene.jpg";
import Pie from "../assets/shapes/quarter-circle-shape-red.svg";
import SoftSquare from "../assets/shapes/curve-shape-light-pink.svg";
import ArrowSquarePoint from "../assets/shapes/arrow-square-point.svg";
import ArrowSquare from "../assets/shapes/arrow-square.svg";

const Home = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView();

  const fadeVariant = {
    visible: { opacity: 1, transition: { duration: 0.9 }},
    hidden: { opacity: 0},
  }
  const fadeVariant2 = {
    visible: { opacity: 1, transition: { duration: 1.2 } },
    hidden: { opacity: 0},
  }
  const fadeVariant3 = {
    visible: { opacity: 1, transition: { duration: 1.2 }, y: 0 },
    hidden: { opacity: 0, y: 100},
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
    <section className="home-section wrapper">
      <div className="heading-cont">
        <h2>Fiona Freemark</h2>
        <h3>Front-End Developer</h3>
        <motion.div
          ref={ref}
          variants={fadeVariant3}
          initial="hidden"
          animate={control}>
          <a href="mailto:freemark.dev@gmail.com" title="Email Me" className="link-outline" target="_blank" rel="noreferrer">Get in Touch</a>
        </motion.div>
      </div>
      <div
        className="heading-img-cont">
        <motion.img
          ref={ref}
          variants={fadeVariant}
          initial="hidden"
          animate={control}
          src={DesktopView}
          alt="Desktop scene with laptop and pink notebook."
          className="desktop-img"
        />
        <motion.div
          ref={ref}
          variants={fadeVariant2}
          initial="hidden"
          animate={control}>
          <img src={Pie} alt="" className="shape home-pie" />
          <img src={SoftSquare} alt="" className="shape home-soft-square" />
          <img src={ArrowSquarePoint} alt="" className="arrow home-arrow-point" />
          <img src={ArrowSquare} alt="" className="arrow home-arrow-square" />
        </motion.div>
      </div>
    </section>
  )
};

export default Home;