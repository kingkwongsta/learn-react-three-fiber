import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, TransformControls } from "@react-three/drei";
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
      <mesh ref={sphereRef}>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <TransformControls object={sphereRef} mode="scale" />
      <TransformControls object={sphereRef} mode="rotate" />
    </>
  );
}
