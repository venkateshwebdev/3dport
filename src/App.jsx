import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ScrollContext } from "./scrollContext";

const App = () => {
  const [showImage,setShowImage] = useState(false)
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto">
    <Navbar />
    <Home />
    <ScrollContext.Provider value={{showImage,setShowImage}}>
    <About />
    </ScrollContext.Provider>
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  ); 
}
 
export default App;