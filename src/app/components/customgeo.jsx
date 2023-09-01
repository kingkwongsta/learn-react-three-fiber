import { useEffect } from "react";
import { useMemo, useRef } from "react";
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

  const length = 5,
    width = 5;

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

  const cap = useRef();

  useEffect(() => {
    console.log(cap.current);
  }, []);

  return (
    <>
      {/* <mesh>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={verticesCount}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshBasicMaterial color="blue" side={THREE.DoubleSide} />
      </mesh> */}
      {/* <mesh>
        <extrudeGeometry
          shapes={shape}
          steps={extrudeSettings.steps}
          depth={extrudeSettings.depth}
          bevelEnabled={extrudeSettings.bevelEnabled}
          bevelThickness={extrudeSettings.bevelThickness}
          bevelSize={extrudeSettings.bevelSize}
          bevelOffset={extrudeSettings.bevelOffset}
          bevelSegments={extrudeSettings.bevelSegments}
        />
        <meshBasicMaterial color="green" side={THREE.DoubleSide} />
      </mesh> */}
      <mesh ref={cap}>
        <capsuleGeometry radius={10} length={12} />
        <meshBasicMaterial color="green" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}
