import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Dev from "./pages/Dev";
// import About from "./pages/About";
// import Portifolio from "./pages/Portifolio";
// import Contact from "./pages/Contact";
// import Header from "./components/Header";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dev" element={<Dev />}>
          <Route path="about" element={<About />} />
          <Route path="portifolio" element={<Portifolio />} />
          <Route path="contact" element={<Contact />} />
        </Route> */}
      </Routes>
    </Router>
  );
}
