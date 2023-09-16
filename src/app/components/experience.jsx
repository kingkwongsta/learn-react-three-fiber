"use client";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  TransformControls,
  useHelper,
  Stage,
  MeshReflectorMaterial,
  BakeShadows,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  PerspectiveCamera,
  PointLightHelper,
  SpotLightHelper,
  DirectionalLightHelper,
  TextureLoader,
  MathUtils,
} from "three";
import { useRef } from "react";
import Rings from "./Rings";
import Test from "./test";
import AE86 from "./models/ae86";
import CustomGeo from "./customgeo";
import * as THREE from "three";

function Scene() {
  const pointLight = useRef();
  const spotLight = useRef();
  const directionalLight = useRef();
  useHelper(pointLight, PointLightHelper, 0.5, "hotpink");
  useHelper(spotLight, SpotLightHelper, "teal");
  useHelper(directionalLight, DirectionalLightHelper, 5, "teal");

  // //circle around the scene - center focus
  // useFrame((state, delta) => {
  //   const angle = state.clock.getElapsedTime() / 10;
  //   state.camera.position.x = Math.sin(angle) * 20;
  //   state.camera.position.z = Math.cos(angle) * 20;
  //   state.camera.lookAt(0, 0, 0);
  // });

  return (
    <>
      <directionalLight
        castShadow
        shadow-mapSize={[2048, 2048]}
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={1.2} />
      {/* <Stage environment="city" intensity={1} /> */}
      {/* <Environment files="./sunset.hdr" background /> */}
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={[1.5]} makeDefault />
      <color args={[0xffffff]} attach="background" />
      {/* <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} /> */}
    </>
  );
}

//cool camera movement rig
// function Rig({ children }) {
//   const outer = useRef();
//   const inner = useRef();
//   useFrame(({ camera, clock }) => {
//     const t = clock.getElapsedTime();
//     outer.current.position.y = THREE.MathUtils.lerp(
//       outer.current.position.y,
//       0,
//       0.05
//     );
//     inner.current.rotation.y = Math.sin(t / 8) * Math.PI;
//     inner.current.position.z = 5 + -Math.sin(t / 2) * 20;
//     inner.current.position.y = -5 + Math.sin(t / 2) * 2;
//   });
//   return (
//     <group position={[0, -100, 0]} ref={outer}>
//       <group ref={inner}>{children}</group>
//     </group>
//   );
// }

export default function Experience() {
  return (
    <>
      <div className="h-[600px]">
        <Canvas
          shadows
          camera={{
            fov: 50,
            near: 0.1,
            far: 200,
            position: [10, 2, 5],
          }}
        >
          <Scene />
          <AE86 />

          {/* <Rig> */}
          {/* </Rig> */}
          {/* <Floor /> */}
          {/* 
          <axesHelper args={[10]} />
          <gridHelper args={[20, 10, 0xff0000, "grey"]} />
          <Floor position={[0, -2, 0]} />
          <Lambo />
          <Rings />
          <Perf position="bottom-right" /> */}
        </Canvas>
      </div>
    </>
  );
}
