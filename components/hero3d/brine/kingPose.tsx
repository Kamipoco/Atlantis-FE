import React, { useRef } from "react";
import * as THREE from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Brine_Vua_rig_v1arm_mesh: THREE.SkinnedMesh;
    Brine_Vua_rig_v1belt_mesh: THREE.SkinnedMesh;
    Mesh007: THREE.SkinnedMesh;
    Mesh007_1: THREE.SkinnedMesh;
    Brine_Vua_rig_v1bodyarmor_mesh: THREE.SkinnedMesh;
    Brine_Vua_rig_v1cloak_mesh: THREE.SkinnedMesh;
    Brine_Vua_rig_v1helmet_mesh: THREE.SkinnedMesh;
    Brine_Vua_rig_v1pant_mesh: THREE.SkinnedMesh;
    Brine_Vua_rig_v1shoes_mesh: THREE.SkinnedMesh;
    Brine_Vua_rig_v1World: THREE.Bone;
  };
  materials: {
    ["Brine_Vua_rig_v1:arm"]: THREE.MeshStandardMaterial;
    ["Brine_Vua_rig_v1:belt"]: THREE.MeshStandardMaterial;
    ["Brine_Vua_rig_v1:lambert2"]: THREE.MeshStandardMaterial;
    ["Brine_Vua_rig_v1:body"]: THREE.MeshStandardMaterial;
    ["Brine_Vua_rig_v1:bodyarmor"]: THREE.MeshStandardMaterial;
    ["Brine_Vua_rig_v1:cloak"]: THREE.MeshStandardMaterial;
    ["Brine_Vua_rig_v1:helmet"]: THREE.MeshStandardMaterial;
    ["Brine_Vua_rig_v1:pant"]: THREE.MeshStandardMaterial;
    ["Brine_Vua_rig_v1:shoes"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Brine_Vua_rig_v1:ExportGrp|Take 001|BaseLayer";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

function KingPose({
  colorBases,
  ...props
}: JSX.IntrinsicElements["group"] & { colorBases?: any }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/assets/glb/brine/brine-king.gltf"
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
    "/assets/texture/brine/king/arm/arm_Base_Color.png",
    "/assets/texture/brine/king/arm/arm_Base_Color1.png",
    "/assets/texture/brine/king/arm/arm_Base_Color2.png",
    "/assets/texture/brine/king/arm/arm_Base_Color3.png",
    "/assets/texture/brine/king/arm/arm_Base_Color4.png",
    "/assets/texture/brine/king/arm/arm_Base_Color5.png",
    "/assets/texture/brine/king/arm/arm_Base_Color6.png",
    "/assets/texture/brine/king/arm/arm_Metallic.png",
    "/assets/texture/brine/king/arm/arm_Normal_OpenGL.png",
    "/assets/texture/brine/king/arm/arm_Roughness.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Base_Color.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Base_Color1.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Base_Color2.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Base_Color3.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Base_Color4.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Base_Color5.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Base_Color6.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Metallic.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Normal_OpenGL.png",
    "/assets/texture/brine/king/bodyarmor/bodyarmor_Roughness.png",
    "/assets/texture/brine/king/pant/pant_Base_Color.png",
    "/assets/texture/brine/king/pant/pant_Base_Color1.png",
    "/assets/texture/brine/king/pant/pant_Base_Color2.png",
    "/assets/texture/brine/king/pant/pant_Base_Color3.png",
    "/assets/texture/brine/king/pant/pant_Base_Color4.png",
    "/assets/texture/brine/king/pant/pant_Base_Color5.png",
    "/assets/texture/brine/king/pant/pant_Base_Color6.png",
    "/assets/texture/brine/king/pant/pant_Metallic.png",
    "/assets/texture/brine/king/pant/pant_Normal_OpenGL.png",
    "/assets/texture/brine/king/pant/pant_Roughness.png",
    "/assets/texture/brine/king/cloak/cloak_Base_Color.png",
    "/assets/texture/brine/king/cloak/cloak_Base_Color1.png",
    "/assets/texture/brine/king/cloak/cloak_Base_Color2.png",
    "/assets/texture/brine/king/cloak/cloak_Base_Color3.png",
    "/assets/texture/brine/king/cloak/cloak_Base_Color4.png",
    "/assets/texture/brine/king/cloak/cloak_Base_Color5.png",
    "/assets/texture/brine/king/cloak/cloak_Base_Color6.png",
    "/assets/texture/brine/king/cloak/cloak_Metallic.png",
    "/assets/texture/brine/king/cloak/cloak_Normal_OpenGL.png",
    "/assets/texture/brine/king/cloak/cloak_Roughness.png",
    "/assets/texture/brine/king/helmet/helmet_Base_Color.png",
    "/assets/texture/brine/king/helmet/helmet_Base_Color1.png",
    "/assets/texture/brine/king/helmet/helmet_Base_Color2.png",
    "/assets/texture/brine/king/helmet/helmet_Base_Color3.png",
    "/assets/texture/brine/king/helmet/helmet_Base_Color4.png",
    "/assets/texture/brine/king/helmet/helmet_Base_Color5.png",
    "/assets/texture/brine/king/helmet/helmet_Base_Color6.png",
    "/assets/texture/brine/king/helmet/helmet_Metallic.png",
    "/assets/texture/brine/king/helmet/helmet_Normal_OpenGL.png",
    "/assets/texture/brine/king/helmet/helmet_Roughness.png",
    "/assets/texture/brine/king/belt/belt_Base_Color.png",
    "/assets/texture/brine/king/belt/belt_Base_Color1.png",
    "/assets/texture/brine/king/belt/belt_Base_Color2.png",
    "/assets/texture/brine/king/belt/belt_Base_Color3.png",
    "/assets/texture/brine/king/belt/belt_Base_Color4.png",
    "/assets/texture/brine/king/belt/belt_Base_Color5.png",
    "/assets/texture/brine/king/belt/belt_Base_Color6.png",
    "/assets/texture/brine/king/belt/belt_Metallic.png",
    "/assets/texture/brine/king/belt/belt_Normal_OpenGL.png",
    "/assets/texture/brine/king/belt/belt_Roughness.png",
    "/assets/texture/brine/king/shoes/shoes_Base_Color.png",
    "/assets/texture/brine/king/shoes/shoes_Base_Color1.png",
    "/assets/texture/brine/king/shoes/shoes_Base_Color2.png",
    "/assets/texture/brine/king/shoes/shoes_Base_Color3.png",
    "/assets/texture/brine/king/shoes/shoes_Base_Color4.png",
    "/assets/texture/brine/king/shoes/shoes_Base_Color5.png",
    "/assets/texture/brine/king/shoes/shoes_Base_Color6.png",
    "/assets/texture/brine/king/shoes/shoes_Metallic.png",
    "/assets/texture/brine/king/shoes/shoes_Normal_OpenGL.png",
    "/assets/texture/brine/king/shoes/shoes_Roughness.png",
    "/assets/texture/brine/king/body/body_Base_Color.png",
    "/assets/texture/brine/king/body/body_Metallic.png",
    "/assets/texture/brine/king/body/body_Normal_OpenGL.png",
    "/assets/texture/brine/king/body/body_Roughness.png",
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
        position={[0, -1.3, 0]}
        rotation={[Math.PI / 2, 0, 0.4]}
        scale={0.019}
      >
        <primitive object={nodes.Brine_Vua_rig_v1World} />
        <skinnedMesh
          geometry={nodes.Brine_Vua_rig_v1arm_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:arm"]}
          skeleton={nodes.Brine_Vua_rig_v1arm_mesh.skeleton}
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
          geometry={nodes.Brine_Vua_rig_v1belt_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:belt"]}
          skeleton={nodes.Brine_Vua_rig_v1belt_mesh.skeleton}
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
          material={materials["Brine_Vua_rig_v1:lambert2"]}
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
          material={materials["Brine_Vua_rig_v1:body"]}
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
          geometry={nodes.Brine_Vua_rig_v1bodyarmor_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:bodyarmor"]}
          skeleton={nodes.Brine_Vua_rig_v1bodyarmor_mesh.skeleton}
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
          geometry={nodes.Brine_Vua_rig_v1cloak_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:cloak"]}
          skeleton={nodes.Brine_Vua_rig_v1cloak_mesh.skeleton}
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
          geometry={nodes.Brine_Vua_rig_v1helmet_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:helmet"]}
          skeleton={nodes.Brine_Vua_rig_v1helmet_mesh.skeleton}
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
          geometry={nodes.Brine_Vua_rig_v1pant_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:pant"]}
          skeleton={nodes.Brine_Vua_rig_v1pant_mesh.skeleton}
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
          geometry={nodes.Brine_Vua_rig_v1shoes_mesh.geometry}
          material={materials["Brine_Vua_rig_v1:shoes"]}
          skeleton={nodes.Brine_Vua_rig_v1shoes_mesh.skeleton}
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

export default KingPose;
