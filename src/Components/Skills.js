// Modules
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Assets
import { FaReact, FaCss3Alt, FaHtml5, FaSass, FaGithub, FaUniversalAccess, FaSquarespace } from "react-icons/fa";
import { SiFirebase, SiAdobelightroom, SiAdobephotoshop } from "react-icons/si";
import { DiJavascript1} from "react-icons/di";
import { CgFigma } from "react-icons/cg";

const Skills = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView();

  const fadeVariant = {
    visible: { opacity: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0 },
  }
  const fadeVariant2 = {
    visible: { opacity: 1, transition: { duration: 1 }, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }
  const fadeVariant3 = {
    visible: { opacity: 1, transition: { duration: 1.2 }, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }
  const fadeVariant4 = {
    visible: { opacity: 1, transition: { duration: 1.4 }, y: 0 },
    hidden: { opacity: 0, y: 100 },
  }
  const fadeVariant5 = {
    visible: { opacity: 1, transition: { duration: 1.6 }, y: 0 },
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
    <>
      <section  className="skills-section" id="skills">
        <div  className="wrapper skills-container">
          <motion.h3 
            ref={ref}
            variants={fadeVariant}
            initial="hidden"
            animate={control}
          className="skills-heading">
            Skills
            </motion.h3>
          <div className="skills-icon-container">
            <motion.div
              ref={ref}
              variants={fadeVariant2}
              initial="hidden"
              animate={control}  
            className="icon-box">
              <FaReact className="brand-icon" />
              <p>React</p>
            </motion.div>
            <motion.div
              ref={ref}
              variants={fadeVariant3}
              initial="hidden"
              animate={control} 
              className="icon-box">
              <DiJavascript1 className="brand-icon" />
              <p>JavaScript</p>
            </motion.div>
          <motion.div
            ref={ref}
            variants={fadeVariant4}
            initial="hidden"
            animate={control}
            className="icon-box">
              <FaCss3Alt className="brand-icon" />
              <p>CSS</p>
          </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant5}
          initial="hidden"
          animate={control}
          className="icon-box">
              <FaHtml5 className="brand-icon" />
              <p>HTML</p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant2}
          initial="hidden"
          animate={control}
          className="icon-box">
              <FaSass className="brand-icon" />
              <p>SASS</p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant3}
          initial="hidden"
          animate={control}
          className="icon-box">
              <SiFirebase className="brand-icon" />
              <p>Firebase</p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant4}
          initial="hidden"
          animate={control}
          className="icon-box">
              <FaGithub className="brand-icon" />
              <p>GitHub/Git</p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant5}
          initial="hidden"
          animate={control}
          className="icon-box">
              <FaUniversalAccess className="brand-icon" />
              <p>Accessibility</p>
            </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant5}
          initial="hidden"
          animate={control}
          className="icon-box">
              <SiAdobephotoshop className="brand-icon" />
              <p>Photoshop</p>
            </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant5}
          initial="hidden"
          animate={control}
          className="icon-box">
              <SiAdobelightroom className="brand-icon" />
              <p>Lightroom</p>
            </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant5}
          initial="hidden"
          animate={control}
          className="icon-box">
              <CgFigma className="brand-icon" />
              <p>Figma</p>
            </motion.div>
        <motion.div
          ref={ref}
          variants={fadeVariant5}
          initial="hidden"
          animate={control}
          className="icon-box">
              <FaSquarespace className="brand-icon" />
              <p>Squarespace</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Skills;