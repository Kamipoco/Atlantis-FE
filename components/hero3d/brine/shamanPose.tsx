import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    arm_mesh: THREE.SkinnedMesh;
    Belt_mesh: THREE.SkinnedMesh;
    bodyarmor_mesh: THREE.SkinnedMesh;
    Cloak_mesh: THREE.SkinnedMesh;
    Helmet_mesh: THREE.SkinnedMesh;
    pant_mesh: THREE.SkinnedMesh;
    Shoes_mesh: THREE.SkinnedMesh;
    World: THREE.Bone;
  };
  materials: {
    lambert9: THREE.MeshStandardMaterial;
    lambert5: THREE.MeshStandardMaterial;
    lambert3: THREE.MeshStandardMaterial;
    lambert6: THREE.MeshStandardMaterial;
    lambert8: THREE.MeshStandardMaterial;
    blinn1: THREE.MeshStandardMaterial;
    lambert7: THREE.MeshStandardMaterial;
  };
};

type ActionName = "ExportGrp|Take 001|BaseLayer";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

function ShamanPose({
  colorBases,
  ...props
}: JSX.IntrinsicElements["group"] & { colorBases?: any }) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/assets/glb/brine/shaman.gltf"
  ) as GLTFResult;

  const [
    armColorMap0,
    armColorMap1,
    armColorMap2,
    armColorMap3,
    armColorMap4,
    armColorMap5,
    armColorMap6,
    armMetalnessMap,
    armNormalMap,
    armRoughnessMap,
    bodyArmorColorMap0,
    bodyArmorColorMap1,
    bodyArmorColorMap2,
    bodyArmorColorMap3,
    bodyArmorColorMap4,
    bodyArmorColorMap5,
    bodyArmorColorMap6,
    bodyArmorMetalnessMap,
    bodyArmorNormalMap,
    bodyArmorRoughnessMap,
    pantColorMap0,
    pantColorMap1,
    pantColorMap2,
    pantColorMap3,
    pantColorMap4,
    pantColorMap5,
    pantColorMap6,
    pantMetalnessMap,
    pantNormalMap,
    pantRoughnessMap,
    cloakColorMap0,
    cloakColorMap1,
    cloakColorMap2,
    cloakColorMap3,
    cloakColorMap4,
    cloakColorMap5,
    cloakColorMap6,
    cloakMetalnessMap,
    cloakNormalMap,
    cloakRoughnessMap,
    helmetColorMap0,
    helmetColorMap1,
    helmetColorMap2,
    helmetColorMap3,
    helmetColorMap4,
    helmetColorMap5,
    helmetColorMap6,
    helmetMetalnessMap,
    helmetNormalMap,
    helmetRoughnessMap,
    beltColorMap0,
    beltColorMap1,
    beltColorMap2,
    beltColorMap3,
    beltColorMap4,
    beltColorMap5,
    beltColorMap6,
    beltMetalnessMap,
    beltNormalMap,
    beltRoughnessMap,
    shoesColorMap0,
    shoesColorMap1,
    shoesColorMap2,
    shoesColorMap3,
    shoesColorMap4,
    shoesColorMap5,
    shoesColorMap6,
    shoesMetalnessMap,
    shoesNormalMap,
    shoesRoughnessMap,
  ] = useTexture([
    "/assets/texture/brine/shaman/arm/arm_BaseColor.png",
    "/assets/texture/brine/shaman/arm/arm_BaseColor_1.png",
    "/assets/texture/brine/shaman/arm/arm_BaseColor_2.png",
    "/assets/texture/brine/shaman/arm/arm_BaseColor_3.png",
    "/assets/texture/brine/shaman/arm/arm_BaseColor_4.png",
    "/assets/texture/brine/shaman/arm/arm_BaseColor_5.png",
    "/assets/texture/brine/shaman/arm/arm_BaseColor_6.png",
    "/assets/texture/brine/shaman/arm/arm_Metallic.png",
    "/assets/texture/brine/shaman/arm/arm_Normal.png",
    "/assets/texture/brine/shaman/arm/arm_Roughness.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_BaseColor.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_BaseColor_1.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_BaseColor_2.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_BaseColor_3.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_BaseColor_4.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_BaseColor_5.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_BaseColor_6.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_Metallic.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_Normal.png",
    "/assets/texture/brine/shaman/bodyarmor/bodyarmor_Roughness.png",
    "/assets/texture/brine/shaman/pant/pant_BaseColor.png",
    "/assets/texture/brine/shaman/pant/pant_BaseColor_1.png",
    "/assets/texture/brine/shaman/pant/pant_BaseColor_2.png",
    "/assets/texture/brine/shaman/pant/pant_BaseColor_3.png",
    "/assets/texture/brine/shaman/pant/pant_BaseColor_4.png",
    "/assets/texture/brine/shaman/pant/pant_BaseColor_5.png",
    "/assets/texture/brine/shaman/pant/pant_BaseColor_6.png",
    "/assets/texture/brine/shaman/pant/pant_Metallic.png",
    "/assets/texture/brine/shaman/pant/pant_Normal.png",
    "/assets/texture/brine/shaman/pant/pant_Roughness.png",
    "/assets/texture/brine/shaman/cloak/cloak_BaseColor.png",
    "/assets/texture/brine/shaman/cloak/cloak_BaseColor_1.png",
    "/assets/texture/brine/shaman/cloak/cloak_BaseColor_2.png",
    "/assets/texture/brine/shaman/cloak/cloak_BaseColor_3.png",
    "/assets/texture/brine/shaman/cloak/cloak_BaseColor_4.png",
    "/assets/texture/brine/shaman/cloak/cloak_BaseColor_5.png",
    "/assets/texture/brine/shaman/cloak/cloak_BaseColor_6.png",
    "/assets/texture/brine/shaman/cloak/cloak_Metallic.png",
    "/assets/texture/brine/shaman/cloak/cloak_Normal.png",
    "/assets/texture/brine/shaman/cloak/cloak_Roughness.png",
    "/assets/texture/brine/shaman/helmet/helmet_BaseColor.png",
    "/assets/texture/brine/shaman/helmet/helmet_BaseColor_1.png",
    "/assets/texture/brine/shaman/helmet/helmet_BaseColor_2.png",
    "/assets/texture/brine/shaman/helmet/helmet_BaseColor_3.png",
    "/assets/texture/brine/shaman/helmet/helmet_BaseColor_4.png",
    "/assets/texture/brine/shaman/helmet/helmet_BaseColor_5.png",
    "/assets/texture/brine/shaman/helmet/helmet_BaseColor_6.png",
    "/assets/texture/brine/shaman/helmet/helmet_Metallic.png",
    "/assets/texture/brine/shaman/helmet/helmet_Normal.png",
    "/assets/texture/brine/shaman/helmet/helmet_Roughness.png",
    "/assets/texture/brine/shaman/belt/belt_BaseColor.png",
    "/assets/texture/brine/shaman/belt/belt_BaseColor_1.png",
    "/assets/texture/brine/shaman/belt/belt_BaseColor_2.png",
    "/assets/texture/brine/shaman/belt/belt_BaseColor_3.png",
    "/assets/texture/brine/shaman/belt/belt_BaseColor_4.png",
    "/assets/texture/brine/shaman/belt/belt_BaseColor_5.png",
    "/assets/texture/brine/shaman/belt/belt_BaseColor_6.png",
    "/assets/texture/brine/shaman/belt/belt_Metallic.png",
    "/assets/texture/brine/shaman/belt/belt_Normal.png",
    "/assets/texture/brine/shaman/belt/belt_Roughness.png",
    "/assets/texture/brine/shaman/shoes/shoes_BaseColor.png",
    "/assets/texture/brine/shaman/shoes/shoes_BaseColor_1.png",
    "/assets/texture/brine/shaman/shoes/shoes_BaseColor_2.png",
    "/assets/texture/brine/shaman/shoes/shoes_BaseColor_3.png",
    "/assets/texture/brine/shaman/shoes/shoes_BaseColor_4.png",
    "/assets/texture/brine/shaman/shoes/shoes_BaseColor_5.png",
    "/assets/texture/brine/shaman/shoes/shoes_BaseColor_6.png",
    "/assets/texture/brine/shaman/shoes/shoes_Metallic.png",
    "/assets/texture/brine/shaman/shoes/shoes_Normal.png",
    "/assets/texture/brine/shaman/shoes/shoes_Roughness.png",
  ]);

  armColorMap0.flipY = false;
  armColorMap1.flipY = false;
  armColorMap2.flipY = false;
  armColorMap3.flipY = false;
  armColorMap4.flipY = false;
  armColorMap5.flipY = false;
  armColorMap6.flipY = false;
  armMetalnessMap.flipY = false;
  armNormalMap.flipY = false;
  armRoughnessMap.flipY = false;
  bodyArmorColorMap0.flipY = false;
  bodyArmorColorMap1.flipY = false;
  bodyArmorColorMap2.flipY = false;
  bodyArmorColorMap3.flipY = false;
  bodyArmorColorMap4.flipY = false;
  bodyArmorColorMap5.flipY = false;
  bodyArmorColorMap6.flipY = false;
  bodyArmorMetalnessMap.flipY = false;
  bodyArmorNormalMap.flipY = false;
  bodyArmorRoughnessMap.flipY = false;
  cloakColorMap0.flipY = false;
  cloakColorMap1.flipY = false;
  cloakColorMap2.flipY = false;
  cloakColorMap3.flipY = false;
  cloakColorMap4.flipY = false;
  cloakColorMap5.flipY = false;
  cloakColorMap6.flipY = false;
  cloakMetalnessMap.flipY = false;
  cloakNormalMap.flipY = false;
  cloakRoughnessMap.flipY = false;
  helmetColorMap0.flipY = false;
  helmetColorMap1.flipY = false;
  helmetColorMap2.flipY = false;
  helmetColorMap3.flipY = false;
  helmetColorMap4.flipY = false;
  helmetColorMap5.flipY = false;
  helmetColorMap6.flipY = false;
  helmetMetalnessMap.flipY = false;
  helmetNormalMap.flipY = false;
  helmetRoughnessMap.flipY = false;
  beltColorMap0.flipY = false;
  beltColorMap1.flipY = false;
  beltColorMap2.flipY = false;
  beltColorMap3.flipY = false;
  beltColorMap4.flipY = false;
  beltColorMap5.flipY = false;
  beltColorMap6.flipY = false;
  beltMetalnessMap.flipY = false;
  beltNormalMap.flipY = false;
  beltRoughnessMap.flipY = false;
  shoesColorMap0.flipY = false;
  shoesColorMap1.flipY = false;
  shoesColorMap2.flipY = false;
  shoesColorMap3.flipY = false;
  shoesColorMap4.flipY = false;
  shoesColorMap5.flipY = false;
  shoesColorMap6.flipY = false;
  shoesMetalnessMap.flipY = false;
  shoesNormalMap.flipY = false;
  shoesRoughnessMap.flipY = false;
  pantColorMap0.flipY = false;
  pantColorMap1.flipY = false;
  pantColorMap2.flipY = false;
  pantColorMap3.flipY = false;
  pantColorMap4.flipY = false;
  pantColorMap5.flipY = false;
  pantColorMap6.flipY = false;
  pantMetalnessMap.flipY = false;
  pantNormalMap.flipY = false;
  pantRoughnessMap.flipY = false;

  const armColors = [
    armColorMap0,
    armColorMap1,
    armColorMap2,
    armColorMap3,
    armColorMap4,
    armColorMap5,
    armColorMap6,
  ];
  const beltColors = [
    beltColorMap0,
    beltColorMap1,
    beltColorMap2,
    beltColorMap3,
    beltColorMap4,
    beltColorMap5,
    beltColorMap6,
  ];
  const bodyArmorColors = [
    bodyArmorColorMap0,
    bodyArmorColorMap1,
    bodyArmorColorMap2,
    bodyArmorColorMap3,
    bodyArmorColorMap4,
    bodyArmorColorMap5,
    bodyArmorColorMap6,
  ];
  const cloakColors = [
    cloakColorMap0,
    cloakColorMap1,
    cloakColorMap2,
    cloakColorMap3,
    cloakColorMap4,
    cloakColorMap5,
    cloakColorMap6,
  ];
  const helmetColors = [
    helmetColorMap0,
    helmetColorMap1,
    helmetColorMap2,
    helmetColorMap3,
    helmetColorMap4,
    helmetColorMap5,
    helmetColorMap6,
  ];
  const shoesColors = [
    shoesColorMap0,
    shoesColorMap1,
    shoesColorMap2,
    shoesColorMap3,
    shoesColorMap4,
    shoesColorMap5,
    shoesColorMap6,
  ];
  const pantColors = [
    pantColorMap0,
    pantColorMap1,
    pantColorMap2,
    pantColorMap3,
    pantColorMap4,
    pantColorMap5,
    pantColorMap6,
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -1.4, 0]}
        rotation={[Math.PI / 2, 0, 0.4]}
        scale={0.017}
      >
        <primitive object={nodes.World} />
        <skinnedMesh
          geometry={nodes.arm_mesh.geometry}
          material={materials.lambert9}
          skeleton={nodes.arm_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={armColors[colorBases.arm]}
            normalMap={armNormalMap}
            roughnessMap={armRoughnessMap}
            metalnessMap={armMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Belt_mesh.geometry}
          material={materials.lambert5}
          skeleton={nodes.Belt_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={beltColors[colorBases.belt]}
            normalMap={beltNormalMap}
            roughnessMap={beltRoughnessMap}
            metalnessMap={beltMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.bodyarmor_mesh.geometry}
          material={materials.lambert3}
          skeleton={nodes.bodyarmor_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyArmorColors[colorBases.bodyarmor]}
            normalMap={bodyArmorNormalMap}
            roughnessMap={bodyArmorRoughnessMap}
            metalnessMap={bodyArmorMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Cloak_mesh.geometry}
          material={materials.lambert6}
          skeleton={nodes.Cloak_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={cloakColors[colorBases.cloak]}
            normalMap={cloakNormalMap}
            roughnessMap={cloakRoughnessMap}
            metalnessMap={cloakMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Helmet_mesh.geometry}
          material={materials.lambert8}
          skeleton={nodes.Helmet_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={helmetColors[colorBases.helmet]}
            normalMap={helmetNormalMap}
            roughnessMap={helmetRoughnessMap}
            metalnessMap={helmetMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.pant_mesh.geometry}
          material={materials.blinn1}
          skeleton={nodes.pant_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={pantColors[colorBases.pant]}
            normalMap={pantNormalMap}
            roughnessMap={pantRoughnessMap}
            metalnessMap={pantMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Shoes_mesh.geometry}
          material={materials.lambert7}
          skeleton={nodes.Shoes_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={shoesColors[colorBases.shoes]}
            normalMap={shoesNormalMap}
            roughnessMap={shoesRoughnessMap}
            metalnessMap={shoesMetalnessMap}
          />
        </skinnedMesh>
      </group>
    </group>
  );
}

export default ShamanPose;
