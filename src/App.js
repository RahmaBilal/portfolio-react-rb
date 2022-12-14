import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
