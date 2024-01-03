import { useEffect, useState } from "react";
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
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);
    // document.addEventListener("click",updateSize)

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);


  return (
    <div className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-auto">
      <div
      onClick={(e)=>e.stopPropagation()}
        className={`absolute max-sm:hidden h-[50px] w-[50px] rounded-full border-2 border-black top-0 left-0 transition-all duration-75 `}
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
        }}
      ></div>
      {/* <div
        className={`absolute h-[10px] w-[10px] blur-[1px] rounded-full bg-gray-500 top-0 left-0 transition-all duration-[30ms]`}
        style={{
          transform: `translate(${position.x-5}px, ${position.y-5}px)`,
        }}
      ></div> */}
      <Navbar />
      <Home />
      {/* <ScrollCountContext.Provider value={{scrollValue,setScrollValue}}>
    <ScrollContext.Provider value={{showImage,setShowImage}}>
    <About />
    </ScrollContext.Provider>
    </ScrollCountContext.Provider> */}
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
