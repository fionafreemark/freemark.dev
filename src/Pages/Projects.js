// Modules
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// Assets
import JobiApp from "../assets/fiona-freemark-jobi-app-ipad-iphone.jpg"
import AnimalMatch from "../assets/animal-match-project-thumbnail-photo-by-sami-aksu-horizontal-ipad-iphone.jpg"
import DailyTarot from "../assets/fiona-freemark-the-daily-tarot-ipad-iphone.jpg"
import Creative from "../assets/fiona-freemark-creative-brand-project-ipad-iphone.jpg"
import VotingApp from "../assets/fiona-freemark-whatever-floats-your-vote-project-ipad-iphone.jpg"

const Projects = () => {
  // Scroll Animations
  const control = useAnimation();
  const [ref, inView] = useInView();

  const fadeVariant = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  }

  const fadeVariant2 = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
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
      <section className="projects-section" id="projects">
        <div className="wrapper proj-outer-box">
          <motion.h3
            ref={ref}
            variants={fadeVariant}
            initial="hidden"
            animate={control}
            className="proj-heading">
            Projects
          </motion.h3>
          <motion.div
            ref={ref}
            variants={fadeVariant2}
            initial="hidden"
            animate={control}
            className="proj-container">
            <div className="proj-box">
              <div className="proj-img-container">
                <a href="https://jobi-app.netlify.app/" className="img-link">
                  <img className="creative-img" src={JobiApp}
                    alt="Ipad and iphone on table displaying the jobi app website." />
                </a>
              </div>
              <div className="proj-text-container">
                <h4>Jobi Job Board</h4>
                <p className="proj-desc">
                  A job board app where employers can post open positions for prospective employees. Converted from a style guide designed by Rashedul Kabir, and created with accessibility and responsiveness in mind.
                </p>
                <ul className="proj-skills">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>SCSS</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="proj-link-container">
                <a className="proj-link link-outline" href="https://jobi-app.netlify.app/"
                >Live
                  Site</a>
                <a className="proj-link link-outline" href="https://github.com/fionafreemark/jobi-job-search-app"
                >GitHub</a>
              </div>
            </div>
            <div className="proj-box">
              <div className="proj-img-container">
                <a href="https://whateverfloatsyourvote.netlify.app/" className="img-link">
                  <img className="creative-img" src={VotingApp}
                    alt="Screenshot of the 'Whatever Floats your Vote' app with an illustration of a ballot box." />
                </a>
              </div>
              <div className="proj-text-container vote-proj-text">
                <h4>Whatever Floats Your Vote</h4>
                <p className="proj-desc">
                  An anonymous voting app that allows users to create, vote on, and view poll results. Developed collaboratively using paired programming.
                </p>
                <ul className="proj-skills">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Firebase</li>
                  <li>SCSS</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="proj-link-container">
                <a className="proj-link link-outline" href="https://whateverfloatsyourvote.netlify.app/"
                >Live
                  Site</a>
                <a className="proj-link link-outline" href="https://github.com/fionafreemark/whatever-floats-your-vote"
                >GitHub</a>
              </div>
            </div>
            <div className="proj-box">
              <div className="proj-img-container">
                <a href="https://the-daily-tarot.netlify.app/" className="img-link">
                  <img className="creative-img" src={DailyTarot}
                    alt="'The Daily Tarot' website, depicting app instructions and tarot cards splayed across the background." />
                </a>
              </div>
              <div className="proj-text-container">
                <h4>The Daily Tarot</h4>
                <p className="proj-desc">Pull a randomized card-of-the-day from a standard 77-card deck. The selected card is displayed with it's meaning (API) and matching image (local source). Responses can be saved/displayed using Firebase.
                </p>
                <ul className="proj-skills">
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>API</li>
                  <li>Firebase</li>
                  <li>SCSS</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="proj-link-container">
                <a className="proj-link link-outline" href="https://the-daily-tarot.netlify.app/"  >Live
                  Site</a>
                <a className="proj-link link-outline" href="https://github.com/fionafreemark/the-daily-tarot"
                >GitHub</a>
              </div>
            </div>
            <div className="proj-box">
              <div className="proj-img-container">
                <a href="https://creative-brand-design.netlify.app/" className="img-link">
                  <img className="creative-img" src={Creative}
                    alt="Screenshot from a website home page depicting an office scene with the brand's name 'creative' along the top navigation bar." />
                </a>
              </div>
              <div className="proj-text-container">
                <h4>Creative Brand PSD Conversion</h4>
                <p className="proj-desc">A multi-page, psd conversion project with a focus on responsive design
                  and accessibility standards. Added JavaScript features include: a mobile menu and functioning comment
                  section on the blog page.
                </p>
                <ul className="proj-skills">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>SCSS</li>
                </ul>
              </div>
              <div className="proj-link-container">
                <a className="proj-link link-outline" href="https://creative-brand-design.netlify.app/" >Live
                  Site</a>
                <a className="proj-link link-outline" href="https://github.com/fionafreemark/creative-brand-design"
                >GitHub</a>
              </div>
            </div>
            <div className="proj-box">
              <div className="proj-img-container">
                <a href="https://animal-match-app.netlify.app/" className="img-link">
                  <img className="animal-match-img"
                    src={AnimalMatch}
                    alt="Screenshot from a website project where the text says 'Your Animal Match' and a cat drinking out of a tea cup." />
                </a>
              </div>
              <div className="proj-text-container img-box-2">
                <h4>Find Your Animal Match</h4>
                <p className="proj-desc">Matches your personality to an animal photo. Using
                  the user's inputs, it fetches data from the Pexels' API and displays
                  the resulting match. Developed and designed collaboratively using paired programming techniques.
                </p>
                <ul className="proj-skills">
                  <li>API</li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>SCSS</li>
                </ul>
              </div>
              <div className="proj-link-container">
                <a className="proj-link link-outline" href="https://animal-match-app.netlify.app/"  >Live
                  Site</a>
                <a className="proj-link link-outline" href="https://github.com/renata-fiona/animal-match-app"
                >GitHub</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Projects;
