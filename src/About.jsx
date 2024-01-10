import { motion } from "framer-motion";
import HeadingText from "./components/HeadingText";
const About = () => {
  return (
    <div
      id="About"
      className="min-h-screen w-full snap-center flex max-md:flex-col items-center justify-center transition-all ease-in scroll-smooth p-16 max-md:p-5"
    >
      {/* <HeadingText title={"ABOUT ME"} /> */}

      <div className="p-5 w-[50%] max-md:w-full">
        <motion.div initial={{y:100}} whileInView={{y:0}} className="text-8xl max-md:text-4xl font-bold z-0">Hey there! , I am <strong className="text-transparent" style={{WebkitTextStroke:"0.3px black"}}>Venkatesh</strong>.</motion.div>
        <motion.div initial={{y:100}} whileInView={{y:0,duration:0.3}} className="bg-[#eddfd8] z-50 text-3xl max-md:text-xl pt-5">
          I am a <span  className="underline underline-offset-4 hover:bg-black hover:text-white px-3 hover:transition-all">Full Stack Web Developer ⭷</span > passionate about crafting stunning,
          scalable websites. With expertise in diverse web technologies, I
          specialize in turning concepts into captivating online experiences.
          Let's collaborate for an extraordinary digital future!
        </motion.div>
      </div>
      <div className="p-5 w-[50%] max-md:w-full">

      </div>

    </div>
  );
};

export default About;
