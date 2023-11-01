"use client";

import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Model } from "./Wardrobe";
import { PuffLoader } from "react-spinners";


const Scene = () => {    
  return (
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"> <PuffLoader color={'black'} /> </div>}>
      <div className="w-full h-screen">
        <Canvas
          shadows={"soft"}
          dpr={[1, 2]}
          camera={{ position: [2.9, 1.1, -1.3], fov: 50 }}>
          
            <group position={[0, -1.1, 0]}>
              <Model />
            </group>
          <directionalLight position={[0,2,0]} castShadow intensity={6}/>
          <Environment preset="city" />
          <OrbitControls enableDamping={false} enableZoom={false} enablePan={false}/>
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Scene;
