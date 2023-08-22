import { useRef } from "react";

export default function Box(props) {
  const ref = useRef();
  console.log(ref);

  return (
    <>
      <mesh useRef={ref}>
        <boxGeometry onClick={() => console.log(ref)} />
        <meshBasicMaterial color={0x00ff00} wireframe />
      </mesh>
    </>
  );
}
