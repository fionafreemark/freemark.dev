// Modules
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
//Assets
import { AiOutlinePlus } from "react-icons/ai";
import resume from '../assets/docs/fiona-freemark-resume.pdf';

const MobileNav = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [navMenuClass, setNavMenuClass] = useState("nav-menu unclicked");
  const [navButtonClass, setNavButtonClass] = useState("nav-button unclicked");
  const [navVisibility, setNavVisibility] = useState("nav-ul unclicked")

  //Mobile menu toggle open/closed:
  const updateMenu = () => {
    if (!isMenuClicked) {
      setNavMenuClass("nav-menu clicked");
      setNavButtonClass("nav-button clicked");
      setNavVisibility("nav-ul clicked")
    } else {
      setNavMenuClass("nav-menu unclicked");
      setNavButtonClass("nav-button unclicked");
      setNavVisibility("nav-ul unclicked")
    }
    setIsMenuClicked(!isMenuClicked);
  };

  // Closes mobile nav once a link is clicked:
  const closeMenu = () => {
    setNavButtonClass("nav-button unclicked");
    setNavVisibility("nav-ul unclicked");
    setIsMenuClicked(false);
  };


  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView();

  const fadeVariant2 = {
    visible: { opacity: 1, transition: { duration: 0.8 }, y: 0 },
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
    <nav className="mobile-nav">
      <button className={navMenuClass} onClick={updateMenu} alt="menu button" aria-label="menu-button" >
        <AiOutlinePlus className={navButtonClass} />
      </button>
      <div className={navVisibility} >
          <motion.ul 
          ref={ref}
          variants={fadeVariant2}
          initial="hidden"
          animate={control} className="nav-ul">
            <li>
              <Link className="menu-link" to={'/'} element={<Home />} onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link className="menu-link" to={'/about'} element={<About />} onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link className="menu-link" to={'/projects'} element={<Projects />} onClick={closeMenu}>Projects</Link>
            </li>
          <li>
            <a className="menu-link" href={resume} download="fiona-freemark-resume.pdf" target="_blank" rel='noreferrer' >Resume</a>
          </li>
            <li>
              <Link className="menu-link" to={'/contact'} element={<Contact />} onClick={closeMenu}>Contact</Link>
            </li>
          </motion.ul>
      </div>
    </nav>
  )
}

export default MobileNav;