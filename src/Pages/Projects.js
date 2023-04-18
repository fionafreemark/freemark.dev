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
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        // delay: 0.5,
        // when: "beforeChildren",
        staggerChildren: 0.3
      },
      y: 0
    },
    hidden: { opacity: 0, y: 100 },
  }
  const fadeVariantChild = {
    visible: { opacity: 1},
    hidden: { opacity: 0},
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
            <motion.div variants={fadeVariantChild} className="proj-box">
              <div className="proj-img-container">
                <a href="https://jobi-app.netlify.app/" className="img-link">
                  <img className="creative-img" src={JobiApp}
                    alt="Ipad and iphone on table displaying the jobi app website." />
                </a>
              </div>
              <div className="proj-text-container">
                <h4>Jobi Job Board</h4>
                <h5>In Development</h5>
                <p className="proj-desc">
                  A job board app where employers can post open positions for prospective employees. Built
                  with React, this project uses JavaScript, SASS & HTML. Converted from a style guide designed by Rashedul Kabir, and created with accessibility and responsiveness in mind.
                </p>
                <p className="proj-desc">
                  Status: Home page is complete, with special attention to mobile menu, accordion feature & graphics. Firebase and user authentication features coming soon.
                </p>
                <ul className="proj-skills">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
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
            </motion.div>
            <motion.div variants={fadeVariantChild} className="proj-box">
              <div className="proj-img-container">
                <a href="https://whateverfloatsyourvote.netlify.app/" className="img-link">
                  <img className="creative-img" src={VotingApp}
                    alt="Screenshot of the 'Whatever Floats your Vote' app with an illustration of a ballot box." />
                </a>
              </div>
              <div className="proj-text-container vote-proj-text">
                <h4>Whatever Floats Your Vote</h4>
                <p className="proj-desc">
                  An anonymous voting app that allows users to create, vote on, and view poll results. Built
                  with React, this project uses JavaScript, routing and state to
                  post and pull data from Firebase. Developed collaboratively using paired programming.
                </p>
                <p className="proj-desc">
                  Updates: New theme & mobile menu.
                </p>
                <ul className="proj-skills">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
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
            </motion.div>
            <motion.div variants={fadeVariantChild} className="proj-box">
              <div className="proj-img-container">
                <a href="https://the-daily-tarot.netlify.app/" className="img-link">
                  <img className="creative-img" src={DailyTarot}
                    alt="'The Daily Tarot' website, depicting app instructions and tarot cards splayed across the background." />
                </a>
              </div>
              <div className="proj-text-container">
                <h4>The Daily Tarot</h4>
                <p className="proj-desc">A daily tarot app that allows the user the pull a randomized card from a standard
                  77-card deck. A local image is then matched to
                  the selected card from the API and displayed on screen with it's meaning and description. The user has
                  the option
                  to save their response in a Firebase database.
                </p>
                <ul className="proj-skills">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>API</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>HTML</li>
                </ul>
              </div>
              <div className="proj-link-container">
                <a className="proj-link link-outline" href="https://the-daily-tarot.netlify.app/"  >Live
                  Site</a>
                <a className="proj-link link-outline" href="https://github.com/fionafreemark/the-daily-tarot"
                >GitHub</a>
              </div>
            </motion.div>
            <motion.div variants={fadeVariantChild} className="proj-box">
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
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div className="proj-link-container">
                <a className="proj-link link-outline" href="https://creative-brand-design.netlify.app/" >Live
                  Site</a>
                <a className="proj-link link-outline" href="https://github.com/fionafreemark/creative-brand-design"
                >GitHub</a>
              </div>
            </motion.div>
            <motion.div variants={fadeVariantChild} className="proj-box">
              <div className="proj-img-container">
                <a href="https://animal-match-app.netlify.app/" className="img-link">
                  <img className="animal-match-img"
                    src={AnimalMatch}
                    alt="Screenshot from a website project where the text says 'Your Animal Match' and a cat drinking out of a tea cup." />
                </a>
              </div>
              <div className="proj-text-container img-box-2">
                <h4>Find Your Animal Match</h4>
                <p className="proj-desc">A lighthearted app that matches the user's personality to an animal photo. Using
                  the user's inputs, it fetches data from the Pexels' API and displays
                  the resulting match. Developed and designed collaboratively using paired programming techniques.
                </p>
                <ul className="proj-skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>JavaScript</li>
                  <li>GitHub</li>
                </ul>
              </div>
              <div className="proj-link-container">
                <a className="proj-link link-outline" href="https://animal-match-app.netlify.app/"  >Live
                  Site</a>
                <a className="proj-link link-outline" href="https://github.com/renata-fiona/animal-match-app"
                >GitHub</a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Projects;
