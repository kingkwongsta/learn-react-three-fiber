import React from "react";

export default function CustomGeo() {
  const verticesCount = 10 * 3;
  const positions = new Float32Array(verticesCount * 3);

  for (let i = 0; i < verticesCount; i++) {
    positions[i] = (Math.random() - 0.5) * 3;
  }

  return (
    <>
      <mesh position={[1, 2, 3]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}
