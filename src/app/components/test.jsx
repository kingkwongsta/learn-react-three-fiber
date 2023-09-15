import { Canvas, useFrame, useLoader } from "@react-three/fiber";
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
import { useGLTF } from "@react-three/drei";
import Hamburger from "./hamburger";

export default function Test() {
  const sphereRef = useRef();
  const boxRef = useRef();
  const groupRef = useRef();

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
    // console.log(sphereRef);
  });

  return (
    <>
      {/* <Perf position="top-left" /> */}
      <Hamburger />
      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={100}
      >
        <planeGeometry ref={sphereRef} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
