// import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const images = ["/magnimus.png", "/argus.png", "/bike.png", "/sneaker.png"];
  const [modal, setModal] = useState(0);
  return (
    <div
      id="Projects"
      className="min-h-screen w-full relative snap-center flex flex-col  items-center justify-center transition-all overflow-hidden"
    >
      <div className="h-full w-full flex gap-16 overflow-x-auto transition-all duration-1000 noScrollBar overflow-hidden py-16 px-[25%]">
        {images.map((item,i) => (
          <>
            <div
              key={i}
              className="h-[500px] bg-[#00ff0020]  hover:transition-all hover:duration-500 transition-all duration-500 relative w-[350px] flex-shrink-0 border-2 shadow-lg border-black "
              onMouseOver={() => setModal(i)}
            >
              {/* <div
                className="text-3xl text-transparent font-bold absolute top-0 rotate-90 -right-10 z-20"
                style={{ WebkitTextStroke: "1px black" }}
              >
                ArgusBee
              </div> */}
              <img src={item} className="h-full w-full object-cover" />
              <div
                className="text-5xl text-transparent font-bold absolute -bottom-5 -left-5 z-20"
                style={{ WebkitTextStroke: "1px black" }}
              >
                #00{i+1}
              </div>
            </div>
            {/* {modal === item && "Hello I am Venkatesh"} */}
          </>
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
