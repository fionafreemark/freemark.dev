// Modules
import { Link } from "react-router-dom";
import { useSpring, animated } from '@react-spring/web'
// import { useState } from "react";
// Pages
import Contact from '../Pages/Contact';
// Assets
import DesktopView from "../assets/desktop-view-by-covene.jpg";
import Pie from "../assets/shapes/quarter-circle-shape-red.svg";
import SoftSquare from "../assets/shapes/curve-shape-light-pink.svg";
import ArrowSquarePoint from "../assets/shapes/arrow-square-point.svg";
import ArrowSquare from "../assets/shapes/arrow-square.svg";

const Home = () => {
  const flip = false;
  const fade300 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 300
  });
  const fade500 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 500
  });

  return (
    <section className="home-section wrapper">
      <animated.div style={fade300} className="heading-cont">
        <h2>Fiona Freemark</h2>
        <h3>Front-End Developer | Artist</h3>
        <animated.div style={fade500}>
          <Link className="link-outline" to={'/contact'} element={<Contact />}>Get in Touch</Link>
        </animated.div>
      </animated.div>
      <animated.div style={fade300} className="heading-img-cont">
        <img src={DesktopView} alt="Desktop scene with laptop and pink notebook." className="desktop-img" />
        <animated.div style={fade500}>
          <img src={Pie} alt="" className="shape home-pie" />
          <img src={SoftSquare} alt="" className="shape home-soft-square" />
          <img src={ArrowSquarePoint} alt="" className="arrow home-arrow-point" />
          <img src={ArrowSquare} alt="" className="arrow home-arrow-square" />
        </animated.div>
      </animated.div>
    </section>
  )
};

export default Home;