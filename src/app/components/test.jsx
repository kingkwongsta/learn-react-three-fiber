import { Canvas } from "@react-three/fiber";

export default function Test() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial></meshStandardMaterial>
      </mesh>
    </Canvas>
  );
}
