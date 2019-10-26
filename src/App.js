import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";

import Grid from "./components/Grid";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import About from "./components/About";

import ButtonAppBar from "./components/ButtonAppBar";
import "./App.css";

const App = props => {
  return (
    <div className="App">
      <Grid />
    </div>
  );
};

export default App;
