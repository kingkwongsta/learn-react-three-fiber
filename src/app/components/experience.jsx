"use client";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useHelper,
  Stage,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  PerspectiveCamera,
  PointLightHelper,
  SpotLightHelper,
  DirectionalLightHelper,
} from "three";
import { useRef } from "react";
import Floor from "./Floor";
import Lambo from "./Lambo";
import Rings from "./Rings";
import Test from "./test";
import AE86 from "./ae86";
import CustomGeo from "./customgeo";

function Scene() {
  const pointLight = useRef();
  const spotLight = useRef();
  const directionalLight = useRef();
  useHelper(pointLight, PointLightHelper, 0.5, "hotpink");
  useHelper(spotLight, SpotLightHelper, "teal");
  useHelper(directionalLight, DirectionalLightHelper, 5, "blue");

  // useFrame((state, delta) => {
  //   const angle = state.clock.getElapsedTime() / 10;
  //   state.camera.position.x = Math.sin(angle) * 40;
  //   state.camera.position.z = Math.cos(angle) * 40;
  //   state.camera.lookAt(0, 0, 0);
  // });

  return (
    <>
      <directionalLight
        position={[1, 5, 3]}
        ref={directionalLight}
        intensity={3}
      />
      <Stage environment="city" intensity={1} />
      {/* <Environment files="./sunset.hdr" background /> */}
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={[1.5]} />
      <color args={[0x000000]} attach="background" />
      {/* <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} /> */}
    </>
  );
}

// function CameraHelper() {
//   const camera = new PerspectiveCamera();
//   return <cameraHelper args={[camera]} />;
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
          <Floor />
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
