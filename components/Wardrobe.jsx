import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useState } from "react";
import { MeshPhongMaterial, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/shkaf.gltf");
  const { actions } = useAnimations(animations, group);

  const [door1Open, setDoor1Open] = useState(false);
  const door1 = useRef();
  const [door2Open, setDoor2Open] = useState(false);
  const door2 = useRef();
  const [shkaf1Open, setShkaf1Open] = useState(true);
  const shkaf1 = useRef();
  const [shkaf2Open, setShkaf2Open] = useState(true);
  const shkaf2 = useRef();
  const [shkaf3Open, setShkaf3Open] = useState(true);
  const shkaf3 = useRef();
  const [shkaf4Open, setShkaf4Open] = useState(true);
  const shkaf4 = useRef();
  const [clothesOpen, setClotheOpen] = useState(true);
  const clothes = useRef();
  const [cartOpen, setCartOpen] = useState(true);
  const cart = useRef();

  const [isDoor1Hovered, setIsDoor1Hovered] = useState(false);
  const [isDoor2Hovered, setIsDoor2Hovered] = useState(false);
  const [isShkaf1Hovered, setIsShkaf1Hovered] = useState(false);
  const [isShkaf2Hovered, setIsShkaf2Hovered] = useState(false);
  const [isShkaf3Hovered, setIsShkaf3Hovered] = useState(false);
  const [isShkaf4Hovered, setIsShkaf4Hovered] = useState(false);
  const [isClothesHovered, setIsClothesHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);

  useFrame(() => {
    if (door1Open) {
      setShkaf1Open(true);
      setClotheOpen(true);
      door1.current.position.z -= 1; // Измените это значение, чтобы настроить скорость открытия
      if (door1.current.position.z <= 5) {
        door1.current.position.z = 5; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!door1Open) {
      setShkaf2Open(true);
      setShkaf3Open(true);
      setShkaf4Open(true);
      setCartOpen(true);
      door1.current.position.z += 1; // Измените это значение, чтобы настроить скорость закрытия
      if (door1.current.position.z >= 150) {
        door1.current.position.z = 150; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (door2Open) {
      setShkaf1Open(true);
      setClotheOpen(true);
      door2.current.position.z -= 1; // Измените это значение, чтобы настроить скорость открытия
      if (door2.current.position.z <= -15) {
        door2.current.position.z = -15; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!door2Open) {
      setShkaf2Open(true);
      setShkaf3Open(true);
      setShkaf4Open(true);
      setCartOpen(true);
      door2.current.position.z += 1; // Измените это значение, чтобы настроить скорость закрытия
      if (door2.current.position.z >= 120) {
        door2.current.position.z = 120; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (shkaf1Open) {
      shkaf1.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (shkaf1.current.position.x <= -0.0809543) {
        shkaf1.current.position.x = -0.0809543; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!shkaf1Open) {
      shkaf1.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (shkaf1.current.position.x >= 0.15) {
        shkaf1.current.position.x = 0.15; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (shkaf2Open) {
      shkaf2.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (shkaf2.current.position.x <= -0.0809543) {
        shkaf2.current.position.x = -0.0809543; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!shkaf2Open) {
      shkaf2.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (shkaf2.current.position.x >= 0.15) {
        shkaf2.current.position.x = 0.15; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (shkaf3Open) {
      shkaf3.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (shkaf3.current.position.x <= -0.0809543) {
        shkaf3.current.position.x = -0.0809543; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!shkaf3Open) {
      shkaf3.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (shkaf3.current.position.x >= 0.15) {
        shkaf3.current.position.x = 0.15; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (shkaf4Open) {
      shkaf4.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (shkaf4.current.position.x <= -0.0809543) {
        shkaf4.current.position.x = -0.0809543; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!shkaf4Open) {
      shkaf4.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (shkaf4.current.position.x >= 0.15) {
        shkaf4.current.position.x = 0.15; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (clothesOpen) {
      clothes.current.position.x -= 0.5; // Измените это значение, чтобы настроить скорость открытия
      if (clothes.current.position.x <= -19.759) {
        clothes.current.position.x = -19.759; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!clothesOpen) {
      clothes.current.position.x += 0.5; // Измените это значение, чтобы настроить скорость закрытия
      if (clothes.current.position.x >= -5.04) {
        clothes.current.position.x = -5.04; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (cartOpen && door2Open && door1Open) {
      cart.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (cart.current.position.x <= -0.03425545) {
        cart.current.position.x = -0.03425545; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!cartOpen) {
      cart.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (cart.current.position.x >= 0.15) {
        cart.current.position.x = 0.15; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="86Clothing_Part_30"
          position={[-0.0389154, 0.14723964, -1.02097023]}
          rotation={[0, 1.57053468, 0]}
          scale={0.00786844}>
          <mesh
            name="Mesh"
            castShadow
            receiveShadow
            geometry={nodes.Mesh.geometry}
            material={materials["86.Clothing_1_89"]}
          />
          <mesh
            name="Mesh_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh_1.geometry}
            material={materials["86.Clothing_2_2"]}
          />
        </group>
        <group
          name="86Clothing_Part_3"
          position={[0.37975207, 2.02566147, 0.50934052]}
          rotation={[0, -1.57053468, 0]}
          scale={0.00911785}>
          <mesh
            name="Mesh001"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={materials["86.Clothing_7_59"]}
          />
          <mesh
            name="Mesh001_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials["86.Clothing_8_75"]}
          />
        </group>
        <group
          name="86Clothing_Part_2"
          position={[-0.35001767, 1.76916337, -0.0718296]}
          rotation={[0, 1.57053468, 0]}
          scale={0.00715986}>
          <mesh
            name="Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002.geometry}
            material={materials["86.Clothing_7_59"]}
          />
          <mesh
            name="Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_1.geometry}
            material={materials["86.Clothing_8_75"]}
          />
        </group>
        <group name="Group002" position={[0, 1.21600008, 0]} scale={0.01}>
          <mesh
            name="Box001"
            castShadow
            receiveShadow
            geometry={nodes.Box001.geometry}
            material={materials["Material #25"]}
            position={[-0.80000013, -121.59999847, 124.24998474]}
          />
          <mesh
            name="Box003"
            castShadow
            receiveShadow
            geometry={nodes.Box003.geometry}
            material={materials["Material #25"]}
            position={[-0.80000013, -121.59999847, -124.25]}
          />
          <mesh
            name="Box004"
            castShadow
            receiveShadow
            geometry={nodes.Box004.geometry}
            material={materials["Material #25"]}
            position={[-0.80000013, -112.99999237, 0.00000381]}
          />
          <mesh
            name="Box005"
            castShadow
            receiveShadow
            geometry={nodes.Box005.geometry}
            material={materials["Material #25"]}
            position={[-0.80000013, 118.40001678, 0.00000381]}
          />
          <mesh
            name="Box006"
            castShadow
            receiveShadow
            geometry={nodes.Box006.geometry}
            material={materials["Material #25"]}
            position={[-0.80000013, 119.99999237, 0.00000381]}
          />
          <mesh
            name="Box008"
            castShadow
            receiveShadow
            geometry={nodes.Box008.geometry}
            material={materials["Material #25"]}
            position={[-2.8100481, -121.59999847, 51.65000916]}
          />
          <mesh
            name="Box009"
            castShadow
            receiveShadow
            geometry={nodes.Box009.geometry}
            material={materials["Material #25"]}
            position={[-2.8100481, -121.59999847, 0.05000257]}
          />
          <mesh
            name="Box010"
            castShadow
            receiveShadow
            geometry={nodes.Box010.geometry}
            material={materials["Material #25"]}
            position={[-2.8100481, -121.59999847, -72.55000305]}
          />
          <mesh
            name="Box011"
            castShadow
            receiveShadow
            geometry={nodes.Box011.geometry}
            material={materials["Material #25"]}
            position={[-23.29999733, -120.79998779, 61.72499847]}
          />
          <mesh
            name="Box013"
            castShadow
            receiveShadow
            geometry={nodes.Box013.geometry}
            material={materials["Material #25"]}
            position={[-1.50898075, 53.90001297, 79.62582397]}
          />
          <mesh
            name="Box014"
            castShadow
            receiveShadow
            geometry={nodes.Box014.geometry}
            material={materials["Material #25"]}
            position={[-1.50898075, 53.9000206, -44.57416916]}
          />
          <mesh
            name="Box016"
            castShadow
            receiveShadow
            geometry={nodes.Box016.geometry}
            material={materials["Material #25"]}
            position={[-1.50898075, 79.50002289, 79.62582397]}
          />
          <mesh
            name="Box017"
            castShadow
            receiveShadow
            geometry={nodes.Box017.geometry}
            material={materials["Material #25"]}
            position={[-0.80000013, -121.59999847, 0.00000381]}
          />
          <mesh
            name="Box018"
            castShadow
            receiveShadow
            geometry={nodes.Box018.geometry}
            material={materials["Material #25"]}
            position={[-1.50898075, 79.50002289, -44.57416916]}
          />
          <mesh
            name="Box020"
            castShadow
            receiveShadow
            geometry={nodes.Box020.geometry}
            material={materials["Material #25"]}
            position={[-3.74305797, -77.29998779, 24.50919914]}
          />
          <mesh
            name="Box021"
            castShadow
            receiveShadow
            geometry={nodes.Box021.geometry}
            material={materials["Material #25"]}
            position={[-3.74305797, -77.29998016, -99.69080353]}
          />
          <mesh
            name="Box022"
            castShadow
            receiveShadow
            geometry={nodes.Box022.geometry}
            material={materials["Material #25"]}
            position={[-22.5, -111.40000916, -0.02796554]}
          />
          <group
            ref={door1}
            name="door1"
            position={[4.74031639, -121.59999847, 61.67114639]}>
            <mesh
              name="Mesh003"
              castShadow
              receiveShadow
              geometry={nodes.Mesh003.geometry}
              onClick={() => setDoor1Open((prev) => !prev)}
              onPointerOver={() => setIsDoor1Hovered(true)}
              onPointerOut={() => setIsDoor1Hovered(false)}>
              <meshStandardMaterial
                color={isDoor1Hovered ? "#846D41" : "#848484"}
              />
            </mesh>
            <mesh
              name="Mesh003_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh003_1.geometry}
              material={materials["Material #40"]}
            />
          </group>
          <group
            name="door2"
            ref={door2}
            position={[3.17327309, -121.59998322, 75.10243225]}>
            <mesh
              name="Mesh010"
              castShadow
              receiveShadow
              geometry={nodes.Mesh010.geometry}
              onClick={() => setDoor2Open((prev) => !prev)}
              onPointerOver={() => setIsDoor2Hovered(true)}
              onPointerOut={() => setIsDoor2Hovered(false)}>
              <meshStandardMaterial
                color={isDoor2Hovered ? "#846D41" : "#625850"}
              />
            </mesh>
            <mesh
              name="Mesh010_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh010_1.geometry}
              material={materials["Material #26"]}
            />
          </group>
          <mesh
            name="Razdvizhnaja_sistema_Braun_Part_4"
            castShadow
            receiveShadow
            geometry={nodes.Razdvizhnaja_sistema_Braun_Part_4.geometry}
            material={materials["Material #26"]}
            position={[-18.76014709, -121.59999847, -48.28484726]}
          />
        </group>
        <mesh
          name="Object001"
          castShadow
          receiveShadow
          geometry={nodes.Object001.geometry}
          material={materials["86.Clothing_22_62"]}
          position={[0.04065075, 1.34870219, -0.6062513]}
          scale={0.00837872}
        />
        <group
          name="Object002"
          position={[0.03610028, 0.57240129, -1.61625338]}
          scale={0.01}>
          <mesh
            name="Mesh024"
            castShadow
            receiveShadow
            geometry={nodes.Mesh024.geometry}
            material={materials["86.Clothing_1_89"]}
          />
          <mesh
            name="Mesh024_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh024_1.geometry}
            material={materials["86.Clothing_2_2"]}
          />
        </group>
        <group
          name="Object003"
          position={[-0.02214942, 1.40100372, 1.73955822]}
          scale={0.00653603}>
          <mesh
            name="Mesh025"
            castShadow
            receiveShadow
            geometry={nodes.Mesh025.geometry}
            material={materials["86.Clothing_72_12"]}
          />
          <mesh
            name="Mesh025_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh025_1.geometry}
            material={materials["86.Clothing_80_18"]}
          />
          <mesh
            name="Mesh025_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh025_2.geometry}
            material={materials["86.Clothing_81_10"]}
          />
          <mesh
            name="Mesh025_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh025_3.geometry}
            material={materials["86.Clothing_82_81"]}
          />
          <mesh
            name="Mesh025_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh025_4.geometry}
            material={materials["86.Clothing_83_27"]}
          />
        </group>
        <group
          name="Object004"
          position={[-0.04604049, 0.81349629, -1.52868569]}
          scale={0.00665559}>
          <mesh
            name="Mesh026"
            castShadow
            receiveShadow
            geometry={nodes.Mesh026.geometry}
            material={materials["86.Clothing_69_9"]}
          />
          <mesh
            name="Mesh026_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh026_1.geometry}
            material={materials["86.Clothing_70_53"]}
          />
          <mesh
            name="Mesh026_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh026_2.geometry}
            material={materials["86.Clothing_71_48"]}
          />
          <mesh
            name="Mesh026_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh026_3.geometry}
            material={materials["86.Clothing_72_12"]}
          />
        </group>
        <mesh
          name="Object005"
          castShadow
          receiveShadow
          geometry={nodes.Object005.geometry}
          material={materials["86.Clothing_21_75"]}
          position={[0.03402424, 1.2598958, -1.5787487]}
          scale={0.00844719}
        />
        <mesh
          name="Object008"
          castShadow
          receiveShadow
          geometry={nodes.Object008.geometry}
          material={materials["86.Clothing_20_64"]}
          position={[-0.08132066, 1.1910001, -0.51672107]}
          scale={0.01020584}
        />
        <mesh
          name="AM159_010"
          castShadow
          receiveShadow
          geometry={nodes.AM159_010.geometry}
          material={materials.AM159_010_1_4}
          position={[-0.04376776, 2.0590179, 0.25595647]}
          scale={0.0117415}
        />
        <group
          name="Closet_Clothes_Part_63"
          position={[-0.00877823, 0.21790531, -0.57951933]}
          rotation={[0, 0.17453302, 0]}
          scale={0.01}>
          <mesh
            name="Mesh030"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030.geometry}
            material={materials.leather_Closet_Clothes_76_28}
          />
          <mesh
            name="Mesh030_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030_1.geometry}
            material={materials.leather_Closet_Clothes_77_46}
          />
          <mesh
            name="Mesh030_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030_2.geometry}
            material={materials.Closet_Clothes_78_4}
          />
          <mesh
            name="Mesh030_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030_3.geometry}
            material={materials.Closet_Clothes_79_23}
          />
          <mesh
            name="Mesh030_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh030_4.geometry}
            material={materials.Closet_Clothes_22_71}
          />
        </group>
        <group
          name="Closet_Clothes_Part_62"
          position={[-0.04980564, 0.10315198, -0.16487792]}
          rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
          scale={0.00962742}>
          <mesh
            name="Mesh031"
            castShadow
            receiveShadow
            geometry={nodes.Mesh031.geometry}
            material={materials.Closet_Clothes_24_63}
          />
          <mesh
            name="Mesh031_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh031_1.geometry}
            material={materials.Closet_Clothes_25_7}
          />
        </group>
        <group
          name="Closet_Clothes_Part_27"
          position={[-0.08603042, 0.21779349, -0.58239502]}
          scale={0.01}>
          <mesh
            name="Mesh032"
            castShadow
            receiveShadow
            geometry={nodes.Mesh032.geometry}
            material={materials.leather_Closet_Clothes_76_28}
          />
          <mesh
            name="Mesh032_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh032_1.geometry}
            material={materials.leather_Closet_Clothes_77_46}
          />
          <mesh
            name="Mesh032_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh032_2.geometry}
            material={materials.Closet_Clothes_78_4}
          />
          <mesh
            name="Mesh032_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh032_3.geometry}
            material={materials.Closet_Clothes_79_23}
          />
          <mesh
            name="Mesh032_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh032_4.geometry}
            material={materials.Closet_Clothes_22_71}
          />
        </group>
        <mesh
          name="Closet_Clothes_Part_5"
          castShadow
          receiveShadow
          geometry={nodes.Closet_Clothes_Part_5.geometry}
          material={materials.Closet_Clothes_86_5}
          position={[-0.03876625, 0.15741378, -0.62756622]}
          scale={0.01}
        />
        <group
          name="Closet_Clothes_Part_2"
          position={[-0.0144566, 0.31525958, -0.39132294]}
          rotation={[0, 1.22173099, 0]}
          scale={0.01}>
          <mesh
            name="Mesh034"
            castShadow
            receiveShadow
            geometry={nodes.Mesh034.geometry}
            material={materials.Closet_Clothes_20_46}
          />
          <mesh
            name="Mesh034_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh034_1.geometry}
            material={materials.Closet_Clothes_21_7}
          />
          <mesh
            name="Mesh034_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh034_2.geometry}
            material={materials.Closet_Clothes_22_71}
          />
        </group>
        <mesh
          name="cart"
          ref={cart}
          castShadow
          receiveShadow
          geometry={nodes.cart.geometry}
          material={materials["Material #43"]}
          position={[-0.03425545, 0.08572441, 0.31679869]}
          rotation={[0, 1.57053468, 0]}
          scale={[0.01122629, 0.01, 0.01]}
          onClick={() => door2Open && door1Open && setCartOpen((prev) => !prev)}
          onPointerOver={() => setIsCartHovered(true)}
          onPointerOut={() => setIsCartHovered(false)}>
          <meshStandardMaterial color={isCartHovered ? `${(door2Open && door1Open) ? "#846D41" :"#842F38" }` : "#EFEFEF"} />
        </mesh>
        <mesh
          name="Box032"
          castShadow
          receiveShadow
          geometry={nodes.Box032.geometry}
          material={materials["Material #43"]}
          position={[-0.00318817, 0.30675235, 0.01096878]}
          scale={0.01}
        />
        <mesh
          name="Box033"
          castShadow
          receiveShadow
          geometry={nodes.Box033.geometry}
          material={materials["Material #43"]}
          position={[-0.00318817, 0.29279086, 0.01096878]}
          scale={0.01}
        />
        <mesh
          name="Box034"
          castShadow
          receiveShadow
          geometry={nodes.Box034.geometry}
          material={materials["Material #43"]}
          position={[-0.00318817, 0.30675235, 0.5055002]}
          scale={0.01}
        />
        <mesh
          name="Box035"
          castShadow
          receiveShadow
          geometry={nodes.Box035.geometry}
          material={materials["Material #43"]}
          position={[-0.00318817, 0.29279086, 0.5055002]}
          scale={0.01}
        />
        <mesh
          name="Box031"
          castShadow
          receiveShadow
          geometry={nodes.Box031.geometry}
          material={materials["Material #43"]}
          position={[0.05704273, 1.74500024, -0.36249992]}
          scale={0.01}
        />
        <group
          name="Group004"
          position={[-0.01809825, 1.26567757, -0.35959378]}
          scale={0.01}>
          <group
            name="clothes"
            ref={clothes}
            onClick={() =>
              !door2Open && !door1Open && setClotheOpen((prev) => !prev)
            }
            position={[-19.04509544, 45.0717392, -0.29061902]}>
            <mesh
              name="Mesh044"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044.geometry}
              material={materials["Material #43"]}
            />
            <mesh
              name="Mesh044_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_1.geometry}
              material={materials["Fabric_86.Clothing_4_18"]}
            />
            <mesh
              name="Mesh044_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_2.geometry}
              material={materials["Chrome_86.Clothing_5_30"]}
            />
            <mesh
              name="Mesh044_3"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_3.geometry}
              material={materials["Cotton_86.Clothing_25_15"]}
            />
            <mesh
              name="Mesh044_4"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_4.geometry}
              material={materials["Cotton_86.Clothing_50_43"]}
            />
            <mesh
              name="Mesh044_5"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_5.geometry}
              material={materials["Cotton_86.Clothing_51_24"]}
            />
            <mesh
              name="Mesh044_6"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_6.geometry}
              material={materials["Cotton_86.Clothing_52_22"]}
            />
            <mesh
              name="Mesh044_7"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_7.geometry}
              material={materials["Cotton_86.Clothing_53_16"]}
            />
            <mesh
              name="Mesh044_8"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_8.geometry}
              material={materials["Cotton_86.Clothing_54_37"]}
            />
            <mesh
              name="Mesh044_9"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_9.geometry}
              material={materials["Cotton_86.Clothing_55_32"]}
            />
            <mesh
              name="Mesh044_10"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_10.geometry}
              material={materials["Cotton_86.Clothing_56_3"]}
            />
            <mesh
              name="Mesh044_11"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_11.geometry}
              material={materials["Cotton_86.Clothing_57_11"]}
            />
            <mesh
              name="Mesh044_12"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_12.geometry}
              onPointerOver={() => setIsClothesHovered(true)}
              onPointerOut={() => setIsClothesHovered(false)}>
              <meshStandardMaterial
                color={isClothesHovered ? `${(!door2Open && !door1Open) ? "#846D41" :"#842F38" }` : "#87597A"}
              />
            </mesh>
            <mesh
              name="Mesh044_13"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_13.geometry}
              onPointerOver={() => setIsClothesHovered(true)}
              onPointerOut={() => setIsClothesHovered(false)}>
              <meshStandardMaterial
                color={isClothesHovered ? `${(!door2Open && !door1Open) ? "#846D41" :"#842F38" }` : "#87597A"}
              />
            </mesh>
            <mesh
              name="Mesh044_14"
              castShadow
              receiveShadow
              geometry={nodes.Mesh044_14.geometry}
              material={materials["86.Clothing_60_97"]}
            />
          </group>
        </group>
        <mesh
          name="Box036"
          castShadow
          receiveShadow
          geometry={nodes.Box036.geometry}
          material={materials["Material #2097647922"]}
          position={[-0.04855613, 0.82828361, 1.22197366]}
          scale={0.01}
        />
        <group
          name="Group005"
          position={[0.02950783, 0.90882832, 0.87950003]}
          scale={0.01}>
          <group
            name="Box037"
            position={[-2.95078349, -90.31663513, -87.94998169]}>
            <mesh
              name="Mesh053"
              castShadow
              receiveShadow
              geometry={nodes.Mesh053.geometry}
              material={materials["Material #2097647923"]}
            />
            <mesh
              name="Mesh053_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh053_1.geometry}
              material={materials["Material #2097647922"]}
            />
          </group>
          <mesh
            name="Circle001"
            castShadow
            receiveShadow
            geometry={nodes.Circle001.geometry}
            material={materials["Material #2097647922"]}
            position={[-2.95078325, -90.31665039, -87.94998932]}
          />
        </group>
        <group
          name="vm_v4_020_Part_23"
          position={[-0.05266121, 0.81053627, -0.98823518]}
          rotation={[-Math.PI, 3.9e-7, -Math.PI]}
          scale={0.01}>
          <mesh
            name="Mesh054"
            castShadow
            receiveShadow
            geometry={nodes.Mesh054.geometry}
            material={materials.vm_v4_020_4_68}
          />
          <mesh
            name="Mesh054_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh054_1.geometry}
            material={materials.Metall_vm_v4_020_5_5}
          />
        </group>
        <mesh
          name="vm_v4_020_Part_12"
          castShadow
          receiveShadow
          geometry={nodes.vm_v4_020_Part_12.geometry}
          material={materials.vm_v4_020_10_98}
          position={[-0.07163371, 1.23079753, 0.24873586]}
          scale={0.01}
        />
        <group
          name="vm_v4_020_Part_4"
          position={[-0.0151437, 1.54402077, 0.24140096]}
          rotation={[-Math.PI, 1.30899738, -Math.PI]}
          scale={0.00926106}>
          <mesh
            name="Mesh061"
            castShadow
            receiveShadow
            geometry={nodes.Mesh061.geometry}
            material={materials.vm_v4_020_1_21}
          />
          <mesh
            name="Mesh061_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh061_1.geometry}
            material={materials.Metall_vm_v4_020_2_37}
          />
        </group>
        <group
          name="shkaf2"
          ref={shkaf2}
          position={[-0.07074645, 1.78750074, 0.26930958]}
          scale={0.01}>
          <mesh
            name="Mesh063"
            castShadow
            receiveShadow
            geometry={nodes.Mesh063.geometry}
            material={materials.vm_v4_020_9_60}
          />
          <mesh
            name="Mesh063_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh063_1.geometry}
            material={materials["35_1_36.001"]}
          />
          <mesh
            name="Mesh063_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh063_2.geometry}
            onClick={() =>
              door2Open && door1Open && setShkaf2Open((prev) => !prev)
            }
            onPointerOver={() => setIsShkaf2Hovered(true)}
            onPointerOut={() => setIsShkaf2Hovered(false)}>
            <meshStandardMaterial
              color={isShkaf2Hovered ? `${(door2Open && door1Open) ? "#846D41" :"#842F38" }` : "#625850"}
            />
          </mesh>
          <mesh
            name="Mesh063_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh063_3.geometry}
            material={materials["Material #25.008"]}
          />
          <mesh
            name="Mesh063_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh063_4.geometry}
            material={materials["Material #25.009"]}
          />
          <mesh
            name="Mesh063_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh063_5.geometry}
            material={materials["Material #25.010"]}
          />
          <mesh
            name="Mesh063_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh063_6.geometry}
            material={materials["Material #25.011"]}
          />
        </group>
        <group
          name="Group006"
          position={[-0.03742862, 2.15704942, -0.35167041]}
          scale={0.01}>
          <group
            name="Closet_Clothes_Part_57"
            position={[-2.81317759, -12.62377739, -8.47079754]}
            rotation={[0, 1.57053468, 0]}
            scale={0.83787197}>
            <mesh
              name="Mesh071"
              castShadow
              receiveShadow
              geometry={nodes.Mesh071.geometry}
              material={materials.Closet_Clothes_9_74}
            />
            <mesh
              name="Mesh071_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh071_1.geometry}
              material={materials.chrome_Closet_Clothes_96_95}
            />
          </group>
          <mesh
            name="Closet_Clothes_Part_58"
            castShadow
            receiveShadow
            geometry={nodes.Closet_Clothes_Part_58.geometry}
            material={materials.Closet_Clothes_97_17}
            position={[16.0203743, -0.6554392, -12.05229759]}
            rotation={[Math.PI / 2, -0.17453307, -Math.PI / 2]}
            scale={[0.83787197, 0.83787209, 0.83787209]}
          />
          <group
            name="Closet_Clothes_Part_59"
            position={[-2.68366861, -12.62385368, -8.47074795]}
            rotation={[0, 1.57053468, 0]}
            scale={0.83787197}>
            <mesh
              name="Mesh070"
              castShadow
              receiveShadow
              geometry={nodes.Mesh070.geometry}
              material={materials.Closet_Clothes_11_9}
            />
            <mesh
              name="Mesh070_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh070_1.geometry}
              material={materials.chrome_Closet_Clothes_96_95}
            />
          </group>
          <mesh
            name="Closet_Clothes_Part_60"
            castShadow
            receiveShadow
            geometry={nodes.Closet_Clothes_Part_60.geometry}
            material={materials.Closet_Clothes_97_17}
            position={[16.0203743, -0.65545559, 12.86561394]}
            rotation={[Math.PI / 2, -0.17453307, -Math.PI / 2]}
            scale={[0.83787197, 0.83787209, 0.83787209]}
          />
          <group
            name="Closet_Clothes_Part_61"
            position={[8.82193947, -9.08509541, -25.84339333]}
            rotation={[Math.PI / 2, 8e-8, -Math.PI]}
            scale={0.83787197}>
            <mesh
              name="Mesh072"
              castShadow
              receiveShadow
              geometry={nodes.Mesh072.geometry}
              material={materials.Closet_Clothes_14_25}
            />
            <mesh
              name="Mesh072_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh072_1.geometry}
              material={materials.Closet_Clothes_15_20}
            />
            <mesh
              name="Mesh072_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh072_2.geometry}
              material={materials.chrome_Closet_Clothes_96_95}
            />
          </group>
          <mesh
            name="Closet_Clothes_Part_68"
            castShadow
            receiveShadow
            geometry={nodes.Closet_Clothes_Part_68.geometry}
            material={materials.Closet_Clothes_97_17}
            position={[16.09141541, -1.31697011, 18.135149]}
            rotation={[Math.PI / 2, -4.8e-7, -Math.PI / 2]}
            scale={0.83787197}
          />
          <mesh
            name="Closet_Clothes_Part_7"
            castShadow
            receiveShadow
            geometry={nodes.Closet_Clothes_Part_7.geometry}
            material={materials.Closet_Clothes_87_25}
            position={[0.71244407, 10.43727303, -4.14042807]}
            rotation={[0, 1.57053468, 0]}
            scale={0.83787197}
          />
          <mesh
            name="Closet_Clothes_Part_8"
            castShadow
            receiveShadow
            geometry={nodes.Closet_Clothes_Part_8.geometry}
            material={materials.Closet_Clothes_88_12}
            position={[-0.957726, 8.12173653, -5.1170516]}
            rotation={[0, 1.57053468, 0]}
            scale={0.83787197}
          />
        </group>
        <group
          name="shkaf3"
          ref={shkaf3}
          position={[-0.0809543, 0.82459706, 0.26930958]}
          scale={0.01}>
          <mesh
            name="Mesh087"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087.geometry}
            material={materials["vm_v4_020_9_60.001"]}
          />
          <mesh
            name="Mesh087_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087_1.geometry}
            material={materials["35_1_36.002"]}
          />
          <mesh
            name="Mesh087_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087_2.geometry}
            onClick={() =>
              door2Open && door1Open && setShkaf3Open((prev) => !prev)
            }
            onPointerOver={() => setIsShkaf3Hovered(true)}
            onPointerOut={() => setIsShkaf3Hovered(false)}>
            <meshStandardMaterial
              color={isShkaf3Hovered ? `${(door2Open && door1Open) ? "#846D41" :"#842F38" }` : "#625850"}
            />
          </mesh>
          <mesh
            name="Mesh087_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087_3.geometry}
            material={materials["Material #25.013"]}
          />
          <mesh
            name="Mesh087_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087_4.geometry}
            material={materials["Material #25.014"]}
          />
          <mesh
            name="Mesh087_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087_5.geometry}
            material={materials["Material #25.015"]}
          />
          <mesh
            name="Mesh087_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh087_6.geometry}
            material={materials["Material #25.016"]}
          />
        </group>
        <group
          name="shkaf4"
          ref={shkaf4}
          position={[-0.0809543, 0.50621921, 0.26930958]}
          scale={0.01}>
          <mesh
            name="Mesh088"
            castShadow
            receiveShadow
            geometry={nodes.Mesh088.geometry}
            material={materials["vm_v4_020_9_60.002"]}
          />
          <mesh
            name="Mesh088_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh088_1.geometry}
            material={materials["35_1_36.003"]}
          />
          <mesh
            name="Mesh088_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh088_2.geometry}
            onClick={() =>
              door2Open && door1Open && setShkaf4Open((prev) => !prev)
            }
            onPointerOver={() => setIsShkaf4Hovered(true)}
            onPointerOut={() => setIsShkaf4Hovered(false)}>
            <meshStandardMaterial
              color={isShkaf4Hovered ? `${(door2Open && door1Open) ? "#846D41" :"#842F38" }` : "#625850"}
            />
          </mesh>
          <mesh
            name="Mesh088_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh088_3.geometry}
            material={materials["Material #25.018"]}
          />
          <mesh
            name="Mesh088_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh088_4.geometry}
            material={materials["Material #25.019"]}
          />
          <mesh
            name="Mesh088_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh088_5.geometry}
            material={materials["Material #25.020"]}
          />
          <mesh
            name="Mesh088_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh088_6.geometry}
            material={materials["Material #25.021"]}
          />
        </group>
        <group
          name="shkaf1"
          ref={shkaf1}
          position={[-0.0809543, 1.14772236, -0.97240204]}
          scale={0.01}>
          <mesh
            name="Mesh089"
            castShadow
            receiveShadow
            geometry={nodes.Mesh089.geometry}
            material={materials["vm_v4_020_9_60.003"]}
          />
          <mesh
            name="Mesh089_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh089_1.geometry}
            material={materials["35_1_36.004"]}
          />
          <mesh
            name="Mesh089_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh089_2.geometry}
            onClick={() =>
              !door2Open && !door1Open && setShkaf1Open((prev) => !prev)
            }
            onPointerOver={() => setIsShkaf1Hovered(true)}
            onPointerOut={() => setIsShkaf1Hovered(false)}>
            <meshStandardMaterial
              color={isShkaf1Hovered ? `${(!door2Open && !door1Open) ? "#846D41" :"#842F38" }` : "#625850"}
            />
          </mesh>
          <mesh
            name="Mesh089_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh089_3.geometry}
            material={materials["Material #25.023"]}
          />
          <mesh
            name="Mesh089_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh089_4.geometry}
            material={materials["Material #25.024"]}
          />
          <mesh
            name="Mesh089_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh089_5.geometry}
            material={materials["Material #25.025"]}
          />
          <mesh
            name="Mesh089_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh089_6.geometry}
            material={materials["Material #25.026"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/shkaf.gltf");
