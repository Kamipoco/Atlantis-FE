import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    arms_mesh: THREE.SkinnedMesh;
    belt_mesh: THREE.SkinnedMesh;
    Mesh007: THREE.SkinnedMesh;
    Mesh007_1: THREE.SkinnedMesh;
    bodyarmor_mesh: THREE.SkinnedMesh;
    claok_mesh: THREE.SkinnedMesh;
    helmet_mesh: THREE.SkinnedMesh;
    pants_mesh: THREE.SkinnedMesh;
    shoes_mesh: THREE.SkinnedMesh;
    World: THREE.Bone;
  };
  materials: {
    arm_mat: THREE.MeshStandardMaterial;
    belt_mat: THREE.MeshStandardMaterial;
    body_mat: THREE.MeshStandardMaterial;
    lambert14: THREE.MeshStandardMaterial;
    bodyarmor_mat: THREE.MeshStandardMaterial;
    coak_mat: THREE.MeshStandardMaterial;
    helmet_mat: THREE.MeshStandardMaterial;
    pant_mat: THREE.MeshStandardMaterial;
    shoes_mat: THREE.MeshStandardMaterial;
  };
};

type ActionName = "ExportGrp|Take 001|BaseLayer";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function GunnerPose({
  colorBases,
  ...props
}: JSX.IntrinsicElements["group"] & { colorBases?: any }) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/assets/glb/brine/gunner.gltf"
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
    bodyColorMap,
    bodyMetalnessMap,
    bodyNormalMap,
    bodyRoughnessMap,
  ] = useTexture([
    "/assets/texture/brine/gunner/arm/Arm_BaseColor.png",
    "/assets/texture/brine/gunner/arm/Arm_BaseColor1.png",
    "/assets/texture/brine/gunner/arm/Arm_BaseColor2.png",
    "/assets/texture/brine/gunner/arm/Arm_BaseColor3.png",
    "/assets/texture/brine/gunner/arm/Arm_BaseColor4.png",
    "/assets/texture/brine/gunner/arm/Arm_BaseColor5.png",
    "/assets/texture/brine/gunner/arm/Arm_BaseColor6.png",
    "/assets/texture/brine/gunner/arm/Arm_Metallic.png",
    "/assets/texture/brine/gunner/arm/Arm_Normal.png",
    "/assets/texture/brine/gunner/arm/Arm_Roughness.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_BaseColor.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_BaseColor1.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_BaseColor2.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_BaseColor3.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_BaseColor4.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_BaseColor5.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_BaseColor6.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_Metallic.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_Normal.png",
    "/assets/texture/brine/gunner/bodyarmor/bodyarmor_Roughness.png",
    "/assets/texture/brine/gunner/pant/Pant_BaseColor.png",
    "/assets/texture/brine/gunner/pant/Pant_BaseColor1.png",
    "/assets/texture/brine/gunner/pant/Pant_BaseColor2.png",
    "/assets/texture/brine/gunner/pant/Pant_BaseColor3.png",
    "/assets/texture/brine/gunner/pant/Pant_BaseColor4.png",
    "/assets/texture/brine/gunner/pant/Pant_BaseColor5.png",
    "/assets/texture/brine/gunner/pant/Pant_BaseColor6.png",
    "/assets/texture/brine/gunner/pant/Pant_Metallic.png",
    "/assets/texture/brine/gunner/pant/Pant_Normal.png",
    "/assets/texture/brine/gunner/pant/Pant_Roughness.png",
    "/assets/texture/brine/gunner/cloak/cloak_BaseColor.png",
    "/assets/texture/brine/gunner/cloak/cloak_BaseColor1.png",
    "/assets/texture/brine/gunner/cloak/cloak_BaseColor2.png",
    "/assets/texture/brine/gunner/cloak/cloak_BaseColor3.png",
    "/assets/texture/brine/gunner/cloak/cloak_BaseColor4.png",
    "/assets/texture/brine/gunner/cloak/cloak_BaseColor5.png",
    "/assets/texture/brine/gunner/cloak/cloak_BaseColor6.png",
    "/assets/texture/brine/gunner/cloak/cloak_Metallic.png",
    "/assets/texture/brine/gunner/cloak/cloak_Normal.png",
    "/assets/texture/brine/gunner/cloak/cloak_Roughness.png",
    "/assets/texture/brine/gunner/helmet/Helmet_BaseColor.png",
    "/assets/texture/brine/gunner/helmet/Helmet_BaseColor1.png",
    "/assets/texture/brine/gunner/helmet/Helmet_BaseColor2.png",
    "/assets/texture/brine/gunner/helmet/Helmet_BaseColor3.png",
    "/assets/texture/brine/gunner/helmet/Helmet_BaseColor4.png",
    "/assets/texture/brine/gunner/helmet/Helmet_BaseColor5.png",
    "/assets/texture/brine/gunner/helmet/Helmet_BaseColor6.png",
    "/assets/texture/brine/gunner/helmet/Helmet_Metallic.png",
    "/assets/texture/brine/gunner/helmet/Helmet_Normal.png",
    "/assets/texture/brine/gunner/helmet/Helmet_Roughness.png",
    "/assets/texture/brine/gunner/belt/Belt_BaseColor.png",
    "/assets/texture/brine/gunner/belt/Belt_BaseColor1.png",
    "/assets/texture/brine/gunner/belt/Belt_BaseColor2.png",
    "/assets/texture/brine/gunner/belt/Belt_BaseColor3.png",
    "/assets/texture/brine/gunner/belt/Belt_BaseColor4.png",
    "/assets/texture/brine/gunner/belt/Belt_BaseColor5.png",
    "/assets/texture/brine/gunner/belt/Belt_BaseColor6.png",
    "/assets/texture/brine/gunner/belt/Belt_Metallic.png",
    "/assets/texture/brine/gunner/belt/Belt_Normal.png",
    "/assets/texture/brine/gunner/belt/Belt_Roughness.png",
    "/assets/texture/brine/gunner/shoes/Shoes_BaseColor.png",
    "/assets/texture/brine/gunner/shoes/Shoes_BaseColor1.png",
    "/assets/texture/brine/gunner/shoes/Shoes_BaseColor2.png",
    "/assets/texture/brine/gunner/shoes/Shoes_BaseColor3.png",
    "/assets/texture/brine/gunner/shoes/Shoes_BaseColor4.png",
    "/assets/texture/brine/gunner/shoes/Shoes_BaseColor5.png",
    "/assets/texture/brine/gunner/shoes/Shoes_BaseColor6.png",
    "/assets/texture/brine/gunner/shoes/Shoes_Metallic.png",
    "/assets/texture/brine/gunner/shoes/Shoes_Normal.png",
    "/assets/texture/brine/gunner/shoes/Shoes_Roughness.png",
    "/assets/texture/brine/gunner/body/body_BaseColor.png",
    "/assets/texture/brine/gunner/body/body_Metallic.png",
    "/assets/texture/brine/gunner/body/body_Normal.png",
    "/assets/texture/brine/gunner/body/body_Roughness.png",
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
  bodyColorMap.flipY = false;
  bodyMetalnessMap.flipY = false;
  bodyNormalMap.flipY = false;
  bodyRoughnessMap.flipY = false;
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
        position={[0, -1, 0]}
        rotation={[Math.PI / 2.3, 0, 0.4]}
        scale={0.019}
      >
        <primitive object={nodes.World} />
        <skinnedMesh
          geometry={nodes.arms_mesh.geometry}
          material={materials.arm_mat}
          skeleton={nodes.arms_mesh.skeleton}
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
          geometry={nodes.belt_mesh.geometry}
          material={materials.belt_mat}
          skeleton={nodes.belt_mesh.skeleton}
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
          geometry={nodes.Mesh007.geometry}
          material={materials.body_mat}
          skeleton={nodes.Mesh007.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyColorMap}
            normalMap={bodyNormalMap}
            roughnessMap={bodyRoughnessMap}
            metalnessMap={bodyMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh007_1.geometry}
          material={materials.lambert14}
          skeleton={nodes.Mesh007_1.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyColorMap}
            normalMap={bodyNormalMap}
            roughnessMap={bodyRoughnessMap}
            metalnessMap={bodyMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.bodyarmor_mesh.geometry}
          material={materials.bodyarmor_mat}
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
          geometry={nodes.claok_mesh.geometry}
          material={materials.coak_mat}
          skeleton={nodes.claok_mesh.skeleton}
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
          geometry={nodes.helmet_mesh.geometry}
          material={materials.helmet_mat}
          skeleton={nodes.helmet_mesh.skeleton}
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
          geometry={nodes.pants_mesh.geometry}
          material={materials.pant_mat}
          skeleton={nodes.pants_mesh.skeleton}
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
          geometry={nodes.shoes_mesh.geometry}
          material={materials.shoes_mat}
          skeleton={nodes.shoes_mesh.skeleton}
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
