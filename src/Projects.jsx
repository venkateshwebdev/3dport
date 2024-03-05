// import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [modal, setModal] = useState(0);
  return (
    <div
      id="Projects"
      className="min-h-screen w-full relative snap-center flex flex-col  items-center justify-center transition-all overflow-hidden"
    >
      <div className="h-full w-full flex gap-10 overflow-x-auto noScrollBar overflow-hidden py-7 px-[25%]">
        {projects.map((item) => (
          <div
            key={item}
            className="h-[400px] bg-[#00ff0020] skew-x-3 skew-y-6 relative w-[300px] flex-shrink-0 border-2 shadow-lg border-black " onClick={()=>setModal(item)}
          >
            {/* <img src="public/spi2.webp" className="h-full w-full" /> */}
            <div className="text-5xl text-transparent font-bold absolute -bottom-5 -left-5 z-20" style={{WebkitTextStroke:"1px black"}}>#00{item}</div>
          </div>
        ))}
      </div>
      <div className="absolute right-5 bottom-5 text-2xl max-md:text-lg font-bold">
        #PROJECTS
      </div>
      {/* <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ y: 1000, opacity: 0 }}
            exit={{ y: 1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute top-0 h-screen bg-[#25252590] w-full backdrop-blur-md z-[999]"
          ></motion.div>
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default Projects;
