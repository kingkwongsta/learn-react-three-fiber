"use client";
import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { DoubleSide, Mesh, PerspectiveCamera } from "three";
import * as THREE from "three";
import Test from "./components/test";
import Experience from "./components/experience";
import { Fish } from "./components/fish";
import Box from "./components/box";

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <cameraHelper args={[camera]} />;
}

export default function Home() {
  return (
    <div className="h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 30 }}>
        <axesHelper args={[10]} />
        <Box />
        {/* <Experience /> */}
      </Canvas>
    </div>
  );
}
