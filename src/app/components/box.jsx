import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  const ref = useRef();
  const [hovered, setHover] = useState(false);
  const [rotate, setRotate] = useState(false);

  useFrame((_, delta) => {
    if (rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <>
      <mesh
        scale={hovered ? [2, 2, 2] : [1, 1, 1]}
        onClick={(e) => console.log(ref.current)}
        onPointerDown={() => setRotate(!rotate)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        ref={ref}
      >
        <boxGeometry onClick={(e) => console.log(e.object)} />
        <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
      </mesh>
    </>
  );
}
