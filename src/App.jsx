import * as React from "react";
import ScrollButton from "./components/ScrollButtom";

import AppRoutes from "./Routes";
import "./styles/global.scss";

function App() {
  return (
    <div className="main--wapper">
      <AppRoutes />
      <ScrollButton />
    </div>
  );
}

export default App;
