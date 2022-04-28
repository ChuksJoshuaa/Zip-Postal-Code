import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Validate, SearchPage } from "./pages/index";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/search">
          <SearchPage />
        </Route>
        <Route exact path="/">
          <Validate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
