import { useEffect, useRef } from "react";
import HeadingText from "./components/HeadingText";

const Projects = () => {
  const data = [1, 2, 3, 5, 6, 7, 89, 0];
  return (
    <div
      id="Projects"
      className="min-h-screen w-full relative snap-center flex flex-col  items-center justify-center p-5 transition-all overflow-hidden"
    >
      {/* <HeadingText title={"PROJECTS"} /> */}
      <div className="h-full w-full">
        {/* {data.map((e) => (
          <div className="min-h-screen w-full flex py-[10%] px-[5%] ">
            <div className="w-[50%] h-full">Hello</div>
            <div className="border-4 border-black w-[50%] relative z-10 rounded-md">
              <div className=" absolute text-6xl text-black bottom-0 z-30">
                0{e}
              </div>
              <div className="h-full w-full bg-red-600 absolute shadow-xl -left-1 top-1 z-0 rounded-md"></div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Projects;
