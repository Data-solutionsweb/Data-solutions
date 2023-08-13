import React from "react";
import "./App.css";

import {
  Home,
  About,
  Services,
  Partners,
  Contact,
} from "./containers";

import { Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      Hello
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Home />
      <Partners />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default App;
