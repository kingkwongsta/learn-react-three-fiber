"use client";
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function MyRotatingBox() {
  const myMesh = React.useRef();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh
      scale={active ? 3 : 5}
      onClick={() => setActive(!active)}
      ref={myMesh}
    >
      <boxGeometry />
      <meshPhongMaterial color="royalblue" />
    </mesh>
  );
}

export default function Home() {
  return (
    <>
      <div>
        <h2>HELLO WORLD</h2>
        <Canvas>
          <MyRotatingBox />
          <ambientLight intensity={0.1} />
          <directionalLight />
        </Canvas>
        <h2>HELLO WORLD</h2>
        <button onClick={({ clock }) => console.log(clock.getElapsedTime())}>
          Click me
        </button>
      </div>
    </>
  );
}
