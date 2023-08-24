"use client";
import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
} from "three";
import * as THREE from "three";
import Test from "./components/test";
import Experience from "./components/experience";
import { Fish } from "./components/fish";
import Box from "./components/box";
import Icosahedron from "./components/Icosahedron";

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <cameraHelper args={[camera]} />;
}

function Scene() {
  const pointLight = useRef();
  const spotLight = useRef();
  useHelper(pointLight, PointLightHelper, 0.5, "hotpink");
  useHelper(spotLight, SpotLightHelper, "teal");
  return (
    <>
      <pointLight
        ref={pointLight}
        color="#fff"
        position={[1, 2.5, 0]}
        intensity={5}
      />
      {/* <spotLight
        intensity={2}
        position={[4, 5, 2]}
        ref={spotLight}
        angle={0.5}
        distance={10}
      /> */}
      {/* <ambientLight intensity={2} color={0xffffff} /> */}
    </>
  );
}

export default function Home() {
  return (
    <div className="h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <Scene />
        <axesHelper args={[10]} />
        <gridHelper args={[20, 20, 0xff0000, "teal"]} />
        {/* <OrbitControls
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
        /> */}
        <OrbitControls />
        {/* <directionalLight color={0xffffff} intensity={1} /> */}
        {/* <Box position={[-1.75, -1.75, 0]} />
        <Box position={[1.75, -1.75, 0]} />
        <Box position={[1.75, 1.75, 0]} />
        <Box position={[-1.75, 1.75, 0]} /> */}
        <Icosahedron />
        {/* <Experience /> */}
        <Stats />
        <Perf position="top-right" />
      </Canvas>
    </div>
  );
}
