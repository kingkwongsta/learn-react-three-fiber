"use client";
import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useTexture,
  Stats,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
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
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
        />
        <Box position={[-0.75, -0.75, 0]} />
        <Box position={[0.75, -0.75, 0]} />
        <Box position={[0.75, 0.75, 0]} />
        <Box position={[-0.75, 0.75, 0]} />
        {/* <Experience /> */}
        <Stats />
        <Perf position="top-right" />
      </Canvas>
    </div>
  );
}
