"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useTexture,
  Stats,
  useHelper,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  DoubleSide,
  Mesh,
  PerspectiveCamera,
  PointLightHelper,
  SpotLightHelper,
  DirectionalLightHelper,
} from "three";
import { useRef } from "react";
import Floor from "./Floor";
import Lambo from "./Lambo";
import Rings from "./Rings";

function Scene() {
  const pointLight = useRef();
  const spotLight = useRef();
  const directionalLight = useRef();
  useHelper(pointLight, PointLightHelper, 0.5, "hotpink");
  useHelper(spotLight, SpotLightHelper, "teal");
  useHelper(directionalLight, DirectionalLightHelper, 5, "blue");
  return (
    <>
      <Environment files="./sunset.hdr" background />
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={[1.5]} />
      <color args={[0x000000]} attach="background" />
      <spotLight
        color={0xffffff}
        intensity={1.5}
        position={[5, 5, 0]}
        angle={0.6}
        penumbra={0.5}
        castShadow
        ref={spotLight}
      />
      {/* <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} /> */}
    </>
  );
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <cameraHelper args={[camera]} />;
}

export default function Experience() {
  return (
    <>
      <div className="h-[600px]">
        <Canvas shadows camera={{ position: [3, 2, 5], fov: 50 }}>
          <Scene />
          <axesHelper args={[10]} />
          <gridHelper args={[20, 10, 0xff0000, "grey"]} />
          {/* <OrbitControls
  minAzimuthAngle={-Math.PI / 4}
  maxAzimuthAngle={Math.PI / 4}
  minPolarAngle={Math.PI / 6}
  maxPolarAngle={Math.PI - Math.PI / 6}
  /> */}
          <Floor position={[0, -2, 0]} />
          <Lambo />
          <Rings />
          {/* <Icosahedron material={new THREE.MeshBasicMaterial({ map: texture })} /> */}
          {/* <Stats /> */}
          <Perf position="bottom-right" />
        </Canvas>
      </div>
    </>
  );
}
