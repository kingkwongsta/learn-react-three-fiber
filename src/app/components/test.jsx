import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

export default function Test() {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const boxRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh position={[-4, 1, 0]} scale={1.5}>
        <sphereGeometry ref={cubeRef} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position-x={4}>
        <boxGeometry ref={sphereRef} />
        <meshStandardMaterial color="purple" />
      </mesh>
      <mesh rotation={[-Math.PI * 0.5, 0, 0]} position-y={-1} scale={10}>
        <planeGeometry ref={boxRef} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}
