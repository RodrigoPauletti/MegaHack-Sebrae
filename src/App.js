import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styles.js";

import Home from "./pages/Home/index.js";
import RegisterOptions from "./pages/Register/RegisterOptions/index.js";
import RegisterNoCompany from "./pages/Register/RegisterNoCompany.js";
import RegisterCompany from "./pages/Register/RegisterCompany.js";
import Questions from "./pages/Questions/index.js";
import Result from "./pages/Result/index.js";
import Courses from "./pages/Courses/index.js";
import Partners from "./pages/Partners/index.js";
import PartnerDetail from "./pages/Partners/PartnerDetail.js";
import PartnerBudget from "./pages/Partners/PartnerBudget.js";
import Materials from "./pages/Materials/index.js";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <RegisterOptions />
          </Route>
          <Route path="/register-no-company">
            <RegisterNoCompany />
          </Route>
          <Route path="/register-company">
            <RegisterCompany />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/partner-detail/:id">
            <PartnerDetail />
          </Route>
          <Route path="/partner-budget">
            <PartnerBudget />
          </Route>
          <Route path="/materials">
            <Materials />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
