"use client";
import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

function Experience() {
  const map = useTexture("world.jpg");

  return (
    <>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[5, 32, , 32]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
}

export default function Home() {
  return (
    <Canvas
      shadows
      camera={{ position: [2, 2, 2], fov: 90, near: 3 }}
      rotation={[30, 0, 0]}
    >
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}
