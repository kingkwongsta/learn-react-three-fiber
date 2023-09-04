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

  //function to create an array of x positions - 10 positions with 2 units between each
  function createXPositions() {
    let xPositions = [];
    for (let i = 0; i < 10; i++) {
      xPositions.push(i * 2);
    }
    return xPositions;
  }

  function Sphere({ xPosition }) {
    return (
      <>
        <mesh position-x={xPosition}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </>
    );
  }

  function renderSpheres() {
    return createXPositions().map((xPosition, index) => {
      return <Sphere xPosition={xPosition} key={index} />;
    });
  }

  return <>{renderSpheres()}</>;
}
