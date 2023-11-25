import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import { useState } from "react";
import { MeshPhongMaterial, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/wardrobe.gltf");
  const { actions } = useAnimations(animations, group);

  const [busy, setBusy] = useState(false);

  const [door1Open, setDoor1Open] = useState(false);
  const door1 = useRef();
  const [door2Open, setDoor2Open] = useState(false);
  const door2 = useRef();
  const [shkaf1Close, setShkaf1Close] = useState(true);
  const shkaf1 = useRef();
  const [shkaf2Close, setShkaf2Close] = useState(true);
  const shkaf2 = useRef();
  const [shkaf3Close, setShkaf3Close] = useState(true);
  const shkaf3 = useRef();
  const [shkaf4Close, setShkaf4Close] = useState(true);
  const shkaf4 = useRef();
  const [clothesClose, setClotheClose] = useState(true);
  const clothes = useRef();
  const [cartClose, setCartClose] = useState(true);
  const cart = useRef();
  const [pgraphClose, setPgraphClose] = useState(true);
  const pgraph = useRef();
  const pgraphsprite = useRef();

  const [isDoor1Hovered, setIsDoor1Hovered] = useState(false);
  const [isDoor2Hovered, setIsDoor2Hovered] = useState(false);
  const [isShkaf1Hovered, setIsShkaf1Hovered] = useState(false);
  const [isShkaf2Hovered, setIsShkaf2Hovered] = useState(false);
  const [isShkaf3Hovered, setIsShkaf3Hovered] = useState(false);
  const [isShkaf4Hovered, setIsShkaf4Hovered] = useState(false);
  const [isClothesHovered, setIsClothesHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isPgraphHovered, setIsPgraphHovered] = useState(false);
  const [isAristoHovered, setIsAristoHovered] = useState(false);
  const [isRehaoHovered, setIsRehaoHovered] = useState(false);
  const [isLamartyHovered, setIsLamartyHovered] = useState(false);

  useFrame(() => {
    if (door1Open) {
      setShkaf1Close(true);
      setClotheClose(true);
      setBusy(true)
      door1.current.position.z -= 1; // Измените это значение, чтобы настроить скорость открытия
      if (door1.current.position.z <= -50) {
        door1.current.position.z = -50; // Максимальное положение, когда дверца полностью открыта
        setBusy(false)
      }
    } else if (!door1Open) {
      setShkaf2Close(true);
      setShkaf3Close(true);
      setShkaf4Close(true);
      setCartClose(true);
      setPgraphClose(true)
      setBusy(true)
      door1.current.position.z += 1; // Измените это значение, чтобы настроить скорость закрытия
      if (door1.current.position.z >= 83) {
        door1.current.position.z = 83; // Максимальное положение, когда дверца полностью закрыта
        setBusy(false)
      }
    }
  });

  useFrame(() => {
    if (door2Open) {
      setShkaf1Close(true);
      setClotheClose(true);
        setBusy(true)
      door2.current.position.z -= 1; // Измените это значение, чтобы настроить скорость открытия
      if (door2.current.position.z <= -83) {
        door2.current.position.z = -83; // Максимальное положение, когда дверца полностью открыта
        setBusy(false)
      }
    } else if (!door2Open) {
      setShkaf2Close(true);
      setShkaf3Close(true);
      setShkaf4Close(true);
      setCartClose(true);
      setPgraphClose(true)
        setBusy(true)
      door2.current.position.z += 1; // Измените это значение, чтобы настроить скорость закрытия
      if (door2.current.position.z >= 50) {
        door2.current.position.z = 50; // Максимальное положение, когда дверца полностью закрыта
        setBusy(false)
      }
    }
  });

  useFrame(() => {
    if (shkaf1Close) {
      shkaf1.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (shkaf1.current.position.x <=  0.13) {
        shkaf1.current.position.x =  0.13; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!shkaf1Close) {
      shkaf1.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (shkaf1.current.position.x >= 0.26) {
        shkaf1.current.position.x = 0.26; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (shkaf2Close) {
      shkaf2.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (shkaf2.current.position.x <=  -0.05) {
        shkaf2.current.position.x =  -0.05; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!shkaf2Close) {
      shkaf2.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (shkaf2.current.position.x >= 0.08) {
        shkaf2.current.position.x = 0.08; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (shkaf3Close) {
      shkaf3.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (shkaf3.current.position.x <= 0.13) {
        shkaf3.current.position.x = 0.13; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!shkaf3Close) {
      shkaf3.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (shkaf3.current.position.x >= 0.26) {
        shkaf3.current.position.x = 0.26; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (shkaf4Close) {
      shkaf4.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (shkaf4.current.position.x <=  0.13) {
        shkaf4.current.position.x =  0.13; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!shkaf4Close) {
      shkaf4.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (shkaf4.current.position.x >= 0.26) {
        shkaf4.current.position.x = 0.26; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (clothesClose) {
      clothes.current.position.x -= 0.5; // Измените это значение, чтобы настроить скорость открытия
      if (clothes.current.position.x <= -1.04) {
        clothes.current.position.x = -1.04; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!clothesClose) {
      clothes.current.position.x += 0.5; // Измените это значение, чтобы настроить скорость закрытия
      if (clothes.current.position.x >= 9.04) {
        clothes.current.position.x = 9.04; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  useFrame(() => {
    if (cartClose) {
      cart.current.position.x -= 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (cart.current.position.x <= -0.03425545) {
        cart.current.position.x = -0.03425545; // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!cartClose) {
      cart.current.position.x += 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (cart.current.position.x >= 0.15) {
        cart.current.position.x = 0.15; // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });
  
  useFrame(() => {
    if (pgraphClose) {
      pgraphsprite.current.rotation.z -= 0.01
      pgraph.current.rotation.z += 0.01; // Измените это значение, чтобы настроить скорость открытия
      if (pgraph.current.rotation.z >= 0) {
        pgraph.current.rotation.z = 0;
        pgraphsprite.current.rotation.z = 0 // Максимальное положение, когда дверца полностью открыта
      }
    } else if (!pgraphClose) {
        pgraphsprite.current.rotation.z += 0.01
        pgraph.current.rotation.z -= 0.01; // Измените это значение, чтобы настроить скорость закрытия
      if (pgraph.current.rotation.z <= -0.47) {
        pgraph.current.rotation.z = -0.47
        pgraphsprite.current.rotation.z = 0.47 // Максимальное положение, когда дверца полностью закрыта
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0.03891534, 0.5099256, -1.02097023]}
        rotation={[0, 1.57053468, 0]}
        scale={0.00786844}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials["86.Clothing_1_89"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials["86.Clothing_2_2"]}
        />
      </group>
      <group
        position={[-0.03384158, 2.14037323, 0.88119179]}
        rotation={[0, -1.57053468, 0]}
        scale={0.00911785}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials["86.Clothing_7_59"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials["86.Clothing_8_75"]}
        />
      </group>
      <group
        position={[-0.35001767, 1.76916337, -0.0718296]}
        rotation={[0, 1.57053468, 0]}
        scale={0.00715986}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002.geometry}
          material={materials["86.Clothing_7_59"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh002_1.geometry}
          material={materials["86.Clothing_8_75"]}
        />
      </group>
      <group position={[0, 1.21600008, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box005.geometry}
          material={materials["Material #25"]}
          position={[-0.80000013, 118.40001678, 0.00000381]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box011.geometry}
          material={materials["Material #25"]}
          position={[-23.29999733, -120.79998779, 61.72499847]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box016.geometry}
          position={[-1.50898075, 79.50002289, 79.62582397]}>
            <meshStandardMaterial color={"#938478"} />
          </mesh>
        <group name="door2"
            ref={door2} position={[16.99064064, 3.01768041, -72.6251297]}>
          <mesh
          name="Mesh010"
            castShadow
            receiveShadow
            geometry={nodes.Mesh010.geometry}
            onClick={() => !isDoor1Hovered && setDoor2Open((prev) => !prev)}
              onPointerOver={() => setIsDoor2Hovered(true)}
              onPointerOut={() => setIsDoor2Hovered(false)}>
              <meshStandardMaterial
                color={!isDoor1Hovered && isDoor2Hovered ? "#FCCE10" : "#625850"}
              /></mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh010_1.geometry}>
              <meshStandardMaterial
                color={!isDoor2Hovered && isAristoHovered ? "#FCCE10" : "#848484"}
              />
            </mesh>
        </group>
        <Html className="pointer-events-none "  position={[0, 0.90882832, 61.67114639]}>
            <div className={` bg-white rounded-xl text-start shadow-lg text-xs pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${isDoor1Hovered || isDoor2Hovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-gray-900 border-b border-b-gray-400 pb-1">Нажмите что бы открыть</p>
                <p className="break-all hyphens-auto">Зеркало AGC (Бельгия) не искажает, защищено бронепленкой</p>
            </div>
        </Html>
        <Html className="pointer-events-none "  position={[0, 0.90882832, 61.67114639]}>
            <div className={` bg-white rounded-xl text-center shadow-lg text-xs pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isAristoHovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="break-all hyphens-auto">Профиль &#34;ARISTO&#34;</p>
            </div>
        </Html>
        <group ref={door1}
            name="door1" position={[18.55768394, 3.01766467, -58.69234848]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh003.geometry}
            onClick={() => setDoor1Open((prev) => !prev)}
              onPointerOver={() => setIsDoor1Hovered(true)}
              onPointerOut={() => setIsDoor1Hovered(false)}>
              <meshStandardMaterial
                color={isDoor1Hovered ? "#FCCE10" : "#848484"}
              />
            </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_1.geometry}>
              <meshStandardMaterial
                color={(!isDoor1Hovered && isAristoHovered) ? "#FCCE10" : "#848484"}
              /> </mesh>
        </group>
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Razdvizhnaja_sistema_Braun_Part_4.geometry}
          position={[-18.76014709, -121.59999847, -48.28484726]}
              onPointerOver={() => setIsAristoHovered(true)}
              onPointerOut={() => setIsAristoHovered(false)}>
              <meshStandardMaterial
                color={isAristoHovered ? "#FCCE10" : "#848484"}
              />
            </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object001.geometry}
        material={materials["86.Clothing_22_62"]}
        position={[0.04065075, 1.34870219, -0.6062513]}
        scale={0.00837872}
      />
      <group position={[-0.03982405, 1.56620145, -1.03563356]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024.geometry}
          material={materials["86.Clothing_1_89"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh024_1.geometry}
          material={materials["86.Clothing_2_2"]}
        />
      </group>
      <group position={[0.0188178, 1.84943414, 0.93192446]} scale={0.00653603}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025.geometry}
          material={materials["86.Clothing_72_12"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_1.geometry}
          material={materials["86.Clothing_80_18"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_2.geometry}
          material={materials["86.Clothing_81_10"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_3.geometry}
          material={materials["86.Clothing_82_81"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh025_4.geometry}
          material={materials["86.Clothing_83_27"]}
        />
      </group>
      <group
        position={[0.01594127, 0.17905712, -0.95137703]}
        scale={0.00665559}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026.geometry}
          material={materials["86.Clothing_69_9"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_1.geometry}
          material={materials["86.Clothing_70_53"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_2.geometry}
          material={materials["86.Clothing_71_48"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh026_3.geometry}
          material={materials["86.Clothing_72_12"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object005.geometry}
        material={materials["86.Clothing_21_75"]}
        position={[-0.0119762, 1.84347534, -0.89713323]}
        scale={0.00844719}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object008.geometry}
        material={materials["86.Clothing_20_64"]}
        position={[0.0057827, 0.31215185, 0.88742799]}
        scale={0.01020584}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AM159_010.geometry}
        material={materials.AM159_010_1_4}
        position={[-0.04376776, 2.0590179, 0.25595647]}
        scale={0.0117415}
      />
      <group
        position={[-0.04980564, 0.10315198, -0.16487792]}
        rotation={[-Math.PI, Math.PI / 6, -Math.PI]}
        scale={0.00962742}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031.geometry}
          material={materials.Closet_Clothes_24_63}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_1.geometry}
          material={materials.Closet_Clothes_25_7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_2.geometry}
          material={materials.leather_Closet_Clothes_76_28}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_3.geometry}
          material={materials.leather_Closet_Clothes_77_46}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_4.geometry}
          material={materials.Closet_Clothes_78_4}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_5.geometry}
          material={materials.Closet_Clothes_79_23}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_6.geometry}
          material={materials.Closet_Clothes_22_71}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_7.geometry}
          material={materials.Closet_Clothes_86_5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_8.geometry}
          material={materials.Closet_Clothes_20_46}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh031_9.geometry}
          material={materials.Closet_Clothes_21_7}
        />
      </group>
      <Html className="pointer-events-none "  position={[0, 0.29572441, 0.31679869]}>
            <div className={` bg-white rounded-xl text-tart shadow-lg text-xs pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isCartHovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-gray-900 text-start border-b border-b-gray-400 pb-1">{door2Open && door1Open && !busy ? 'Можно достать' : 'Заблокировано дверью'}</p>
                <p className="break-all hyphens-auto">Корзинка</p>
            </div>
        </Html>
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
        onClick={() => door2Open && door1Open && !busy && setCartClose((prev) => !prev)}
          onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsCartHovered(true)}
          onPointerOut={() => setIsCartHovered(false)}>
          <meshStandardMaterial color={isCartHovered ? `${(door2Open && door1Open && !busy) ? "#FCCE10" :"#842F38" }` : "#EFEFEF"} />
        </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box032.geometry}
        material={materials["Material #43"]}
        position={[-0.00318817, 0.30675235, 0.01096878]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box033.geometry}
        material={materials["Material #43"]}
        position={[-0.00318817, 0.29279086, 0.01096878]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box034.geometry}
        material={materials["Material #43"]}
        position={[-0.00318817, 0.30675235, 0.5055002]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box035.geometry}
        material={materials["Material #43"]}
        position={[-0.00318817, 0.29279086, 0.5055002]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box031.geometry}
        material={materials["Material #43"]}
        position={[0.05704273, 1.74500024, -0.36249992]}
        scale={0.01}
      />
      <Html className="pointer-events-none "  position={[0, 1.26567757, 0.3]}>
            <div className={` bg-white rounded-xl text-center text-xs shadow-lg  pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${isLamartyHovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="break-all hyphens-auto">Корпус &#34;LAMARTY&#34; </p>
            </div>
        </Html>
        <group position={[0.13919, 1.18571062, -0.72536515]} onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsLamartyHovered(true)}
          onPointerOut={() => setIsLamartyHovered(false)}>
            <mesh position={[-0.15, 0.03, -0.526]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.45, 2.43, 0.01]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isLamartyHovered ? "#FCCE10" : "#938478"}
                    />
            </mesh>
            <mesh position={[-0.14, 1.2481, 0.723]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.466, 0.01, 2.51]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isLamartyHovered ? "#FCCE10" : "#938478"}
                    />
            </mesh>
            <mesh position={[-0.15, 0.03, 1.972]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.45, 2.43, 0.01]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isLamartyHovered ? "#FCCE10" : "#938478"}
                    />
            </mesh>
        </group>
      <Html className="pointer-events-none "  position={[0, 1.26567757, 0.3]}>
            <div className={` bg-white rounded-xl text-start text-xs shadow-lg  pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isClothesHovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-gray-900 border-b border-b-gray-400 pb-1">{!door2Open && !door1Open && !busy ? 'Можно достать' : 'Заблокировано дверью'}</p>
                <p className="break-all hyphens-auto">Вешалка</p>
            </div>
        </Html>
      <group position={[-0.02403762, 1.26567757, -0.35959378]} scale={0.01}>
        <group
        name="clothes"
            ref={clothes}
          position={[-1.24311447, 4.66243887, -0.34169579]}
          rotation={[0, 1.57053468, 0]}
          onClick={() =>
              !door2Open && !door1Open && !busy && setClotheClose((prev) => !prev)
            }
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041.geometry}
            material={materials["Fabric_86.Clothing_4_18"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_1.geometry}
            material={materials["Chrome_86.Clothing_5_30"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_2.geometry}
            material={materials["Cotton_86.Clothing_25_15"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_3.geometry}
            material={materials["Cotton_86.Clothing_50_43"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_4.geometry}
            material={materials["Cotton_86.Clothing_51_24"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_5.geometry}
            material={materials["Cotton_86.Clothing_52_22"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_6.geometry}
            material={materials["Cotton_86.Clothing_53_16"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_7.geometry}
            material={materials["Cotton_86.Clothing_54_37"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_8.geometry}
            material={materials["Cotton_86.Clothing_55_32"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_9.geometry}
            material={materials["Cotton_86.Clothing_56_3"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_10.geometry}
            material={materials["Cotton_86.Clothing_57_11"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_11.geometry}
            onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsClothesHovered(true)}
              onPointerOut={() => setIsClothesHovered(false)}>
              <meshStandardMaterial
                color={isClothesHovered ? `${(!door2Open && !door1Open && !busy) ? "#FCCE10" :"#842F38" }` : "#87597A"}
              />
            </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_12.geometry}
            onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsClothesHovered(true)}
              onPointerOut={() => setIsClothesHovered(false)}>
              <meshStandardMaterial
                color={isClothesHovered ? `${(!door2Open && !door1Open && !busy) ? "#FCCE10" :"#842F38" }` : "#87597A"}
              />
            </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_13.geometry}
            material={materials["86.Clothing_60_97"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh041_14.geometry}
            material={materials["Material #43"]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box036.geometry}
        material={materials["Material #2097647922"]}
        position={[-0.04855613, 0.82828361, 1.22197366]}
        scale={0.01}
      />
      <Html className="pointer-events-none "  position={[0, 0.90882832, 0.87950003]}>
            <div className={` bg-white rounded-xl text-start shadow-lg text-xs pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isPgraphHovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-gray-900 border-b border-b-gray-400 pb-1">{door2Open && door1Open && !busy ? 'Можно достать' : 'Заблокировано дверью'}</p>
                <p className="break-all hyphens-auto">Пантограф</p>
            </div>
        </Html>
      <group
        position={[0.02950783, 0.89614129, 0.87950003]}
        rotation={[0, 0, 0.01993889]}
        scale={0.01}
        ref={pgraph}
          onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsPgraphHovered(true)}
          onPointerOut={() => setIsPgraphHovered(false)}
          onClick={() =>
              door2Open && door1Open && !busy && setPgraphClose((prev) => !prev)
            }
      >
        <group
          position={[-1.24770546, 81.28044128, -0.07577531]}
          rotation={[0, 0, 0.01058312]}
          ref={pgraphsprite}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh053.geometry}
            material={materials["Material #2097647923"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh053_1.geometry}
            >
              <meshStandardMaterial
                color={isPgraphHovered ? `${(door2Open && door1Open && !busy) ? "#FCCE10" :"#842F38" }` : "#B6B6B6"}
              />
            </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          position={[-2.95078349, -90.31665802, -87.94999695]}>
            <meshStandardMaterial
              color={isPgraphHovered ? `${(door2Open && door1Open && !busy) ? "#FCCE10" :"#842F38" }` : "#B6B6B6"}
            />
          </mesh>
      </group>
      <group
        position={[-0.02281117, 0.91329545, -0.95943803]}
        rotation={[-Math.PI, 8.7e-7, -Math.PI]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh055.geometry}
          material={materials.vm_v4_020_4_68}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh055_1.geometry}
          material={materials.Metall_vm_v4_020_5_5}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vm_v4_020_Part_12.geometry}
        material={materials.vm_v4_020_10_98}
        position={[-0.07163371, 1.23079753, 0.24873586]}
        scale={0.01}
      />
      <group
        position={[-0.0151437, 1.54402077, 0.24140096]}
        rotation={[-Math.PI, 1.30899738, -Math.PI]}
        scale={0.00926106}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh061.geometry}
          material={materials.vm_v4_020_1_21}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh061_1.geometry}
          material={materials.Metall_vm_v4_020_2_37}
        />
      </group>
      <Html className="pointer-events-none "  position={[0, 1.78750074, 0.26930958]}>
            <div className={` bg-white rounded-xl text-start text-xs shadow-lg  pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isShkaf2Hovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-gray-900 border-b border-b-gray-400 pb-1">{door2Open && door1Open && !busy ? 'Можно открыть' : 'Заблокировано дверью'}</p>
                <p className="break-all hyphens-auto">Ящик Boyard или Hettich скрытого монтажа, дно ДСП, с доводчиками, полное выдвижение</p>
            </div>
        </Html>
      <group name="shkaf2"
          ref={shkaf2} position={[-0.04751194, 1.77929223, 0.28136426]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh063.geometry}
          material={materials.vm_v4_020_9_60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh063_1.geometry}
          onClick={() =>
              door2Open && door1Open && !busy && setShkaf2Close((prev) => !prev)
            }
            onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsShkaf2Hovered(true)}
            onPointerOut={() => setIsShkaf2Hovered(false)}>
            <meshStandardMaterial
              color={isShkaf2Hovered ? `${(door2Open && door1Open && !busy) ? "#FCCE10" :"#842F38" }` : "#625850"}
            />
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh063_2.geometry}
          material={materials["Material #25"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh063_3.geometry}
          material={materials["Material #25.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh063_4.geometry}
          material={materials["Material #25.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh063_5.geometry}
          material={materials["Material #25.004"]}
        />
      </group>
      <group position={[-0.03742862, 2.15704942, -0.35167041]} scale={0.01}>
        <group
          position={[16.0203743, -0.65545559, 12.86561394]}
          rotation={[Math.PI / 2, -0.17453307, -Math.PI / 2]}
          scale={[0.83787197, 0.83787209, 0.83787209]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh066.geometry}
            material={materials.Closet_Clothes_97_17}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh066_1.geometry}
            material={materials.Closet_Clothes_88_12}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh066_2.geometry}
            material={materials.Closet_Clothes_11_9}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh066_3.geometry}
            material={materials.chrome_Closet_Clothes_96_95}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh066_4.geometry}
            material={materials.Closet_Clothes_9_74}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh066_5.geometry}
            material={materials.Closet_Clothes_14_25}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh066_6.geometry}
            material={materials.Closet_Clothes_15_20}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh066_7.geometry}
            material={materials.Closet_Clothes_87_25}
          />
        </group>
      </group>
      <Html className="pointer-events-none "  position={[0, 0.82459706, 0.26930958]}>
            <div className={` bg-white rounded-xl text-start shadow-lg text-xs pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isShkaf3Hovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-gray-900 border-b border-b-gray-400 pb-1">{door2Open && door1Open && !busy ? 'Можно открыть' : 'Заблокировано дверью'}</p>
                <p className="text-xs break-all hyphens-auto">Ящик Boyard или Hettich скрытого монтажа, дно ДСП, с доводчиками, полное выдвижение</p>
            </div>
        </Html>
      <group name="shkaf3"
          ref={shkaf3} position={[0.12945169, 0.7634154, 0.2585001]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh082.geometry}
          onClick={() =>
              door2Open && door1Open && !busy && setShkaf3Close((prev) => !prev)
            }
            onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsShkaf3Hovered(true)}
            onPointerOut={() => setIsShkaf3Hovered(false)}>
            <meshStandardMaterial
              color={isShkaf3Hovered ? `${(door2Open && door1Open && !busy) ? "#FCCE10" :"#842F38" }` : "#625850"}
            />
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh082_1.geometry}
          material={materials["Material #25.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh082_2.geometry}
          material={materials["Material #25.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh082_3.geometry}
          material={materials["Material #25.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh082_4.geometry}
          material={materials["Material #25.009"]}
        />
      </group>
      <Html className="pointer-events-none "  position={[0, 0.50621921, 0.26930958]}>
            <div className={` bg-white rounded-xl text-start shadow-lg text-xs pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isShkaf4Hovered ? 'bg-opacity-100 opacity-100' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-gray-900  border-b border-b-gray-400 pb-1">{door2Open && door1Open && !busy ? 'Можно открыть' : 'Заблокировано дверью'}</p>
                <p className="text-xs break-all hyphens-auto">Ящик Boyard или Hettich скрытого монтажа, дно ДСП, с доводчиками, полное выдвижение</p>
            </div>
        </Html>
      <group name="shkaf4" ref={shkaf4} position={[0.12907869, 0.44519615, 0.2585001]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh083.geometry}
          onClick={() =>
            door2Open && door1Open && !busy && setShkaf4Close((prev) => !prev)
          }
          onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsShkaf4Hovered(true)}
          onPointerOut={() => setIsShkaf4Hovered(false)}>
          <meshStandardMaterial
            color={isShkaf4Hovered ? `${(door2Open && door1Open && !busy) ? "#FCCE10" :"#842F38" }` : "#625850"}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh083_1.geometry}
          material={materials["Material #25.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh083_2.geometry}
          material={materials["Material #25.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh083_3.geometry}
          material={materials["Material #25.013"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh083_4.geometry}
          material={materials["Material #25.014"]}
        />
      </group>
      <Html className="pointer-events-none "  position={[0, 1.14772236, 0.8]}>
            <div className={`bg-white rounded-xl text-xs text-start shadow-lg pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isShkaf1Hovered ? 'bg-opacity-100 opacity-100 ' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-gray-900  border-b border-b-gray-400 pb-1">{!door2Open && !door1Open && !busy ? 'Можно открыть' : 'Заблокировано дверью'}</p>
                <p className="text-xs break-all hyphens-auto">Ящик Boyard или Hettich скрытого монтажа, дно ДСП, с доводчиками, полное выдвижение</p>
            </div>
        </Html>
        <Html className="pointer-events-none "  position={[0, 1.14772236, 0.4]}>
            <div className={`bg-white rounded-xl text-xs text-center shadow-lg pointer-events-none backdrop-blur-2xl min-w-[250px] p-2 text-black select-none transition-all duration-100 ease-linear ${!isDoor1Hovered && !isDoor2Hovered && isRehaoHovered ? 'bg-opacity-100 opacity-100 ' : 'bg-opacity-0 opacity-0'}`}>
                <p className="text-xs break-all hyphens-auto">Кромка &#34;REHAU&#34; 2 мм.</p>
            </div>
        </Html>
        <group position={[0.13919, 1.18571062, -0.72536515]} onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsRehaoHovered(true)}
          onPointerOut={() => setIsRehaoHovered(false)}>
            <mesh position={[0,0,1.24]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 2.35, 0.02]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,0,0.73]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 2.35, 0.02]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 2.35, 0.02]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <group>
            <mesh position={[0,0.83,0.36]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.72]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,0.57,0.36]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.72]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
              <mesh position={[0,0.87,-0.25]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,0.55,-0.25]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,0.22,-0.25]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,-0.09,-0.25]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,-0.41,-0.25]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,-0.734,-0.25]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            </group>
            <group>
            <mesh position={[0,0.83,1.6]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.72]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,0.57,1.6]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.72]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
              <mesh position={[0,0.87,0.99]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,0.55,0.99]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,0.22,0.99]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,-0.09,0.99]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,-0.41,0.99]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            <mesh position={[0,-0.734,0.99]} receiveShadow>
                  <boxGeometry attach="geometry" args={[0.01, 0.02, 0.52]} scale={0.01}/>
                  <meshStandardMaterial
                      color={isRehaoHovered ? "#FCCE10" : "#5d4838"}
                    />
            </mesh>
            </group>
        </group>
        
      <group name="shkaf1"
          ref={shkaf1} position={[0.12919, 1.08271062, -0.98536515]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh084.geometry}
          onClick={() =>
            !door2Open && !door1Open && !busy && setShkaf1Close((prev) => !prev)
          }
          onPointerOver={() => !isDoor1Hovered && !isDoor2Hovered && setIsShkaf1Hovered(true)}
          onPointerOut={() => setIsShkaf1Hovered(false)}>
          <meshStandardMaterial
            color={isShkaf1Hovered ? `${(!door2Open && !door1Open  && !busy) ? "#FCCE10" :"#842F38" }` : "#625850"}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh084_1.geometry}
          material={materials["Material #25.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh084_2.geometry}
          material={materials["Material #25.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh084_3.geometry}
          material={materials["Material #25.018"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh084_4.geometry}
          material={materials["Material #25.019"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/wardrobe.gltf");
