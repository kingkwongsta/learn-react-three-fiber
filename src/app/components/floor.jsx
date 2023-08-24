export default function Floor({ position }) {
  return (
    <mesh rotation-x={-Math.PI / 2} receiveShadow position={position}>
      <circleGeometry args={[10]} />
      <meshStandardMaterial />
    </mesh>
  );
}
