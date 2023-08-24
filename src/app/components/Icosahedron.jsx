import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
export default function Icosahedron({ position }) {
  return (
    <>
      <mesh receiveShadow castShadow>
        <icosahedronGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="lightblue" />
      </mesh>
    </>
  );
}
