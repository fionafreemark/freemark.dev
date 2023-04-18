// Modules
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Assets
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView();

  const fadeVariant = {
    visible: { opacity: 1, transition: { duration: 0.8 }, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const fadeVariant2 = {
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
  <footer>
    <div className="wrapper footer-container">
      <motion.p
        ref={ref}
        variants={fadeVariant}
        initial="hidden"
        animate={control}> Fiona Freemark &copy; 2023</motion.p>
      <motion.div
        ref={ref}
        variants={fadeVariant2}
        initial="hidden"
        animate={control}
        className="footer-icon-box">
        <a href="https://www.linkedin.com/in/fiona-freemark/" title="linked in" className="footer-social-icon-box" target="_blank" rel="noreferrer">
          <FaLinkedin className="footer-social-icon" />
        </a>
        <a href="https://github.com/fionafreemark" title="github" className="footer-social-icon-box" target="_blank" rel="noreferrer">
          <FaGithub className="footer-social-icon" />
        </a>
        <a href="mailto:freemark.dev@gmail.com" title="email me!" className="footer-social-icon-box" target="_blank" rel="noreferrer">
          <FaEnvelope className="footer-social-icon" />
        </a>
      </motion.div>
    </div>
  </footer>
)
};

export default Footer;