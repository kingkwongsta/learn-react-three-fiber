import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Experience() {
  const map = useTexture("textures/world.jpg");
  return (
    <>
      <ambientLight intensity={2} color={0xffffff} />
      {/* <pointLight position={[10, 10, 10]} /> */}
      <directionalLight color={0xffffff} intensity={1} />
      <Environment preset="sunset" />
      <OrbitControls />
      <mesh>
        <sphereGeometry args={[5, 64, 64]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
}
