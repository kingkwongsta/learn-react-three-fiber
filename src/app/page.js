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
    </>
  );
}

export default function Home() {
  const texture = useLoader(THREE.TextureLoader, "./textures/test1.png");

  return (
    <div className="h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <Scene />
        <axesHelper args={[10]} />
        <gridHelper args={[20, 10, 0xff0000, "grey"]} />
        {/* <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        /> */}
        <OrbitControls />
        <Floor position={[0, -2, 0]} />
        <MushroomKing />
        {/* <Icosahedron material={new THREE.MeshBasicMaterial({ map: texture })} /> */}
        <Stats />
        <Perf position="top-right" />
      </Canvas>
    </div>
  );
}
