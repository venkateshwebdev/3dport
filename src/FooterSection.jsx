import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const FooterSection = () => {
  const variants = {
    fadeIn: { y: 0, opacity: 1, transition: { type: "keyframes", delay: 0.3 } },
  };
  return (
    <div className="relative group h-screen w-full snap-center z-[999]  flex items-center justify-center overflow-hidden">                                                                                          
      <div className="absolute top-0 left-0 h-screen w-full text-transparent flex flex-col items-end p-16 pt-[150px] bg-[#252525]">
        <motion.a
          href="/"
          variants={variants}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "keyframes", delay: 0.2 },
          }}
          className="links text-9xl max-md:text-4xl overflow-hidden hover:underline underline-offset-8"
          style={{ WebkitTextStroke: "1px white" }}
        >
          <span className="text-4xl max-md:text-xl text-white px-10">01</span> 3D Portfolio
        </motion.a>
        <motion.a
          href="/"
          variants={variants}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "keyframes", delay: 0.4 },
          }}
          className="links text-9xl max-md:text-4xl overflow-hidden hover:underline underline-offset-8"
          style={{ WebkitTextStroke: "1px white" }}
        >
          <span className="text-4xl max-md:text-xl text-white px-10">02</span>LinkedIn
        </motion.a>
        <motion.a
          href="/"
          variants={variants}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "keyframes", delay: 0.6 },
          }}
          className="links text-9xl max-md:text-4xl overflow-hidden hover:underline underline-offset-8"
          style={{ WebkitTextStroke: "1px white" }}
        >
          <span className="text-4xl max-md:text-xl text-white px-10">03</span>Github
        </motion.a>
      </div>
      {/* <div className="absolute self-center rounded-full bg-[#eddfd8] p-5">
        <img src="/rb-crow.gif" className="h-[150px]" alt="crow" />
      </div> */}
      <div className="absolute top-0 left-0 text-white p-10 text-4xl max-md:text-2xl w-full max-md:text-center z-50">Venkatesh</div>
      <div className="absolute h-[2000px] w-[30%] border-2 border-gray-50 -left-10"></div>
      <div className="absolute h-[150px] max-md:bg-[#252525] w-[2000px] border-2 border-gray-50 -top-10"></div>
    </div>
  );
};

export default FooterSection;
