import { motion } from "framer-motion";

const HeadingText = ({ title }) => {
  return (
    <motion.div
      initial={{ y: 0, attrX: 0.5 }}
      whileInView={{ y: 0, attrX: 1, transition: { duration: 0.5 } }}
      className="uppercase group relative italic text-6xl max-md:text-4xl text-center mt-36 text-transparent font-bold hover:text-black z-20 transition-colors h-fit duration-1000"
      style={{ WebkitTextStroke: "1px black" }}
    >
      {title.slice(0, 1)}
      <span>{title[1]}</span>
      {title.slice(2, title.length)}.
      <motion.div initial={{x:-40,opacity:0}} whileInView={{x:0,opacity:1}} className="absolute top-0 hidden group-hover:block right-0 h-full w-7 bg-[#ff0000a0]"></motion.div>
    </motion.div>
  );
};

export default HeadingText;
