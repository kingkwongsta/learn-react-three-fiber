"use client";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <div>
        <h2>HELLO WORLD</h2>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
        <h2>HELLO WORLD</h2>
      </div>
    </>
  );
}
