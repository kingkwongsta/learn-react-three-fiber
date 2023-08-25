import { Environment } from "@react-three/drei";

function Lights() {
  return (
    <>
      {/* ***ENVIRONMENT*** */}
      <Environment files="./sunset.hdr" background />
      {/* ***POINT*** */}
      <pointLight
        castShadow
        ref={pointLight}
        color="#fff"
        position={[1, 2.5, 0]}
        intensity={5}
      />
      {/* ***DIRECTIONAL*** */}
      <directionalLight
        castShadow="true"
        ref={directionalLight}
        color="#fff"
        position={[1, 2, 0]}
        intensity={2}
      />
      {/* ***SPOT*** */}
      <spotLight
        intensity={2}
        position={[4, 5, 2]}
        ref={spotLight}
        angle={0.5}
        distance={10}
      />
      {/* ***AMBIENT*** */}
      <ambientLight intensity={2} color={0xffffff} />
    </>
  );
}
