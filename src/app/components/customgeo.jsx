import React from "react";

export default function CustomGeo() {
  const verticesCount = 10 * 3;
  const positions = new Float32Array(verticesCount * 3);

  for (let i = 0; i < verticesCount; i++) {
    positions[i] = (Math.random() - 0.5) * 4;
  }

  return (
    <>
      <mesh position={[1, 2, 3]}>
        <boxGeometry />
      </mesh>
    </>
  );
}
