import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from 'three'

export function Chess(props) {
  const { nodes, materials } = useGLTF("/chess.glb");
  return (
    <group {...props} dispose={null} scale={0.4}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.geo1_Material_1_0.geometry}>
        {/* <MeshTransmissionMaterial resolution={1024} distortion={0.25} color="#FF8F20" thickness={1} anisotropy={1} /> */}
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
  );
}

useGLTF.preload("/chess.glb");
