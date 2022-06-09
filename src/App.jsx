import * as React from "react";
import ScrollButton from "./components/ScrollButtom";

import AppRoutes from "./Routes";
import "./styles/global.scss";

function App() {
  return (
    <>
      <AppRoutes />
      <ScrollButton />
    </>
  );
}

export default App;
