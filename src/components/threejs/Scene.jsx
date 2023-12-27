import { ContactShadows, Html, useScroll } from "@react-three/drei";
import { CoolMan } from "./Spot";

const Scene = () => {
    const scroll = useScroll()
  return (
    <>
      <ContactShadows blur={5} />
      <ambientLight />
      <CoolMan />
    </>
  );
};

export default Scene;
