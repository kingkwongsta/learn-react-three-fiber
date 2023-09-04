import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef, state } from "react";
import { Mesh } from "three";

export default function Test() {
  const sphereRef = useRef();
  const boxRef = useRef();
  const groupRef = useRef();

  const xPositions = [2, 4, 6, 8, 10];

  // useFrame((state, delta) => {
  //   groupRef.current.rotation.y += 0.001;
  //   sphereRef.current.rotation.y += 0.001;
  //   sphereRef.current.rotation.y += 0.001;
  //   boxRef.current.rotation.x += 0.001;
  //   boxRef.current.rotation.y += 0.001;
  // });

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
    return xPositions.map((xPosition) => {
      return <Sphere xPosition={xPosition} />;
    });
  }

  return <>{renderSpheres()}</>;
}
