import { useRef, useEffect, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Box({ position }) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(true);
  const [count, setCount] = useState(0);
  const geometry = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.785398)],
    []
  );

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <>
      <mesh
        scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
        // onClick={() => setRotate(!rotate)}
        onPointerDown={() => {
          setCount((count + 1) % 2);
          setRotate(!rotate);
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        geometry={geometry[count]}
        ref={ref}
        position={position}
      >
        <boxGeometry onClick={(e) => console.log(e.object)} />
        <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
      </mesh>
    </>
  );
}
