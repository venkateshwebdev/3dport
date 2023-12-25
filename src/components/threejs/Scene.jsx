import { ContactShadows, Html, useScroll } from "@react-three/drei";
import { CoolMan } from "./Spot";

const Scene = () => {
    const scroll = useScroll()
  return (
    <>
      <ContactShadows blur={5} />
      <ambientLight />
      <CoolMan />
      <Html className="w-screen" center>
        <div className="w-full mt-[4300px] max-md:mt-[4450px] flex flex-col gap-5 items-center justify-center text-white p-10">
          <div className={`text-5xl italic text-transparent font-bold uppercase text-center flex flex-col ${scroll.offset>0.96&&"opacity-[0.2]"}`} style={{WebkitTextStroke:"1px white"}}>Venkatesh,<span>Web developer</span></div>
          <p className={`text-lg w-1/2 max-md:w-full ${scroll.offset>0.98&&"opacity-[0.2]"}`}>Hey there, I'm Venkatesh Sirigineedi, your friendly neighborhood web developer! I'm all about making cool stuff on the web. I've got the skills in Next.js and React.js to bring websites to life and make them super user-friendly. Not just that—I also know my way around the backend, making sure everything runs smoothly behind the scenes.</p>
          <p className={`text-lg w-1/2 max-md:w-full ${scroll.offset>0.99&&"opacity-[0.2]"}`}>And guess what? I'm not just into regular web stuff. I like to spice things up with 3D web development. Yup, that means I can make your website pop out of the screen a bit! So, if you want your website to be awesome and stand out, I'm your guy!</p>
        </div>
      </Html>
    </>
  );
};

export default Scene;
