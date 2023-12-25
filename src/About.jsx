import { OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import Scene from "./components/threejs/Scene";
const About = () => {

    return ( 
        <motion.div initial={{opacity:0}} animate={{opacity:1}} whileInView={{opacity:1,transition:{type:"keyframes",duration:"2"}}} className=" about h-screen w-full bg-red-900 snap-start">
            <Canvas className="w-full h-full about">
                <ScrollControls distance={3}>
                    <Scroll>
                    <Scene />
                    </Scroll>
                </ScrollControls>
                {/* <OrbitControls enableZoom={false}  /> */}
            </Canvas>
        </motion.div>
    );
}
 
export default About;