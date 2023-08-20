import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

export default function Test() {
  const meshRef = useRef<Mesh>(null); // prettier-ignore

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh useRef={meshRef}>
      <PerspectiveCamera />
      <boxGeometry />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}
