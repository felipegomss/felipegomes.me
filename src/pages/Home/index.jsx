import "./home.scss";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { DiTerminalBadge } from "react-icons/di";
import { AiOutlineLine } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import About from "../About";
import Portifolio from "../Portifolio";
import Contact from "../Contact";
import Footer from "../../components/Footer";

function Home() {
  const [data, setData] = useState(88);
  const before = data - 1;
  const after = data + 1;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://api.github.com/graphql",
        {
          query:
            'query {user(login: "felipegomss") {contributionsCollection {contributionCalendar {totalContributions}}}}',
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `bearer ${process.env.REACT_APP_GIT_API_TOKEN}`,
          },
        }
      );

      const result =
        response.data.data.user.contributionsCollection.contributionCalendar
          .totalContributions;
      setData(result);
    };
    fetchData();
  }, []);

  const aboutRef = useRef(null);
  const portifolioRef = useRef(null);
  const contactRef = useRef(null);
  const knowRef = useRef(null);
  const aboutScroll = () => aboutRef.current.scrollIntoView();
  const portifolioScroll = () => portifolioRef.current.scrollIntoView();
  const contactScroll = () => contactRef.current.scrollIntoView();
  const knowScroll = () => knowRef.current.scrollIntoView();
  return (
    <>
      <main>
        <aside>
          <div>
            <nav>
              <Link to="/">
                <DiTerminalBadge size={"2em"} />
              </Link>
              <button onClick={aboutScroll}>
                {" "}
                <p>About</p>{" "}
              </button>
              <button onClick={portifolioScroll}>
                {" "}
                <p>Portifolio</p>{" "}
              </button>
              <button onClick={contactScroll}>
                {" "}
                <p>Get in touch</p>{" "}
              </button>
            </nav>
          </div>
          <div>
            <span>
              <h1 className="title">
                FELIPE<span>GOMES</span>
              </h1>
              <p className="slogan">
                Turn ideas into reality <FaRegLightbulb className="ligh" />
              </p>
            </span>
          </div>
        </aside>
        <aside>
          <div>
            <span>10° S 55° O</span>
          </div>
          <div className="days">
            <div>
              <span className="tomorw">{after}</span>
              <AiOutlineLine size={"3em"} />
              <span className="today">{data}</span>
              <AiOutlineLine size={"3em"} />
              <span className="yesday">{before}</span>
            </div>
          </div>
          <div className="next">
            <span className="see--more">
              <div ref={knowRef}></div>

              <button onClick={knowScroll}>
                <p> [Know More]</p>
              </button>
              <BsFillArrowDownCircleFill size={"2em"} className="arrow" />
            </span>
          </div>
        </aside>
      </main>
      <div className="wrapper">
        <div ref={aboutRef} className="ref"></div>
        <About />
        <div ref={portifolioRef} className="ref"></div>
        <Portifolio />
        <div ref={contactRef} className="ref"></div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
