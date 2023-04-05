// Modules
import { Link } from "react-router-dom";
import { useState } from "react";
// Pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
//Assets
import { AiOutlinePlus } from "react-icons/ai";

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
  return (
    <nav className="mobile-nav">
      <button className={navMenuClass} onClick={updateMenu}>
        <AiOutlinePlus className={navButtonClass} />
      </button>
      <div className={navVisibility} >
          <ul className="nav-ul">
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
              <Link className="menu-link" to={'/contact'} element={<Contact />} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default MobileNav;