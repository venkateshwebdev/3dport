import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ScrollContext, ScrollCountContext } from "./scrollContext";

const App = () => {
  const [showImage,setShowImage] = useState(false)
  const [scrollValue,setScrollValue] = useState(0)
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto">
    <Navbar />
    <Home />
    <ScrollCountContext.Provider value={{scrollValue,setScrollValue}}>
    <ScrollContext.Provider value={{showImage,setShowImage}}>
    <About />
    </ScrollContext.Provider>
    </ScrollCountContext.Provider>
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  ); 
}
 
export default App;