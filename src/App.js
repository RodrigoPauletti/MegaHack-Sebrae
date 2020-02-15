import React from "react";
import { GlobalStyle } from "./styles.js";

// import Home from "./pages/Home/index.js";
// import RegisterOptions from "./pages/Register/RegisterOptions/index.js";
// import RegisterNoCompany from "./pages/Register/RegisterNoCompany.js";
// import RegisterCompany from "./pages/Register/RegisterCompany.js";
import Questions from "./pages/Questions/index.js";

function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <RegisterOptions /> */}
      {/* <RegisterNoCompany /> */}
      {/* <RegisterCompany /> */}
      <Questions />
      <GlobalStyle />
    </>
  );
}

export default App;
