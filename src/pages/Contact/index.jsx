import "./contact.scss";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
function Contact() {
  return (
    <div className="contact">
      <aside>
        <h1>Let's talk about your project!</h1>
        <div className="stripe" />
        <div>
          <h3>
            <a
              href="mailto:contato@felipegomes.me"
              rel="noreferrer"
              target="_blank"
            >
              contato@felipegomes.me
            </a>
          </h3>
          <h3>Salvador - Bahia, Brazil</h3>
          <h3>
            <a
              href="https://api.whatsapp.com/send?phone=5571994178164"
              rel="noreferrer"
              target="_blank"
            >
              +55 71 9 9417-8164
            </a>
          </h3>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/felipegomss/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/felipegomss"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/felipegomss"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/felipegomss"
              rel="noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <p>Let's talk about your project!</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Contact;
