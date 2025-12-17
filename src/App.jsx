import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="bg-black ">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default App;
