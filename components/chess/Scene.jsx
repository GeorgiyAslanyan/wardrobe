"use client";

import {
  Environment,
  Html,
  MeshTransmissionMaterial,
  OrbitControls,
  Text3D,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Chess } from "./Chess";


const Scene = () => {  
    // const font = new THREE.FontLoader().parse(Roboto);

  // configure font geometry
  const textOptions = {
    size: 5,
    height: 1
  };  
  return (
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"> <p className="text-white">LOADING...</p> </div>}>
      <div className="w-full h-screen">
        <Canvas
          shadows={"soft"}
          dpr={[1, 2]}
          camera={{ position: [10, 3, 0], fov: 50 }}>
            
          
            <group position={[0, 0, 0]}> {/* 0, -1.3, 0 */}
              {/* <Chess /> */}
              <mesh>
              <sphereGeometry attach="geometry" args={[1, 32, 32]} />
              <MeshTransmissionMaterial
          backside={true}
          samples={10}
          resolution={2048}
          transmission={1}
          roughness={0}
          thickness={3.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.0}
          distortionScale={0.3}
          temporalDistortion={0.5}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
        />
              </mesh>
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
