import FPhoto from "../../assets/FPhoto.jpeg";
import resume from "../../assets/Resume.pdf";
import Typewriter from "typewriter-effect";
import "./about.scss";

function About() {
  return (
    <div className="about" id="about">
      <div className="felipe">
        <img src={FPhoto} alt="Felipe Gomes" />
        <div className="gradient-box">
          <a href={resume} download="Resume-FelipeGomes.pdf" className="resume">
            <p>Get my resume</p>
          </a>
        </div>
      </div>
      <div className="letter">
        <h1>Felipe Gomes</h1>
        <h3>
          <span className="role">
            <Typewriter
              options={{
                strings: ["Front-End", "Full-Stack"],
                autoStart: true,
                loop: true,
              }}
            />
            Developer
          </span>
        </h3>
        <p>
          +3 years of experience with IT, I started as a full stack developer
          where I worked with ReactJs and Node, technologies that I love and
          seek to specialize in until today.
          <br />I currently work at Ericsson Inovação S.A, creating and running
          tests on projects for our client, VIVO - Telefônica, one of the
          largest telephone companies in Brazil, that impacts the lives of more
          than 90 million people.
          <br />
          Passionate about technology and knowledge, my mission is to turn ideas
          into reality always with the best quality as possible.
        </p>
      </div>
    </div>
  );
}

export default About;
