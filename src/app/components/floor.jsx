import { MeshReflectorMaterial } from "@react-three/drei";

export default function Floor({ position }) {
  return (
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial />
    </mesh>
  );
}
