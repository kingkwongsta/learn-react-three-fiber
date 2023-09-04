import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef, state } from "react";
import { Mesh } from "three";

export default function Test() {
  const sphereRef = useRef();
  const boxRef = useRef();
  const groupRef = useRef();

  // useFrame((state, delta) => {
  //   groupRef.current.rotation.y += 0.001;
  //   sphereRef.current.rotation.y += 0.001;
  //   sphereRef.current.rotation.y += 0.001;
  //   boxRef.current.rotation.x += 0.001;
  //   boxRef.current.rotation.y += 0.001;
  // });

  return (
    <>
      <group ref={groupRef}>
        <mesh position={[-3, 1, 0]} scale={1.5} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" wireframe />
        </mesh>
        <mesh position-x={3} ref={boxRef}>
          <boxGeometry />
          <meshStandardMaterial color="purple" />
        </mesh>
      </group>
      <mesh rotation={[-Math.PI * 0.5, 0, 0]} position-y={-1} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
}
