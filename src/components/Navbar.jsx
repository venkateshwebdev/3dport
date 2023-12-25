import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [enableNavbar, setEnableNavbar] = useState(false);
  return (
    <div className="h-36 fixed w-full flex items-center justify-between px-10 z-50">
      <div className="text-xl font-bold uppercase">Venkatesh</div>
      <div
        className={`flex flex-col gap-2 z-50 transition-all duration-500 cursor-[url(hand.cur),_pointer] ${
          enableNavbar && "rotate-45"
        }`}
        onClick={() => setEnableNavbar((prev) => !prev)}
      >
        <span className="h-1 w-7 bg-black"></span>
        <span
          className={`h-1 w-7 bg-black transition-all duration-500  ${
            enableNavbar && "rotate-90 -translate-y-3"
          }`}
        ></span>
      </div>
      <AnimatePresence>
        {enableNavbar && (
          <motion.div
            initial={{ x: 1000, opacity: 0 }}
            exit={{
              x: 1000,
              opacity: 0,
              transition: { type: "keyframes", duration: 0.5 },
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { type: "keyframes", duration: 0.5 },
            }}
            className="absolute uppercase text-3xl max-md:text-xl items-center text-left justify-between shadow-2xl flex-col flex z-20 h-screen w-1/2 max-md:w-[80%] top-0 right-0 bg-gray-100 p-16 py-32 rounded-l-3xl"
          >
            {/* <div className="h-96 w-96 rounded-full border-[1px] border-black absolute -bottom-16 -right-16">
            <div className="h-80 w-80 rounded-full border-[1px] border-black"></div>
            </div> */}
            {/* <img src="/pow.png" className="absolute opacity-10" /> */}
            <motion.a initial={{x:100,opacity:0}} animate={{x:0,opacity:1,transition:{type:"keyframes",delay:.3}}} exit={{x:100,opacity:0}} href="#About">About</motion.a>
            <motion.a initial={{x:100,opacity:0}} animate={{x:0,opacity:1,transition:{type:"keyframes",delay:.4}}} exit={{x:100,opacity:0}} href="#Skills">Skills</motion.a>
            <motion.a initial={{x:100,opacity:0}} animate={{x:0,opacity:1,transition:{type:"keyframes",delay:.5}}} exit={{x:100,opacity:0}} href="#Projects">Projects</motion.a>
            <motion.a initial={{x:100,opacity:0}} animate={{x:0,opacity:1,transition:{type:"keyframes",delay:.6}}} exit={{x:100,opacity:0}} href="#Contact">Contact</motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
