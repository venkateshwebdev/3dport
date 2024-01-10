import { Suspense, lazy, useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ScrollContext, ScrollCountContext } from "./scrollContext";
import { motion } from "framer-motion";
const App = () => {
  const FooterSection = lazy(() => import("./FooterSection"));
  return (
    <div className=" snap-y snap-mandatory h-screen overflow-y-auto">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Suspense>
        <FooterSection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
