import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    arm_Mesh: THREE.SkinnedMesh;
    belt_Mesh: THREE.SkinnedMesh;
    body_Mesh: THREE.SkinnedMesh;
    bodyarmor_Mesh: THREE.SkinnedMesh;
    cloak_Mesh: THREE.SkinnedMesh;
    helmet_Mesh: THREE.SkinnedMesh;
    pant_Mesh: THREE.SkinnedMesh;
    shoes_Mesh: THREE.SkinnedMesh;
    World: THREE.Bone;
  };
  materials: {
    lambert2: THREE.MeshStandardMaterial;
    lambert9: THREE.MeshStandardMaterial;
    lambert4: THREE.MeshStandardMaterial;
    lambert3: THREE.MeshStandardMaterial;
    cloak_mat: THREE.MeshStandardMaterial;
    lambert5: THREE.MeshStandardMaterial;
    lambert7: THREE.MeshStandardMaterial;
    lambert8: THREE.MeshStandardMaterial;
  };
};

type ActionName = "ExportGrp|Take 001|BaseLayer.004";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function WarriorPose({
  colorBases,
  ...props
}: JSX.IntrinsicElements["group"] & { colorBases?: any }) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/assets/glb/brine/warrior.gltf"
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
    // pantColorMap0,
    // pantColorMap1,
    // pantColorMap2,
    // pantColorMap3,
    // pantColorMap4,
    // pantColorMap5,
    // pantColorMap6,
    // pantMetalnessMap,
    // pantNormalMap,
    // pantRoughnessMap,
    // cloakColorMap0,
    // cloakColorMap1,
    // cloakColorMap2,
    // cloakColorMap3,
    // cloakColorMap4,
    // cloakColorMap5,
    // cloakColorMap6,
    // cloakMetalnessMap,
    // cloakNormalMap,
    // cloakRoughnessMap,
    // helmetColorMap0,
    // helmetColorMap1,
    // helmetColorMap2,
    // helmetColorMap3,
    // helmetColorMap4,
    // helmetColorMap5,
    // helmetColorMap6,
    // helmetMetalnessMap,
    // helmetNormalMap,
    // helmetRoughnessMap,
    // beltColorMap0,
    // beltColorMap1,
    // beltColorMap2,
    // beltColorMap3,
    // beltColorMap4,
    // beltColorMap5,
    // beltColorMap6,
    // beltMetalnessMap,
    // beltNormalMap,
    // beltRoughnessMap,
    // shoesColorMap0,
    // shoesColorMap1,
    // shoesColorMap2,
    // shoesColorMap3,
    // shoesColorMap4,
    // shoesColorMap5,
    // shoesColorMap6,
    // shoesMetalnessMap,
    // shoesNormalMap,
    // shoesRoughnessMap,
    // bodyColorMap,
    // bodyMetalnessMap,
    // bodyNormalMap,
    // bodyRoughnessMap,
  ] = useTexture([
    "/assets/texture/brine/warrior/arm/Arm_BaseColor.png",
    "/assets/texture/brine/warrior/arm/Arm_BaseColor1.png",
    "/assets/texture/brine/warrior/arm/Arm_BaseColor2.png",
    "/assets/texture/brine/warrior/arm/Arm_BaseColor3.png",
    "/assets/texture/brine/warrior/arm/Arm_BaseColor4.png",
    "/assets/texture/brine/warrior/arm/Arm_BaseColor5.png",
    "/assets/texture/brine/warrior/arm/Arm_BaseColor6.png",
    "/assets/texture/brine/warrior/arm/Arm_Metallic.png",
    "/assets/texture/brine/warrior/arm/Arm_Normal.png",
    "/assets/texture/brine/warrior/arm/Arm_Roughness.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_BaseColor.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_BaseColor1.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_BaseColor2.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_BaseColor3.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_BaseColor4.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_BaseColor5.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_BaseColor6.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_Metallic.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_Normal.png",
    "/assets/texture/brine/warrior/bodyarmor/bodyarmor_Roughness.png",
    // "/assets/texture/brine/warrior/pant/pant_BaseColor.png",
    // "/assets/texture/brine/warrior/pant/pant_BaseColor1.png",
    // "/assets/texture/brine/warrior/pant/pant_BaseColor2.png",
    // "/assets/texture/brine/warrior/pant/pant_BaseColor3.png",
    // "/assets/texture/brine/warrior/pant/pant_BaseColor4.png",
    // "/assets/texture/brine/warrior/pant/pant_BaseColor5.png",
    // "/assets/texture/brine/warrior/pant/pant_BaseColor6.png",
    // "/assets/texture/brine/warrior/pant/pant_Metallic.png",
    // "/assets/texture/brine/warrior/pant/pant_Normal.png",
    // "/assets/texture/brine/warrior/pant/pant_Roughness.png",
    // "/assets/texture/brine/warrior/cloak/cloak_BaseColor.png",
    // "/assets/texture/brine/warrior/cloak/cloak_BaseColor1.png",
    // "/assets/texture/brine/warrior/cloak/cloak_BaseColor2.png",
    // "/assets/texture/brine/warrior/cloak/cloak_BaseColor3.png",
    // "/assets/texture/brine/warrior/cloak/cloak_BaseColor4.png",
    // "/assets/texture/brine/warrior/cloak/cloak_BaseColor5.png",
    // "/assets/texture/brine/warrior/cloak/cloak_BaseColor6.png",
    // "/assets/texture/brine/warrior/cloak/cloak_Metallic.png",
    // "/assets/texture/brine/warrior/cloak/cloak_Normal.png",
    // "/assets/texture/brine/warrior/cloak/cloak_Roughness.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_BaseColor.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_BaseColor1.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_BaseColor2.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_BaseColor3.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_BaseColor4.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_BaseColor5.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_BaseColor6.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_Metallic.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_Normal.png",
    // "/assets/texture/brine/warrior/helmet/Helmet_Roughness.png",
    // "/assets/texture/brine/warrior/belt/belt_BaseColor.png",
    // "/assets/texture/brine/warrior/belt/belt_BaseColor1.png",
    // "/assets/texture/brine/warrior/belt/belt_BaseColor2.png",
    // "/assets/texture/brine/warrior/belt/belt_BaseColor3.png",
    // "/assets/texture/brine/warrior/belt/belt_BaseColor4.png",
    // "/assets/texture/brine/warrior/belt/belt_BaseColor5.png",
    // "/assets/texture/brine/warrior/belt/belt_BaseColor6.png",
    // "/assets/texture/brine/warrior/belt/belt_Metallic.png",
    // "/assets/texture/brine/warrior/belt/belt_Normal.png",
    // "/assets/texture/brine/warrior/belt/belt_Roughness.png",
    // "/assets/texture/brine/warrior/shoes/shoes_BaseColor.png",
    // "/assets/texture/brine/warrior/shoes/shoes_BaseColor1.png",
    // "/assets/texture/brine/warrior/shoes/shoes_BaseColor2.png",
    // "/assets/texture/brine/warrior/shoes/shoes_BaseColor3.png",
    // "/assets/texture/brine/warrior/shoes/shoes_BaseColor4.png",
    // "/assets/texture/brine/warrior/shoes/shoes_BaseColor5.png",
    // "/assets/texture/brine/warrior/shoes/shoes_BaseColor6.png",
    // "/assets/texture/brine/warrior/shoes/shoes_Metallic.png",
    // "/assets/texture/brine/warrior/shoes/shoes_Normal.png",
    // "/assets/texture/brine/warrior/shoes/shoes_Roughness.png",
    // "/assets/texture/brine/warrior/body/body_BaseColor.png",
    // "/assets/texture/brine/warrior/body/body_Metallic.png",
    // "/assets/texture/brine/warrior/body/body_Normal.png",
    // "/assets/texture/brine/warrior/body/body_Roughness.png",
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
  // cloakColorMap0.flipY = false;
  // cloakColorMap1.flipY = false;
  // cloakColorMap2.flipY = false;
  // cloakColorMap3.flipY = false;
  // cloakColorMap4.flipY = false;
  // cloakColorMap5.flipY = false;
  // cloakColorMap6.flipY = false;
  // cloakMetalnessMap.flipY = false;
  // cloakNormalMap.flipY = false;
  // cloakRoughnessMap.flipY = false;
  // helmetColorMap0.flipY = false;
  // helmetColorMap1.flipY = false;
  // helmetColorMap2.flipY = false;
  // helmetColorMap3.flipY = false;
  // helmetColorMap4.flipY = false;
  // helmetColorMap5.flipY = false;
  // helmetColorMap6.flipY = false;
  // helmetMetalnessMap.flipY = false;
  // helmetNormalMap.flipY = false;
  // helmetRoughnessMap.flipY = false;
  // beltColorMap0.flipY = false;
  // beltColorMap1.flipY = false;
  // beltColorMap2.flipY = false;
  // beltColorMap3.flipY = false;
  // beltColorMap4.flipY = false;
  // beltColorMap5.flipY = false;
  // beltColorMap6.flipY = false;
  // beltMetalnessMap.flipY = false;
  // beltNormalMap.flipY = false;
  // beltRoughnessMap.flipY = false;
  // shoesColorMap0.flipY = false;
  // shoesColorMap1.flipY = false;
  // shoesColorMap2.flipY = false;
  // shoesColorMap3.flipY = false;
  // shoesColorMap4.flipY = false;
  // shoesColorMap5.flipY = false;
  // shoesColorMap6.flipY = false;
  // shoesMetalnessMap.flipY = false;
  // shoesNormalMap.flipY = false;
  // shoesRoughnessMap.flipY = false;
  // bodyColorMap.flipY = false;
  // bodyMetalnessMap.flipY = false;
  // bodyNormalMap.flipY = false;
  // bodyRoughnessMap.flipY = false;
  // pantColorMap0.flipY = false;
  // pantColorMap1.flipY = false;
  // pantColorMap2.flipY = false;
  // pantColorMap3.flipY = false;
  // pantColorMap4.flipY = false;
  // pantColorMap5.flipY = false;
  // pantColorMap6.flipY = false;
  // pantMetalnessMap.flipY = false;
  // pantNormalMap.flipY = false;
  // pantRoughnessMap.flipY = false;

  const armColors = [
    armColorMap0,
    armColorMap1,
    armColorMap2,
    armColorMap3,
    armColorMap4,
    armColorMap5,
    armColorMap6,
  ];
  // const beltColors = [
  //   beltColorMap0,
  //   beltColorMap1,
  //   beltColorMap2,
  //   beltColorMap3,
  //   beltColorMap4,
  //   beltColorMap5,
  //   beltColorMap6,
  // ];
  const bodyArmorColors = [
    bodyArmorColorMap0,
    bodyArmorColorMap1,
    bodyArmorColorMap2,
    bodyArmorColorMap3,
    bodyArmorColorMap4,
    bodyArmorColorMap5,
    bodyArmorColorMap6,
  ];
  // const cloakColors = [
  //   cloakColorMap0,
  //   cloakColorMap1,
  //   cloakColorMap2,
  //   cloakColorMap3,
  //   cloakColorMap4,
  //   cloakColorMap5,
  //   cloakColorMap6,
  // ];
  // const helmetColors = [
  //   helmetColorMap0,
  //   helmetColorMap1,
  //   helmetColorMap2,
  //   helmetColorMap3,
  //   helmetColorMap4,
  //   helmetColorMap5,
  //   helmetColorMap6,
  // ];
  // const shoesColors = [
  //   shoesColorMap0,
  //   shoesColorMap1,
  //   shoesColorMap2,
  //   shoesColorMap3,
  //   shoesColorMap4,
  //   shoesColorMap5,
  //   shoesColorMap6,
  // ];
  // const pantColors = [
  //   pantColorMap0,
  //   pantColorMap1,
  //   pantColorMap2,
  //   pantColorMap3,
  //   pantColorMap4,
  //   pantColorMap5,
  //   pantColorMap6,
  // ];

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.World} />
        <skinnedMesh
          geometry={nodes.arm_Mesh.geometry}
          material={materials.lambert2}
          skeleton={nodes.arm_Mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={armColorMap0}
            normalMap={armNormalMap}
            roughnessMap={armRoughnessMap}
            metalnessMap={armMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.belt_Mesh.geometry}
          material={materials.lambert9}
          skeleton={nodes.belt_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.body_Mesh.geometry}
          material={materials.lambert4}
          skeleton={nodes.body_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.bodyarmor_Mesh.geometry}
          material={materials.lambert3}
          skeleton={nodes.bodyarmor_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.cloak_Mesh.geometry}
          material={materials.cloak_mat}
          skeleton={nodes.cloak_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.helmet_Mesh.geometry}
          material={materials.lambert5}
          skeleton={nodes.helmet_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.pant_Mesh.geometry}
          material={materials.lambert7}
          skeleton={nodes.pant_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.shoes_Mesh.geometry}
          material={materials.lambert8}
          skeleton={nodes.shoes_Mesh.skeleton}
        />
      </group>
    </group>
  );
}
