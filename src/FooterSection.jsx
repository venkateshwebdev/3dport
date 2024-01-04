import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const FooterSection = () => {
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
  const variants = {
    fadeIn: { y: 0, opacity: 1, transition: { type: "keyframes", delay: 0.3 } },
  };
  return (
    <div className="relative group h-screen w-full snap-center z-[999] snap-proximity flex items-center justify-center overflow-hidden cursor-none">
      <img
        className="absolute top-0 left-0 z-[900] h-[50px] w-[50px] overflow-hidden invert"
        src="/mouse.png"
        style={{
          transform: `translate(${position.x+5}px, ${position.y+5}px)`,
        }}
      />
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
          className="text-9xl overflow-hidden hover:underline underline-offset-8 cursor-none"
          style={{ WebkitTextStroke: "1px white" }}
        >
          <span className="text-4xl text-white px-10">01</span> 3D Portfolio
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
          className="text-9xl overflow-hidden hover:underline underline-offset-8"
          style={{ WebkitTextStroke: "1px white" }}
        >
          <span className="text-4xl text-white px-10">02</span>LinkedIn
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
          className="text-9xl overflow-hidden hover:underline underline-offset-8"
          style={{ WebkitTextStroke: "1px white" }}
        >
          <span className="text-4xl text-white px-10">03</span>Github
        </motion.a>
      </div>
      <div className="absolute self-center rounded-full bg-[#eddfd8] p-5">
        <img src="/rb-crow.gif" className="h-[150px]" alt="crow" />
      </div>
      <div className="absolute h-[2000px] w-[500px] border-2 border-gray-50 -left-10"></div>
      <div className="absolute h-[150px] w-[2000px] border-2 border-gray-50 -top-10"></div>
    </div>
  );
};

export default FooterSection;
