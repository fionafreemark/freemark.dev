// Assets
import { FaGithub, FaLinkedin, FaEnvelope, FaCalendarCheck } from "react-icons/fa";

function Contact() {
  return (
      <section  className="contact-section" id="contact">
        <div  className="wrapper">
          <div  className="contact-outer-box">
            <div  className="contact-left-box ">
              <h3  className="contact-header">Contact</h3>
              <p  className="contact-body">Let's work together. Send me a message or contact me at the links below! </p>
              <div  className="contact-icon-box">
              <a href="https://www.linkedin.com/in/fiona-freemark/" title="linked in" className="social-icon-box" target="_blank" rel="noreferrer">
                  <FaLinkedin className="social-icon"/>
                </a>
              <a href="https://github.com/fionafreemark" title="github" className="social-icon-box" target="_blank" rel="noreferrer">
                  <FaGithub className="social-icon" />
                </a>
              <a href="mailto:freemark.dev@gmail.com" title="email me!" className="social-icon-box" target="_blank" rel="noreferrer">
                  <FaEnvelope className="social-icon" />
                </a>
              <a href="https://calendly.com/fionafreemark/15-minute-chat" title="book a chat" className="social-icon-box" target="_blank" rel="noreferrer">
                  <FaCalendarCheck className="social-icon" />
                </a>
              </div>
            </div>
            <div  className="contact-right-box ">
              <form  className="contact-form" method="post" data-netlify="true" name="contact-form">
                <label for="client-name">Name</label>
                <input type="text" id="client-name"  className="client-name" name="client-name" required />
                <label for="client-email">Email Address</label>
                <input type="email" id="client-email"  className="client-name" name="client-email" required />
                <label for="client-message">Message</label>
                <textarea type="text" id="client-message"  className="client-message" name="client-message" rows="8" placeholder="Leave me a message!" required></textarea>
                <button name="message-submission" type="submit"  className="button-outline form-button">Get in Touch</button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Contact;
