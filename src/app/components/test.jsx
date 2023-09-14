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

  return (
    <>
      <PivotControls anchor={[1, 0, 0]}>
        <mesh ref={sphereRef}>
          <boxGeometry />
          <meshStandardMaterial color="hotpink" />
          <Html distanceFactor={8}>
            <h1>Test</h1>
          </Html>
        </mesh>
      </PivotControls>
      <PivotControls>
        <Text font="./SuperMarioBros.woff" color="blue">
          Hello World
          <meshNormalMaterial />
        </Text>
        {/* <TransformControls object={sphereRef} mode="scale" />
      <TransformControls object={sphereRef} mode="rotate" /> */}
      </PivotControls>
      <mesh rotation-x={-Math.PI * 0.5} position-y={-5}>
        <planeGeometry args={[100, 100]} />
      </mesh>
    </>
  );
}
