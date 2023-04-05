// Modules
import { Link } from "react-router-dom";
//Components
import MobileNav from "./MobileNav";
// Pages
import Home from '../Pages/Home';
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-bar">
        <Link className="h1-link" to={`/`} element={<Home />}>
          <div className="logo-container">
            <h1>Fiona Freemark</h1>
          </div>
        </Link>
        <nav className="desktop-nav">
          <div className="nav-ul unclicked" >
            <ul className="nav-ul">
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
            </ul>
          </div>
        </nav>
        < MobileNav />
      </div>
    </div >
  )
}

export default Nav;