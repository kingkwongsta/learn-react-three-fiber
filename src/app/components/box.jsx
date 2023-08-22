import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export default function Box(props) {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current);
  });

  useFrame((_, delta) => {
    ref.current.rotation.x += 0.1 * delta;
    ref.current.rotation.y += 0.5 * delta;
  });

  return (
    <>
      <mesh ref={ref}>
        <boxGeometry onClick={() => console.log(ref)} />
        <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    </>
  );
}
