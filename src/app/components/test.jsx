import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

export default function Test() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={75} position={[0, 0, 2]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial></meshStandardMaterial>
      </mesh>
    </Canvas>
  );
}
