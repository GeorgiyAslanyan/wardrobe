"use client";

import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Chess } from "./Chess";
import { PuffLoader } from "react-spinners";


const Scene = () => {  
    
  return (
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"> <PuffLoader color={'white'} /> </div>}>
      <div className="w-full h-screen">
        <Canvas
          shadows={"soft"}
          dpr={[1, 2]}
          camera={{ position: [10, 3, 0], fov: 50 }}>
            
          
            <group position={[0, -1.3, 0]}> 
              <Chess />
             
            </group>
          <directionalLight position={[0,2,0]} castShadow intensity={6}/>
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr"  />
          <OrbitControls autoRotate enableZoom={false} enableDamping={false} enablePan={false}/>
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Scene;
