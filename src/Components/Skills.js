// Modules
import { useSpring, animated } from '@react-spring/web'
// Assets
import { FaReact, FaCss3Alt, FaHtml5, FaSass, FaGithub, FaUniversalAccess } from "react-icons/fa";
import { SiJavascript, SiFirebase } from "react-icons/si";

const Skills = () => {
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
    <>
      <section  className="skills-section" id="skills">
        <div  className="wrapper skills-container">
          <animated.h3 style={fade300}  className="skills-heading">Skills</animated.h3>
          <animated.div style={fade500} className="skills-icon-container">
            <div  className="icon-box">
              <FaReact className="brand-icon" />
              <p>React</p>
            </div>
            <div  className="icon-box">
              <SiJavascript className="brand-icon" />
              <p>JavaScript</p>
            </div>
            <div  className="icon-box">
              <FaCss3Alt className="brand-icon" />
              <p>CSS</p>
            </div>
            <div  className="icon-box">
              <FaHtml5 className="brand-icon" />
              <p>HTML</p>
            </div>
            <div  className="icon-box">
              <FaSass className="brand-icon" />
              <p>SASS</p>
            </div>
            <div  className="icon-box">
              <SiFirebase className="brand-icon" />
              <p>Firebase</p>
            </div>
            <div  className="icon-box">
              <FaGithub className="brand-icon" />
              <p>GitHub/Git</p>
            </div>
            <div  className="icon-box">
              <FaUniversalAccess className="brand-icon" />
              <p>Accessibility</p>
            </div>
          </animated.div>
        </div>
      </section>
    </>
  )
}
export default Skills;