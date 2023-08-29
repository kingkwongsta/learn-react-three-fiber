"use client";
import React, { useState, useRef } from "react";
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
import * as THREE from "three";
import Test from "./components/test";
import Experience from "./components/experience";
import { Fish } from "./components/fish";
import Box from "./components/box";
import Birb from "./components/birb";
import MushroomKing from "./components/MushroomKing";
import Icosahedron from "./components/Icosahedron";
import Floor from "./components/floor";
import Lambo from "./components/lambo";
import Rings from "./components/rings";

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <cameraHelper args={[camera]} />;
}

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

export default function Home() {
  const texture = useLoader(THREE.TextureLoader, "./textures/test1.png");

  return (
    <div className="h-[400px]">
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
  );
}
