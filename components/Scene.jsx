"use client";

import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useState } from "react";
import { Model } from "./Wardrobe";


const Scene = () => {
  const [widthScreen, setMax] = useState(0)

    useEffect(() => {

        setMax(document.documentElement.clientWidth)
        
    }, [])
    
  return (
    <Suspense fallback={<div className="h-screen w-full flex justify-center items-center"> <p className="">LOADING...</p> </div>}>
      <div className="w-full h-screen">
        <Canvas
          shadows={"soft"}
          dpr={[1, 2]}
          camera={{ position: [3, 1.9, 0], fov: 50 }}>
          <fog attach="fog" args={["#000000", 0, 15]} />
          
            <group position={[0, -1.3, 0]}>
            {/* <PresentationControls
            polar={[0, 0]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 500 }}
            snap={false}
            rotation={[0, 0, 0]}> */}
              <Model />
          {/* </PresentationControls> */}

            </group>
          <group position={[0, -1.3, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[50, 50]} />
              <MeshReflectorMaterial
                resolution={1024}
                blur={[512,512]}
                mixBlur={1}
                mixStrength={80}
                roughness={0.9}
                depthScale={1.2}
                minDepthThreshold={0.4}
                maxDepthThreshold={1.4}
                color="#101010"
                metalness={0.8}
              />
            </mesh>
          </group>
          {/* <ambientLight position={[0,1,0]} intensity={3}/> */}
          <directionalLight position={[0,2,0]} intensity={6}/>
          <Environment preset="city" />
          {/* <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              mipmapBlur
              luminanceSmoothing={0}
              intensity={0.7}
            />
          </EffectComposer> */}
          <OrbitControls />
        </Canvas>
      </div>
    </Suspense>
  );
};

export default Scene;
