import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateInnerCirclePosition = (outerCirclePosition) => {
    const offsetX = ((mousePosition.x - outerCirclePosition.x) / window.innerWidth) * 32 - 8;
    const offsetY = ((mousePosition.y - outerCirclePosition.y) / window.innerHeight) * 32 - 8;
    const maxOffset = 16; // Half of the inner circle's width/height

    // const clampedOffsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
    // const clampedOffsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));

    return { transform: `translate(${offsetX}px, ${offsetY}px)` };
  };

  return (
    <div
      id="About"
      className="relative min-h-screen footerCursor w-full snap-center flex max-md:flex-col items-center justify-center transition-all ease-in scroll-smooth p-16 max-md:p-5"
    >
      {/* <HeadingText title={"ABOUT ME"} /> */}

      <div className="p-5 w-[50%] max-md:w-full">
        <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} className="text-8xl max-md:text-4xl font-bold z-0">
          Hey there! , I am <strong className="text-transparent" style={{ WebkitTextStroke: "0.3px black" }}>Venkatesh</strong>.
        </motion.div>
        <motion.div initial={{ y: 100 }} whileInView={{ y: 0, duration: 0.3 }} className="bg-[#eddfd8] z-50 text-3xl max-md:text-xl pt-5">
          I am a <span className="underline underline-offset-4 hover:bg-black hover:text-white px-3 hover:transition-all">Full Stack Web Developer ⭷</span> passionate about crafting stunning,
          scalable websites. With expertise in diverse web technologies, I
          specialize in turning concepts into captivating online experiences.
          Let's collaborate for an extraordinary digital future!
        </motion.div>
      </div>
      <div className="p-5 h-full w-[50%] max-md:w-full items-center justify-center flex gap-6">
        <div className="h-32 w-32 rounded-full flex items-center justify-center border border-black relative">
          <div className="h-16 w-16 bg-black rounded-full " style={calculateInnerCirclePosition({ x: 0, y: 0 })}></div>
        </div>
        <div className="h-32 w-32 rounded-full flex items-center justify-center border border-black relative">
          <div className="h-16 w-16 bg-black rounded-full " style={calculateInnerCirclePosition({ x: 0, y: 0 })}></div>
        </div>
      </div>
      <div className="absolute right-5 bottom-5 text-2xl max-md:text-lg font-bold">#ME</div>
    </div>
  );
};

export default About;
