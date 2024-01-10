import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Scene from "./components/threejs/Scene";
import { Suspense, useContext, useEffect, useState } from "react";
import FallbackForThree from "./components/Fallback";
import HeadingText from "./components/HeadingText";
import captain from "/hero.png";
import thor from "/pow.png";
import omg from "/omg.png";
import boom from "/boom.png";
import sw from "/superwoman.jpg";
import spi from "/spi.webp";
import bat from "/batman.webp";
import sm from "/superman.webp";
import vamp from "/vamp.webp";
import spi2 from "/spi2.webp";
import avg from "/avengers.webp";
import { ScrollContext, ScrollCountContext } from "./scrollContext";
const About = () => {
  const [image, setImage] = useState();
  const imageList = [sw, omg, spi, thor, bat, boom, sm, vamp, spi2, avg];
  const [counter, setCounter] = useState(0);
  const { showImage, setShowImage } = useContext(ScrollContext);
  const { scrollValue } = useContext(ScrollCountContext);
  useEffect(() => {
    if (showImage) {
      const interval = setInterval(() => {
        console.log("called", counter);
        setImage(imageList[counter]);
        setCounter((prev) => (prev + 1) % imageList.length);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [showImage, counter, imageList]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{
        opacity: 1,
        transition: { type: "keyframes", duration: "2" },
      }}
      className={`about relative h-screen w-full bg-red-900 snap-start bg-cover`}
    >
      {showImage && (
        <img
          src={image}
          className="absolute w-full h-full object-cover opacity-25"
        />
      )}
      {!showImage && (
        <img
          src={captain}
          className="absolute w-full h-full object-cover opacity-25"
        />
      )}
      {/* <HeadingText title={"About"} /> */}

      {scrollValue > 0.9 && (
        <motion.div initial={{y:1000,opacity:0}} animate={{y:0,opacity:1,transition:{type:"keyframes",duration:.2}}}  className="w-full h-full absolute flex flex-col gap-5 items-center z-50 justify-center text-white p-10">
          <div
            className={`text-5xl italic text-transparent font-bold uppercase text-center flex flex-col ${
              scroll.offset > 0.96 && "opacity-[0.2]"
            }`}
            style={{ WebkitTextStroke: "1px white" }}
          >
            Venkatesh,<span>Web developer</span>
          </div>
          <p
            className={`text-lg w-1/2 max-md:w-full ${
              scroll.offset > 0.98 && "opacity-[0.2]"
            }`}
          >
            Hey there, I'm Venkatesh Sirigineedi, your friendly neighborhood web
            developer! I'm all about making cool stuff on the web. I've got the
            skills in Next.js and React.js to bring websites to life and make
            them super user-friendly. Not just that—I also know my way around
            the backend, making sure everything runs smoothly behind the scenes.
          </p>
          <p
            className={`text-lg w-1/2 max-md:w-full ${
              scroll.offset > 0.99 && "opacity-[0.2]"
            }`}
          >
            And guess what? I'm not just into regular web stuff. I like to spice
            things up with 3D web development. Yup, that means I can make your
            website pop out of the screen a bit! So, if you want your website to
            be awesome and stand out, I'm your guy!
          </p>
        </motion.div>
      )}

      <Suspense fallback={<FallbackForThree />}>
        <Canvas className="w-full h-full about">
          <ScrollControls distance={3}>
            <Scroll>
              <Scene />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </Suspense>
    </motion.div>
  );
};

export default About;
