"use client";
import React from "react";
import { Model } from "./Phone";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="w-screen h-screen relative">
      <div className="w-full h-screen">
        <Canvas
          shadows="basic"
          dpr={[1, 2]}
          camera={{ position: [0, 3, 10], fov: 50 }}
        >
          <group scale={0.7} position={[0, -3, 0]}>
            <Model />
          </group>
          <directionalLight
            name="Directional Light"
            color="#fff"
            intensity={7.5}
            position={[-1, 2, 2]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 2.1]}
          />
          <OrbitControls
            enableZoom={false}
            enableDamping={false}
            enablePan={false}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Scene;
