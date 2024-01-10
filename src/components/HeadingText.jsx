import { motion } from "framer-motion";

const HeadingText = ({ title }) => {
  return (
    <div
      className="text-6xl group max-md:text-2xl absolute italic h-fit left-0 hover:text-black uppercase font-bold text-transparent -rotate-90"
      style={{ WebkitTextStroke: "1px black" }}
    >
      {title}.
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="absolute top-0 hidden group-hover:block right-0 h-full w-7 bg-[#ff0000a0]"
      ></motion.div>
    </div>
  );
};

export default HeadingText;
