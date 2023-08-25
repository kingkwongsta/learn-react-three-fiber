import { Environment } from "@react-three/drei";

function Lights() {
  return (
    <>
      <Environment files="./sunset.hdr" background />

      <pointLight
        castShadow
        ref={pointLight}
        color="#fff"
        position={[1, 2.5, 0]}
        intensity={5}
      />
      <directionalLight
        castShadow="true"
        ref={directionalLight}
        color="#fff"
        position={[1, 2, 0]}
        intensity={2}
      />
      <spotLight
        intensity={2}
        position={[4, 5, 2]}
        ref={spotLight}
        angle={0.5}
        distance={10}
      />
      <ambientLight intensity={2} color={0xffffff} />
    </>
  );
}
