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
import spi from "/spi.webp"
import bat from "/batman.webp"
import sm from "/superman.webp"
import vamp from "/vamp.webp"
import spi2 from "/spi2.webp"
import avg from "/avengers.webp"
import { ScrollContext } from "./scrollContext";
const About = () => {
  const [image, setImage] = useState();
  const imageList = [sw, omg,spi,thor,bat,boom,sm,vamp,spi2,avg];
  const [counter, setCounter] = useState(0);
  const { showImage, setShowImage } = useContext(ScrollContext);
  useEffect(() => {
    if (showImage) {
      const interval = setInterval(() => {
        console.log("called", counter);
        setImage(imageList[counter]);
        setCounter((prev) => (prev + 1) % imageList.length);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [showImage,counter, imageList]);

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
