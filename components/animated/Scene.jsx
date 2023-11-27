"use client";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { PuffLoader } from "react-spinners";
import { Canvas } from "@react-three/fiber";
import { Person } from "./Person";
import { CharacterAnimationsProvider } from "./CharacterAnimations";
import Interface from "./Interface";

const PersonAnimated = () => {
  return (
    <CharacterAnimationsProvider>
      <Suspense
        fallback={
          <div className="h-screen w-full flex justify-center items-center">
            {" "}
            <PuffLoader color={"white"} />{" "}
          </div>
        }>
        <div className="w-full h-screen relative">
            <Interface />
          <Canvas
            shadows={"soft"}
            dpr={[1, 2]}
            camera={{ position: [4, 0, 0], fov: 50 }}>
            <group position={[0, -1, 0]} rotation={[0, Math.PI / 2, 0]}>
              <Person />
            </group>
            <group>
              <mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -1, 0]}>
                <planeGeometry args={[100, 100]} attach={"geometry"} />
                <shadowMaterial transparent opacity={0.2} />
              </mesh>
            </group>
            <ambientLight intensity={1} />
            <directionalLight
              position={[50, 50, 0]}
              castShadow
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </Suspense>
    </CharacterAnimationsProvider>
  );
};

export default PersonAnimated;
