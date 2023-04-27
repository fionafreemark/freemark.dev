// Modules

// Components
import Skills from '../Components/Skills';
// Assets
import Fiona from '../assets/fiona-freemark-lilac-headshot.jpg';
import { TfiArrowCircleDown } from 'react-icons/tfi';

function About() {
  return (
    <>
      <section className="about-me-section">
        <div className="about-me-container wrapper">
          <div className="about-me-text-container">
            <h3 className="about-me-heading">
              About</h3>
            <h4 className="about-me-h4">
              Hi, my name is Fiona!</h4>
            <div>
              <p className="about-me-text">
                I'm a <span className="bold-link">front-end developer</span> with over <span className="bold-link">11 years of experience in the arts,</span> bringing a unique blend of <span className="bold-link">creative and technical skills</span> to the tech world. My passion for building <span className="bold-link">accessible and responsive code</span> is matched only by my <span className="bold-link">keen eye for design and unwavering attention to detail.</span></p>
              <p className="about-me-text">
                I am <span className="bold-link">creative problem solver and motivated team player</span> who thrives in fast-paced, dynamic environments. I am actively <span className="bold-link">seeking new work opportunities</span> and I'm <span className="bold-link">open to in-office, hybrid, and remote positions</span> that will allow me to continue to grow and develop as a professional.</p>
            </div>
          </div>
          <div
            className="about-me-img-container">
            <img className="fiona-portrait" src={Fiona}
              alt="Portrait of Fiona smiling, against a gradient sky" />
          </div>
        </div>
        <div className="scroll-btn">
          <a href="#skills">
            <TfiArrowCircleDown className='down-arrow-btn' title="scroll"/>
          </a>
        </div>
      </section>
      < Skills id="skills" />
    </>
  );
}

export default About;
