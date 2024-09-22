// const Skills = () => {
//   const skills = [
//     "Skill 01",
//     "Skill 02",
//     "Skill 03",
//     "Skill 04",
//     "Skill 05",
//     "Skill 06",
//     "Skill 07",
//     "Skill 08",
//     "Skill 09",
//     "Skill 10",
//     "Skill 11",
//     "Skill 12",
//   ];

//   return (
//     <div
//       id="Skills"
//       className="h-screen w-full relative snap-center flex flex-col items-center justify-center p-5 transition-all"
//     >
//       {/* <HeadingText title={"SKILLS"} /> */}
//       <div className="absolute right-5 bottom-5 text-2xl max-md:text-lg font-bold">#SKILLS</div>
//       {/* <div className="flex flex-wrap justify-center items-center gap-4">
//         {skills.map((skill, index) => (
//           <div key={index} className="relative flex flex-col items-center">
//             <div className="text-xl font-bold">{skill}</div>
//             {index < skills.length - 1 && (
//               <svg className="w-10 h-1">
//                 <path d="M0,0 C2,2 6,-2 10,0" stroke="black" fill="transparent" />
//               </svg>
//             )}
//           </div>
//         ))}
//       </div> */}
//       <div className="grid w-full h-full grid-cols-5 grid-rows-7">
//       <div className=" h-full w-full"></div>
//         <div className=" h-full w-full"></div>
//         <div className=" h-full w-full"></div>
//         <div className=" h-full w-full"></div>
//         <div className=" h-full w-full"></div>

//         <div className=" h-full w-full border border-black flex items-center justify-center">Html</div>
//         <div className=" h-full w-full border border-black flex items-center justify-center">css</div>
//         <div className=" h-full w-full border border-black flex items-center justify-center" >js</div>

//         <div className=" h-full w-full border border-black"></div>        <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>

//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>        <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>

//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>        <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full border border-black"></div>
//         <div className=" h-full w-full"></div>
//         <div className=" h-full w-full "></div>

//         <div className=" h-full w-full "></div>
//         <div className=" h-full w-full "></div>
//         <div className=" h-full w-full "></div>

        
        
      
//       </div>
//     </div>
//   );
// };

// export default Skills;
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
// import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

import  { Children, useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodeDefaults = {
  style: {
    borderRadius: '100%',
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const initialNodes = [
  {
    id: 'hidden-1',
    data: { label: <FaHtml5 size={20} />},
    position: { x: 250, y: 5 }
    ,...nodeDefaults,
  },
  { id: 'hidden-2', data: { label: <FaCss3 size={20} /> }, position: { x: 100, y: 100 },...nodeDefaults },
  { id: 'hidden-3', data: { label: <FaJsSquare size={20} /> }, position: { x: 400, y: 100 },...nodeDefaults },
  { id: 'hidden-4', data: { label: <FaReact size={20} /> }, position: { x: 400, y: 200 },...nodeDefaults },
  { id: 'hidden-5', data: { label: <FaNodeJs size={20} /> }, position: { x: 300, y: 260 },...nodeDefaults },
  { id: 'hidden-6', data: { label: <FaGithub size={20} /> }, position: { x: 460, y: 240 },...nodeDefaults },
  { id: 'hidden-7', data: { label: <TbBrandReactNative size={20} /> }, position: { x: 200, y: 200 },...nodeDefaults },
  // { id: 'hidden-4', data: { label: <FaReact size={20} /> }, position: { x: 400, y: 200 },...nodeDefaults },
  // { id: 'hidden-4', data: { label: <FaReact size={20} /> }, position: { x: 400, y: 200 },...nodeDefaults },

];

const initialEdges = [
  { id: 'hidden-e1-2', source: 'hidden-1', target: 'hidden-2' },
  { id: 'hidden-e1-3', source: 'hidden-1', target: 'hidden-3' },
  { id: 'hidden-e3-4', source: 'hidden-3', target: 'hidden-4' },
  { id: 'hidden-e3-5', source: 'hidden-3', target: 'hidden-5' },

];


const HiddenFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    [],
  );


  return (
        <div
      id="Skills"
      className="h-screen w-full relative snap-center z-[999] flex flex-col items-center justify-center  pb-16 transition-all"
    >
    <ReactFlow
    nodes={nodes}
    edges={edges}
    onNodesChange={onNodesChange}
    onEdgesChange={onEdgesChange}
    onConnect={onConnect}
    fitView
  >
<Background variant='dots' color="black" />
    </ReactFlow>
           <div className="absolute right-5 bottom-5 text-2xl max-md:text-lg font-bold">#SKILLS</div>
          <div className="absolute bottom-5   text-xl max-md:text-lg font-bold">Scroll Here </div>

    </div>
  );
};

export default HiddenFlow;



