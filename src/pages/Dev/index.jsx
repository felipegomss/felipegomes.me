// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

import "./index.scss";
import About from "../About";
import Portifolio from "../Portifolio";
import Contact from "../Contact";
function Dev() {
  return (
    <>
      {/* <Header /> */}
      {/* <Footer /> */}
      <div className="wrapper">
        <About />
        <Portifolio />
        <Contact />
      </div>
    </>
  );
}

export default Dev;
