"use client";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useHelper,
  Stage,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  PerspectiveCamera,
  PointLightHelper,
  SpotLightHelper,
  DirectionalLightHelper,
  TextureLoader,
} from "three";
import { useRef } from "react";
import Rings from "./Rings";
import Test from "./test";
import AE86 from "./ae86";
import CustomGeo from "./customgeo";

function Scene() {
  const pointLight = useRef();
  const spotLight = useRef();
  const directionalLight = useRef();
  useHelper(pointLight, PointLightHelper, 0.5, "hotpink");
  useHelper(spotLight, SpotLightHelper, "teal");
  useHelper(directionalLight, DirectionalLightHelper, 5, "teal");

  useFrame((state, delta) => {
    const angle = state.clock.getElapsedTime() / 10;
    state.camera.position.x = Math.sin(angle) * 20;
    state.camera.position.z = Math.cos(angle) * 20;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <directionalLight
        position={[5, 2, 2]}
        ref={directionalLight}
        intensity={4}
      />
      {/* <Stage environment="city" intensity={1} /> */}
      {/* <Environment files="./sunset.hdr" background /> */}
      <OrbitControls target={[0, 1, 0]} maxPolarAngle={[1.5]} />
      <color args={[0x000000]} attach="background" />
      {/* <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} /> */}
    </>
  );
}

// function CameraHelper() {
//   const camera = new PerspectiveCamera();
//   return <cameraHelper args={[camera]} />;
// }

function Floor() {
  const [roughness, normal] = useLoader(TextureLoader, [
    "textures/terrain-roughness.jpg",
    "textures/terrain-normal.jpg",
  ]);

  const floorRef = useRef();

  useFrame((state, delta) => {
    if (floorRef.current) {
      floorRef.current.position.z += -(1 / 500);
    }
  });

  return (
    <mesh rotation-x={-Math.PI * 0.5} ref={floorRef} castShadow receiveShadow>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        envMapIntensity={0}
        normalMap={normal}
        normalScale={[0.15, 0.15]}
        roughnessMap={roughness}
        dithering={true}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        debug={0}
        reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
      />
    </mesh>
  );
}

export default function Experience() {
  return (
    <>
      <div className="h-[600px]">
        <Canvas
          shadows
          camera={{
            fov: 50,
            near: 0.1,
            far: 200,
            position: [10, 2, 5],
          }}
        >
          <Scene />
          <AE86 />
          <Floor />
          {/* 
          <axesHelper args={[10]} />
          <gridHelper args={[20, 10, 0xff0000, "grey"]} />
          <Floor position={[0, -2, 0]} />
          <Lambo />
          <Rings />
          <Perf position="bottom-right" /> */}
        </Canvas>
      </div>
    </>
  );
}
