import About from "./About";
import Contact from "./Contact";
import Home from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-auto">
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  ); 
}
 
export default App;