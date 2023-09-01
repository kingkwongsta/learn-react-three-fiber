import { useMemo } from "react";
import * as THREE from "three";

export default function CustomGeo() {
  const verticesCount = 5 * 3;
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  const length = 12,
    width = 8;

  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, width);
  shape.lineTo(length, width);
  shape.lineTo(length, 0);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 2,
    depth: 16,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  return (
    <>
      <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshBasicMaterial color="blue" side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <extrudeGeometry
          args={[shape]}
          steps={extrudeSettings.steps}
          depth={extrudeSettings.depth}
        />
      </mesh>
    </>
  );
}
