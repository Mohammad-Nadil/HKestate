import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
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
