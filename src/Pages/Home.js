// Modules
import { Link } from "react-router-dom";
// Pages
import Contact from '../Pages/Contact';
// Assets
import DesktopView from "../assets/desktop-view-by-covene.webp";
import Pie from "../assets/shapes/quarter-circle-shape-red.svg";
import SoftSquare from "../assets/shapes/curve-shape-light-pink.svg";
import ArrowSquarePoint from "../assets/shapes/arrow-square-point.svg";
import ArrowSquare from "../assets/shapes/arrow-square.svg";

const Home = () => {
  return (
      <section className="home-section wrapper">
        <div className="heading-cont">
          <h2>Fiona Freemark</h2>
          <h3>Front-End Developer & Artist</h3>
          <Link className="link-outline" to={'/contact'} element={<Contact />}>Get in Touch</Link>
        </div>
        <div className="heading-img-cont">
          <img src={DesktopView} alt="Desktop scene with laptop and pink notebook." className="desktop-img" />
          <img src={Pie} alt="" className="shape home-pie" />
          <img src={SoftSquare} alt="" className="shape home-soft-square" />
          <img src={ArrowSquarePoint} alt="" className="arrow home-arrow-point" />
          <img src={ArrowSquare} alt="" className="arrow home-arrow-square" />
        </div>
      </section>
  )
};

export default Home;