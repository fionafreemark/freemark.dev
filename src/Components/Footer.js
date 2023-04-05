// Assets
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
      <footer>
        <div  className="wrapper footer-container">
          <p> Fiona Freemark &copy; 2023</p>
          <div className="footer-icon-box">
            <a href="https://www.linkedin.com/in/fiona-freemark/" title="linked in" className="footer-social-icon-box">
              <FaLinkedin className="footer-social-icon" />
            </a>
            <a href="https://github.com/fionafreemark" title="github" className="footer-social-icon-box">
              <FaGithub className="footer-social-icon" />
            </a>
            <a href="mailto:freemark.dev@gmail.com" title="email me!" className="footer-social-icon-box">
              <FaEnvelope className="footer-social-icon" />
            </a>
          </div>
        </div> 
      </footer>
  )
};

export default Footer;