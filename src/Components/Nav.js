// Modules
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
//Components
import MobileNav from "./MobileNav";
// Pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

const Nav = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView();

  const fadeVariant = {
    visible: { opacity: 1, transition: { duration: 0.8 }, x: 0 },
    hidden: { opacity: 0, x: 100 },
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
    <div className="nav">
      <div className="nav-bar">
        <Link className="h1-link" to={`/`} element={<Home />}>
          <div className="logo-container">
            <h1 >Fiona Freemark</h1>
          </div>
        </Link>
        <nav className="desktop-nav">
          <div className="nav-ul unclicked" >
            <motion.ul 
              ref={ref}
              variants={fadeVariant}
              initial="hidden"
              animate={control} 
              className="nav-ul">
              <li>
                <Link className="menu-link" to={'/'} element={<Home />}>Home</Link>
              </li>
              <li>
                <Link className="menu-link" to={'/about'} element={<About />}>About</Link>
              </li>
              <li>
                <Link className="menu-link" to={'/projects'} element={<Projects />}>Projects</Link>
              </li>
              <li>
                <Link className="menu-link" to={'/contact'} element={<Contact />}>Contact</Link>
              </li>
            </motion.ul>
          </div>
        </nav>
        < MobileNav />
      </div>
    </div >
  )
}

export default Nav;