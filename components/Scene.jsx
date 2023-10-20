"use client";

import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "./Wardrobe";


const Scene = () => {    
  return (
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"> <p className="text-black">LOADING...</p> </div>}>
      <div className="w-full h-screen">
        <Canvas
          shadows={"soft"}
          dpr={[1, 2]}
          camera={{ position: [3, 1.9, 0], fov: 50 }}>
          
            <group position={[0, -1.3, 0]}>
              <Model />
            </group>
          <directionalLight position={[0,2,0]} castShadow intensity={6}/>
          <Environment preset="city" />
          <OrbitControls />
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Scene;
