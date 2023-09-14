import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Text3D,
  MeshReflectorMaterial,
} from "@react-three/drei";
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

  // function createPositions() {
  //   let positions = [];

  //   for (let i = 0; i < 30; i++) {
  //     let object = {
  //       x: Math.random() * 9 + 1,
  //       y: Math.random() * 20 + 1,
  //       z: Math.random() * 9 + 1,
  //     };
  //     positions.push(object);
  //   }
  //   console.log(positions);
  //   return positions;
  // }

  // function Sphere({ x, y, z }) {
  //   return (
  //     <>
  //       <mesh position={(x, y, z)}>
  //         <sphereGeometry args={[0.5, 32, 32]} />
  //         <meshStandardMaterial color="hotpink" />
  //       </mesh>
  //     </>
  //   );
  // }

  useFrame((state, delta) => {
    boxRef.current.rotation.y += delta * 0.2;
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow ref={boxRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
