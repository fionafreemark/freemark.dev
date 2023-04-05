// Components
// Assets
import AnimalMatch from "../assets/animal-match-project-thumbnail-photo-by-sami-aksu-horizontal.png"
import DailyTarot from "../assets/fiona-freemark-the-daily-tarot-preview.png"
import Creative from "../assets/fiona-freemark-creative-brand-project.png"
import VotingApp from "../assets/fiona-freemark-whatever-floats-your-vote-project-preview.png"

function Projects() {
  return (
    <>
      <section  className="projects-section" id="projects">
        <div  className="wrapper proj-outer-box">
          <h3  className="proj-heading">Projects</h3>
          <div  className="proj-container">
            {/*  <!-- Start of Project Box 1 --> */}
            <div  className="proj-box proj-box-1 ">
              <div  className="proj-img-container img-box-1">
                <a href="https://whateverfloatsyourvote.netlify.app/"  className="img-link"  >
                  <img  className="creative-img" src={VotingApp}
                    alt="Screenshot of the 'Whatever Floats your Vote' app with an illustration of a ballot box." />
                </a>
              </div>
              <div  className="proj-text-container">
                <h4>Whatever Floats Your Vote</h4>
                <p  className="proj-desc">
                  An anonymous voting app that allows users to create, vote on, and view poll results. Built
                  with React, this project uses JavaScript, routing and state to
                  post and pull data from Firebase. Developed collaboratively using paired programming.
                </p>
                <p>
                  Updates: New theme & mobile menu.
                </p>
                <ul  className="proj-skills">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>HTML</li>
                </ul>
                <div  className="proj-link-container">
                  <a  className="proj-link link-outline" href="https://whateverfloatsyourvote.netlify.app/"
                  >Live
                    Site</a>
                  <a  className="proj-link link-outline" href="https://github.com/fionafreemark/whatever-floats-your-vote"
                  >GitHub</a>
                </div>
              </div>
            </div>
            {/*             <!-- End of Project Box 1 -->
            <!-- Start of Project Box 2 --> */}
            <div  className="proj-box proj-box-2 ">
              <div  className="proj-img-container img-box-1">
                <a href="https://the-daily-tarot.netlify.app/"  className="img-link"  >
                  <img  className="creative-img" src={DailyTarot}
                    alt="'The Daily Tarot' website, depicting app instructions and tarot cards splayed across the background." />
                </a>
              </div>
              <div  className="proj-text-container">
                <h4>The Daily Tarot</h4>
                <p  className="proj-desc">A daily tarot app that allows the user the pull a randomized card from a standard
                  77-card deck. A local image is then matched to
                  the selected card from the API and displayed on screen with it's meaning and description. The user has
                  the option
                  to save their response in a Firebase database.
                </p>
                <ul  className="proj-skills">
                  <li>React</li>
                  <li>Firebase</li>
                  <li>API</li>
                  <li>JavaScript</li>
                  <li>SASS</li>
                  <li>HTML</li>
                </ul>
                <div  className="proj-link-container">
                  <a  className="proj-link link-outline" href="https://the-daily-tarot.netlify.app/"  >Live
                    Site</a>
                  <a  className="proj-link link-outline" href="https://github.com/fionafreemark/the-daily-tarot"
                  >GitHub</a>
                </div>
              </div>
            </div>
            {/*             <!-- End of Project Box 2 -->
            <!-- Start of Project Box 3 --> */}
            <div  className="proj-box proj-box-3 ">
              <div  className="proj-img-container img-box-1">
                <a href="https://creative-brand-design.netlify.app/"  className="img-link"  >
                  <img  className="creative-img" src={Creative}
                    alt="Screenshot from a website home page depicting an office scene with the brand's name 'creative' along the top navigation bar." />
                </a>
              </div>
              <div  className="proj-text-container">
                <h4>Creative Brand PSD Conversion</h4>
                <p  className="proj-desc">A multi-page, psd conversion project with a focus on responsive design
                  and accessibility standards. Added JavaScript features include: a mobile menu and functioning comment
                  section on the blog page.
                </p>
                <ul  className="proj-skills">
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>GitHub</li>
                </ul>
                <div  className="proj-link-container">
                  <a  className="proj-link link-outline" href="https://creative-brand-design.netlify.app/"  >Live
                    Site</a>
                  <a  className="proj-link link-outline" href="https://github.com/fionafreemark/creative-brand-design"
                  >GitHub</a>
                </div>
              </div>
            </div>
            {/*             <!-- End of Project Box 3 -->
            <!-- Start of Project Box 4 --> */}
            <div  className="proj-box proj-box-4 ">
              <div  className="proj-img-container">
                <a href="https://animal-match-app.netlify.app/"  className="img-link"  >
                  <img  className="animal-match-img"
                    src={AnimalMatch}
                    alt="Screenshot from a website project where the text says 'Your Animal Match' and a cat drinking out of a tea cup." />
                </a>
              </div>
              <div  className="proj-text-container img-box-2">
                <h4>Find Your Animal Match</h4>
                <p  className="proj-desc">A lighthearted app that matches the user's personality to an animal photo. Using
                  the user's inputs, it fetches data from the Pexels' API and displays
                  the resulting match. Developed and designed collaboratively using paired programming techniques.
                </p>
                <ul  className="proj-skills">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS</li>
                  <li>JavaScript</li>
                  <li>GitHub</li>
                </ul>
                <div  className="proj-link-container">
                  <a  className="proj-link link-outline" href="https://animal-match-app.netlify.app/"  >Live
                    Site</a>
                  <a  className="proj-link link-outline" href="https://github.com/renata-fiona/animal-match-app"
                  >GitHub</a>
                </div>
              </div>
            </div>
            {/* <!-- End of Project Box 4 --> */}
          </div>
        </div>{/* <!-- End of .wrapper .proj-outer-box --> */}
      </section>
    </>

  );
}

export default Projects;
