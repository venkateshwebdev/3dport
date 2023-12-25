import React, { useContext, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ScrollContext } from "../../scrollContext";

export function CoolMan(props) {
    const {setShowImage} = useContext(ScrollContext)
    const scroll = useScroll()
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/cool_man.glb");
  const { actions } = useAnimations(animations, group);

  useFrame(()=>{
    // console.log(actions)
    if(scroll.offset==0){
        setShowImage(false)
    }
    if(scroll.offset>0.05){
        setShowImage(true)
    }
    if(scroll.offset<0.1){
        actions["salute"].fadeOut().stop()   
    }
    if(scroll.offset>0.1 && scroll.offset<0.8){
        actions["salute"].fadeIn().play()
        actions["Pose"].fadeOut().stop()
        group.current.scale.x = 10-scroll.offset*8
        group.current.scale.z = 10-scroll.offset*8
        group.current.scale.y = 10-scroll.offset*8
        group.current.position.y = -16+scroll.offset*16
        group.current.rotation.y=0
    }
    if(scroll.offset>0.9){
        actions["salute"].fadeOut().stop()
        setShowImage(false)
    }
  })
  return (
    <group ref={group} {...props} dispos
    e={null} scale={10} position={[0,-16,0]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.966}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_178">
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["Wolf3D_Skin.003"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials["Wolf3D_Teeth.003"]}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Wolf3D_Body.003"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials["Wolf3D_Outfit_Bottom.003"]}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials["Wolf3D_Outfit_Footwear.003"]}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials["Wolf3D_Outfit_Top.003"]}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials["Wolf3D_Hair.003"]}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials["Wolf3D_Glasses.003"]}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials["Wolf3D_Eye.003"]}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials["Wolf3D_Eye.003"]}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <group name="Object_11_168" />
                  <group name="Object_13_169" />
                  <group name="Object_15_170" />
                  <group name="Object_17_171" />
                  <group name="Object_19_172" />
                  <group name="Object_21_173" />
                  <group name="Object_23_174" />
                  <group name="Object_25_175" />
                  <group name="Object_7_176" />
                  <group name="Object_9_177" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cool_man.glb");