// Assets
import { FaReact, FaCss3Alt, FaHtml5, FaSass, FaGithub, FaUniversalAccess } from "react-icons/fa";
import { SiJavascript, SiFirebase } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section  className="skills-section" id="skills">
        <div  className="wrapper skills-container">
          <h3  className="skills-heading">Skills</h3>
          <div  className="skills-icon-container">
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
          </div>
        </div>
      </section>
    </>
  )
}
export default Skills;