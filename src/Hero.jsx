import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="h-screen relative w-full flex flex-col gap-5 items-center justify-center overflow-hidden snap-start">
      <div className="bg-[#ff0000] w-[104px] h-[300px] rounded-full blur-[250px] absolute top-0 right-0"></div>

      <div
        className="flex group max-md:w-full  flex-col text-8xl max-md:text-5xl font-bold uppercase text-center text-transparent relative"
        style={{ WebkitTextStroke: "1px black" }}
      >
        <motion.img
          initial={{ x: 500 }}
          animate={{ x: 0, transition: { type: "keyframes", duration: 2 } }}
          className="absolute -top-52 right-0 h-52 w-52"
          src="/58d9d0_70b5805c55a749279ed92a804f1f94ba~mv2.gif"
        />
        <span className="group-hover:text-black transition-colors duration-1000">
          Sirigineedi
        </span>
        <span className="text-black group-hover:text-transparent transition-colors duration-1000">
          Venkatesh
        </span>
      </div>
      {/* <div className="text-xl uppercase text-center font-semibold">Web Developer</div> */}
      <div
        className="text-4xl max-md:text-2xl absolute -left-5 uppercase font-bold text-transparent -rotate-90"
        style={{ WebkitTextStroke: "1px black" }}
      >
        portfolio
      </div>
      <div className=" absolute right-14 h-[1000px] w-1/4 border-[1px] border-black opacity-10 "></div>
    </div>
  );
};

export default Home;
