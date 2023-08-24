import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
export default function Icosahedron(props) {
  return (
    <>
      <mesh receiveShadow castShadow {...props}>
        <icosahedronGeometry />
      </mesh>
    </>
  );
}
