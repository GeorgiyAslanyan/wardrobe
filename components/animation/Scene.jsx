"use client";
import React from "react";
import { Model } from "./Phone";
import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer, OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="w-screen h-screen relative ">
      <div className="w-full h-screen">
        <Canvas
          // linear
          flat
          shadows="soft"
          dpr={[1, 2]}
          camera={{ position: [0, 3, 10], fov: 50 }}
        >
          <group scale={0.7} position={[0, -3, 0]}>
            <Model />
          </group>
          <OrbitControls
            enableZoom={false}
            enableDamping={false}
            enablePan={false}
          />
          <ambientLight intensity={0.5} />
          <Environment resolution={512}>
        {/* <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} /> */}
        <Lightformer intensity={15} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 10, 1]} />
        {/* <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} /> */}
        <Lightformer intensity={15} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[10, 5, 1]} />
        <Lightformer intensity={15} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[10, 5, 1]} />
          </Environment>
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
