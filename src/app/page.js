"use client";
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Home() {
  return (
    <>
      <div>
        <h2>HELLO WORLD</h2>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <mesh
            onClick={(e) => console.log("click")}
            onContextMenu={(e) => console.log("context menu")}
            onDoubleClick={(e) => console.log("double click")}
            onWheel={(e) => console.log("wheel spins")}
            onPointerUp={(e) => console.log("up")}
            onPointerDown={(e) => console.log("down")}
            onPointerOver={(e) => console.log("over")}
            onPointerOut={(e) => console.log("out")}
            onPointerEnter={(e) => console.log("enter")}
            onPointerLeave={(e) => console.log("leave")}
            onPointerMove={(e) => console.log("move")}
            onPointerMissed={() => console.log("missed")}
            onUpdate={(self) => console.log("props have been updated")}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="hotpink" transparent />
          </mesh>
        </Canvas>
        <h2>HELLO WORLD</h2>
      </div>
    </>
  );
}
