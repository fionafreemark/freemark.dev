// Modules
import { useSpring, animated } from '@react-spring/web'
// Assets
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const flip = false;
  const fade300 = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 300
  });
  return (
      <footer>
        <animated.div style={fade300}  className="wrapper footer-container">
          <p> Fiona Freemark &copy; 2023</p>
          <div className="footer-icon-box">
          <a href="https://www.linkedin.com/in/fiona-freemark/" title="linked in" className="footer-social-icon-box" target="_blank" rel="noreferrer">
              <FaLinkedin className="footer-social-icon" />
            </a>
          <a href="https://github.com/fionafreemark" title="github" className="footer-social-icon-box" target="_blank" rel="noreferrer">
              <FaGithub className="footer-social-icon" />
            </a>
          <a href="mailto:freemark.dev@gmail.com" title="email me!" className="footer-social-icon-box" target="_blank" rel="noreferrer">
              <FaEnvelope className="footer-social-icon" />
            </a>
          </div>
        </animated.div> 
      </footer>
  )
};

export default Footer;