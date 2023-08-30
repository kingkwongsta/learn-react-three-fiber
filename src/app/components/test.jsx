import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

export default function Test() {
  return (
    <>
      <mesh position-x={-4}>
        <sphereGeometry args={[1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position-x={4}>
        <boxGeometry args={[1]} />
        <meshStandardMaterial color="purple" />
      </mesh>
      <mesh rotation={[-Math.PI * 0.5, 0, 0]} position-y={-1}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}
