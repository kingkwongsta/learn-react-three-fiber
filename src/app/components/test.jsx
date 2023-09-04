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

  function createPositions() {
    let positions = [];

    for (let i = 0; i < 10; i++) {
      let object = {
        x: Math.random() * 14 + 1,
        y: Math.random() * 14 + 1,
        z: Math.random() * 14 + 1,
      };

      positions.push(object);
    }

    return positions;
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
    return createPositions().map((xPosition, index) => {
      return <Sphere xPosition={xPosition} key={index} />;
    });
  }

  return <>{renderSpheres()}</>;
}
