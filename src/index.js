import React from "react";
import ReactDOM from "react-dom";
//import { Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import {
  Route,
  Link,
  BrowserRouter as Router,
  HashRouter
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/About";
import ButtonAppBar from "./components/ButtonAppBar";

// import Grid from "./components/About";

const routing = (
  <Router>
    {/* <HashRouter> */}
    <div>
      <ButtonAppBar />
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />

      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />
    </div>
    {/* </HashRouter> */}
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
