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
            className="absolute shadow-2xl z-20 h-screen w-1/2 max-md:w-[80%] top-0 right-0 bg-white rounded-l-3xl"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
