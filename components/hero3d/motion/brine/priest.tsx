import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { HeroTextureColorBaseTypes } from "src/types/genesisHero";

type GLTFResult = GLTF & {
  nodes: {
    arm_Mesh: THREE.SkinnedMesh;
    body_Mesh: THREE.SkinnedMesh;
    bodyarmor_Mesh: THREE.SkinnedMesh;
    helmet_Mesh: THREE.SkinnedMesh;
    pant_Mesh: THREE.SkinnedMesh;
    shoes_Mesh: THREE.SkinnedMesh;
    Staff_base: THREE.SkinnedMesh;
    Staff_lv1: THREE.SkinnedMesh;
    Staff_lv2: THREE.SkinnedMesh;
    Staff_lv3: THREE.SkinnedMesh;
    Staff_lv4: THREE.SkinnedMesh;
    Staff_lv5: THREE.SkinnedMesh;
    World: THREE.Bone;
    World_1: THREE.Bone;
  };
  materials: {
    arm_mat: THREE.MeshStandardMaterial;
    body_mat: THREE.MeshStandardMaterial;
    bodyarmor_mat: THREE.MeshStandardMaterial;
    helmet_mat: THREE.MeshStandardMaterial;
    pant_mat: THREE.MeshStandardMaterial;
    shoes_mat: THREE.MeshStandardMaterial;
    Base1: THREE.MeshStandardMaterial;
    Staff_level8: THREE.MeshStandardMaterial;
    Staff_level7: THREE.MeshStandardMaterial;
    Staff_level6: THREE.MeshStandardMaterial;
    Staff_level9: THREE.MeshStandardMaterial;
    Staff_level10: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "ExportGrp|Take 001|BaseLayer.001"
  | "ExportGrp.001|Take 001|BaseLayer.001";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function PriestBrineMotion({
  colors,
  ...props
}: JSX.IntrinsicElements["group"] & { colors: HeroTextureColorBaseTypes }) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/assets/glb/brine/priest-motion.gltf"
  ) as GLTFResult;
  // @ts-ignore
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(() => {
    actions["ExportGrp|Take 001|BaseLayer.001"].play();
    actions["ExportGrp.001|Take 001|BaseLayer.001"].play();
  }, []);

  const [
    armColorMap0,
    armColorMap1,
    armColorMap2,
    armColorMap3,
    armColorMap4,
    armColorMap5,
    armColorMap6,
    armColorMap7,
    armColorMap8,
    armColorMap9,
    armColorMap10,
    armColorMap11,
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
    bodyArmorColorMap7,
    bodyArmorColorMap8,
    bodyArmorColorMap9,
    bodyArmorColorMap10,
    bodyArmorColorMap11,
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
    pantColorMap7,
    pantColorMap8,
    pantColorMap9,
    pantColorMap10,
    pantColorMap11,
    pantMetalnessMap,
    pantNormalMap,
    pantRoughnessMap,
    helmetColorMap0,
    helmetColorMap1,
    helmetColorMap2,
    helmetColorMap3,
    helmetColorMap4,
    helmetColorMap5,
    helmetColorMap6,
    helmetColorMap7,
    helmetColorMap8,
    helmetColorMap9,
    helmetColorMap10,
    helmetColorMap11,
    helmetMetalnessMap,
    helmetNormalMap,
    helmetRoughnessMap,
    shoesColorMap0,
    shoesColorMap1,
    shoesColorMap2,
    shoesColorMap3,
    shoesColorMap4,
    shoesColorMap5,
    shoesColorMap6,
    shoesColorMap7,
    shoesColorMap8,
    shoesColorMap9,
    shoesColorMap10,
    shoesColorMap11,
    shoesMetalnessMap,
    shoesNormalMap,
    shoesRoughnessMap,
    bodyColorMap,
    bodyMetalnessMap,
    bodyNormalMap,
    bodyRoughnessMap,
    staffBaseColorMap,
    staffBaseMetalnessMap,
    staffBaseNormalMap,
    staffBaseRoughnessMap,
    staffLv1ColorMap,
    staffLv1MetalnessMap,
    staffLv1NormalMap,
    staffLv1RoughnessMap,
    staffLv2ColorMap,
    staffLv2MetalnessMap,
    staffLv2NormalMap,
    staffLv2RoughnessMap,
    staffLv3ColorMap,
    staffLv3MetalnessMap,
    staffLv3NormalMap,
    staffLv3RoughnessMap,
    staffLv4ColorMap,
    staffLv4MetalnessMap,
    staffLv4NormalMap,
    staffLv4RoughnessMap,
    staffLv5ColorMap,
    staffLv5MetalnessMap,
    staffLv5NormalMap,
    staffLv5RoughnessMap,
  ] = useTexture([
    "/assets/texture/brine/priest/arm/Arm_BaseColor.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor1.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor2.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor3.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor4.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor5.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor6.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor7.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor8.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor9.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor10.png",
    "/assets/texture/brine/priest/arm/Arm_BaseColor11.png",
    "/assets/texture/brine/priest/arm/Arm_Metallic.png",
    "/assets/texture/brine/priest/arm/Arm_Normal.png",
    "/assets/texture/brine/priest/arm/Arm_Roughness.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor1.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor2.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor3.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor4.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor5.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor6.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor7.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor8.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor9.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor10.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_BaseColor11.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_Metallic.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_Normal.png",
    "/assets/texture/brine/priest/bodyarmor/Bodyarmor_Roughness.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor1.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor2.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor3.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor4.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor5.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor6.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor7.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor8.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor9.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor10.png",
    "/assets/texture/brine/priest/pant/Pant_BaseColor11.png",
    "/assets/texture/brine/priest/pant/Pant_Metallic.png",
    "/assets/texture/brine/priest/pant/Pant_Normal.png",
    "/assets/texture/brine/priest/pant/Pant_Roughness.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor1.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor2.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor3.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor4.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor5.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor6.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor7.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor8.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor9.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor10.png",
    "/assets/texture/brine/priest/helmet/helmet_BaseColor11.png",
    "/assets/texture/brine/priest/helmet/helmet_Metallic.png",
    "/assets/texture/brine/priest/helmet/helmet_Normal.png",
    "/assets/texture/brine/priest/helmet/helmet_Roughness.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor1.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor2.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor3.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor4.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor5.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor6.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor7.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor8.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor9.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor10.png",
    "/assets/texture/brine/priest/shoes/Shoes_BaseColor11.png",
    "/assets/texture/brine/priest/shoes/Shoes_Metallic.png",
    "/assets/texture/brine/priest/shoes/Shoes_Normal.png",
    "/assets/texture/brine/priest/shoes/Shoes_Roughness.png",
    "/assets/texture/brine/priest/body/Body_BaseColor.png",
    "/assets/texture/brine/priest/body/Body_Metallic.png",
    "/assets/texture/brine/priest/body/Body_Normal.png",
    "/assets/texture/brine/priest/body/Body_Roughness.png",
    "/assets/texture/staff/Staff_Base/Staff_Base_BaseColor.png",
    "/assets/texture/staff/Staff_Base/Staff_Base_Metallic.png",
    "/assets/texture/staff/Staff_Base/Staff_Base_Normal.png",
    "/assets/texture/staff/Staff_Base/Staff_Base_Roughness.png",
    "/assets/texture/staff/Staff_lv1/Staff_lv1_BaseColor.png",
    "/assets/texture/staff/Staff_lv1/Staff_lv1_Metallic.png",
    "/assets/texture/staff/Staff_lv1/Staff_lv1_Normal.png",
    "/assets/texture/staff/Staff_lv1/Staff_lv1_Roughness.png",
    "/assets/texture/staff/Staff_lv2/Staff_lv2_BaseColor.png",
    "/assets/texture/staff/Staff_lv2/Staff_lv2_Metallic.png",
    "/assets/texture/staff/Staff_lv2/Staff_lv2_Normal.png",
    "/assets/texture/staff/Staff_lv2/Staff_lv2_Roughness.png",
    "/assets/texture/staff/Staff_lv3/Staff_lv3_BaseColor.png",
    "/assets/texture/staff/Staff_lv3/Staff_lv3_Metallic.png",
    "/assets/texture/staff/Staff_lv3/Staff_lv3_Normal.png",
    "/assets/texture/staff/Staff_lv3/Staff_lv3_Roughness.png",
    "/assets/texture/staff/Staff_lv4/Staff_lv4_BaseColor.png",
    "/assets/texture/staff/Staff_lv4/Staff_lv4_Metallic.png",
    "/assets/texture/staff/Staff_lv4/Staff_lv4_Normal.png",
    "/assets/texture/staff/Staff_lv4/Staff_lv4_Roughness.png",
    "/assets/texture/staff/Staff_lv5/Staff_lv5_BaseColor.png",
    "/assets/texture/staff/Staff_lv5/Staff_lv5_Metallic.png",
    "/assets/texture/staff/Staff_lv5/Staff_lv5_Normal.png",
    "/assets/texture/staff/Staff_lv5/Staff_lv5_Roughness.png",
  ]);

  armColorMap0.flipY = false;
  armColorMap1.flipY = false;
  armColorMap2.flipY = false;
  armColorMap3.flipY = false;
  armColorMap4.flipY = false;
  armColorMap5.flipY = false;
  armColorMap6.flipY = false;
  armColorMap7.flipY = false;
  armColorMap8.flipY = false;
  armColorMap9.flipY = false;
  armColorMap10.flipY = false;
  armColorMap11.flipY = false;
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
  bodyArmorColorMap7.flipY = false;
  bodyArmorColorMap8.flipY = false;
  bodyArmorColorMap9.flipY = false;
  bodyArmorColorMap10.flipY = false;
  bodyArmorColorMap11.flipY = false;
  bodyArmorMetalnessMap.flipY = false;
  bodyArmorNormalMap.flipY = false;
  bodyArmorRoughnessMap.flipY = false;
  helmetColorMap0.flipY = false;
  helmetColorMap1.flipY = false;
  helmetColorMap2.flipY = false;
  helmetColorMap3.flipY = false;
  helmetColorMap4.flipY = false;
  helmetColorMap5.flipY = false;
  helmetColorMap6.flipY = false;
  helmetColorMap7.flipY = false;
  helmetColorMap8.flipY = false;
  helmetColorMap9.flipY = false;
  helmetColorMap10.flipY = false;
  helmetColorMap11.flipY = false;
  helmetMetalnessMap.flipY = false;
  helmetNormalMap.flipY = false;
  helmetRoughnessMap.flipY = false;
  shoesColorMap0.flipY = false;
  shoesColorMap1.flipY = false;
  shoesColorMap2.flipY = false;
  shoesColorMap3.flipY = false;
  shoesColorMap4.flipY = false;
  shoesColorMap5.flipY = false;
  shoesColorMap6.flipY = false;
  shoesColorMap7.flipY = false;
  shoesColorMap8.flipY = false;
  shoesColorMap9.flipY = false;
  shoesColorMap10.flipY = false;
  shoesColorMap11.flipY = false;
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
  pantColorMap7.flipY = false;
  pantColorMap8.flipY = false;
  pantColorMap9.flipY = false;
  pantColorMap10.flipY = false;
  pantColorMap11.flipY = false;
  pantMetalnessMap.flipY = false;
  pantNormalMap.flipY = false;
  pantRoughnessMap.flipY = false;
  staffBaseColorMap.flipY = false;
  staffBaseMetalnessMap.flipY = false;
  staffBaseNormalMap.flipY = false;
  staffBaseRoughnessMap.flipY = false;
  staffLv1ColorMap.flipY = false;
  staffLv1MetalnessMap.flipY = false;
  staffLv1NormalMap.flipY = false;
  staffLv1RoughnessMap.flipY = false;
  staffLv2ColorMap.flipY = false;
  staffLv2MetalnessMap.flipY = false;
  staffLv2NormalMap.flipY = false;
  staffLv2RoughnessMap.flipY = false;
  staffLv3ColorMap.flipY = false;
  staffLv3MetalnessMap.flipY = false;
  staffLv3NormalMap.flipY = false;
  staffLv3RoughnessMap.flipY = false;
  staffLv4ColorMap.flipY = false;
  staffLv4MetalnessMap.flipY = false;
  staffLv4NormalMap.flipY = false;
  staffLv4RoughnessMap.flipY = false;
  staffLv5ColorMap.flipY = false;
  staffLv5MetalnessMap.flipY = false;
  staffLv5NormalMap.flipY = false;
  staffLv5RoughnessMap.flipY = false;

  const armColors = [
    armColorMap0,
    armColorMap1,
    armColorMap2,
    armColorMap3,
    armColorMap4,
    armColorMap5,
    armColorMap6,
    armColorMap7,
    armColorMap8,
    armColorMap9,
    armColorMap10,
    armColorMap11,
  ];
  const bodyArmorColors = [
    bodyArmorColorMap0,
    bodyArmorColorMap1,
    bodyArmorColorMap2,
    bodyArmorColorMap3,
    bodyArmorColorMap4,
    bodyArmorColorMap5,
    bodyArmorColorMap6,
    bodyArmorColorMap7,
    bodyArmorColorMap8,
    bodyArmorColorMap9,
    bodyArmorColorMap10,
    bodyArmorColorMap11,
  ];
  const helmetColors = [
    helmetColorMap0,
    helmetColorMap1,
    helmetColorMap2,
    helmetColorMap3,
    helmetColorMap4,
    helmetColorMap5,
    helmetColorMap6,
    helmetColorMap7,
    helmetColorMap8,
    helmetColorMap9,
    helmetColorMap10,
    helmetColorMap11,
  ];
  const shoesColors = [
    shoesColorMap0,
    shoesColorMap1,
    shoesColorMap2,
    shoesColorMap3,
    shoesColorMap4,
    shoesColorMap5,
    shoesColorMap6,
    shoesColorMap7,
    shoesColorMap8,
    shoesColorMap9,
    shoesColorMap10,
    shoesColorMap11,
  ];
  const pantColors = [
    pantColorMap0,
    pantColorMap1,
    pantColorMap2,
    pantColorMap3,
    pantColorMap4,
    pantColorMap5,
    pantColorMap6,
    pantColorMap7,
    pantColorMap8,
    pantColorMap9,
    pantColorMap10,
    pantColorMap11,
  ];

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0, -0.8, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.012}
      >
        <primitive object={nodes.World} />
        <skinnedMesh
          geometry={nodes.arm_Mesh.geometry}
          material={materials.arm_mat}
          skeleton={nodes.arm_Mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={armColors[colors.arm]}
            normalMap={armNormalMap}
            roughnessMap={armRoughnessMap}
            metalnessMap={armMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.body_Mesh.geometry}
          material={materials.body_mat}
          skeleton={nodes.body_Mesh.skeleton}
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
          geometry={nodes.bodyarmor_Mesh.geometry}
          material={materials.bodyarmor_mat}
          skeleton={nodes.bodyarmor_Mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bodyArmorColors[colors.bodyarmor]}
            normalMap={bodyArmorNormalMap}
            roughnessMap={bodyArmorRoughnessMap}
            metalnessMap={bodyArmorMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.helmet_Mesh.geometry}
          material={materials.helmet_mat}
          skeleton={nodes.helmet_Mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={helmetColors[colors.helmet]}
            normalMap={helmetNormalMap}
            roughnessMap={helmetRoughnessMap}
            metalnessMap={helmetMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.pant_Mesh.geometry}
          material={materials.pant_mat}
          skeleton={nodes.pant_Mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={pantColors[colors.pant]}
            normalMap={pantNormalMap}
            roughnessMap={pantRoughnessMap}
            metalnessMap={pantMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.shoes_Mesh.geometry}
          material={materials.shoes_mat}
          skeleton={nodes.shoes_Mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={shoesColors[colors.shoes]}
            normalMap={shoesNormalMap}
            roughnessMap={shoesRoughnessMap}
            metalnessMap={shoesMetalnessMap}
          />
        </skinnedMesh>
      </group>
      <group
        position={[0, -0.8, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.012}
      >
        <primitive object={nodes.World_1} />
        <skinnedMesh
          geometry={nodes.Staff_base.geometry}
          material={materials.Base1}
          skeleton={nodes.Staff_base.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={staffBaseColorMap}
            normalMap={staffBaseNormalMap}
            roughnessMap={staffBaseRoughnessMap}
            metalnessMap={staffBaseMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Staff_lv1.geometry}
          material={materials.Staff_level8}
          skeleton={nodes.Staff_lv1.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={staffLv1ColorMap}
            normalMap={staffLv1NormalMap}
            roughnessMap={staffLv1RoughnessMap}
            metalnessMap={staffLv1MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Staff_lv2.geometry}
          material={materials.Staff_level7}
          skeleton={nodes.Staff_lv2.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={staffLv2ColorMap}
            normalMap={staffLv2NormalMap}
            roughnessMap={staffLv2RoughnessMap}
            metalnessMap={staffLv2MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Staff_lv3.geometry}
          material={materials.Staff_level6}
          skeleton={nodes.Staff_lv3.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={staffLv3ColorMap}
            normalMap={staffLv3NormalMap}
            roughnessMap={staffLv3RoughnessMap}
            metalnessMap={staffLv3MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Staff_lv4.geometry}
          material={materials.Staff_level9}
          skeleton={nodes.Staff_lv4.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={staffLv4ColorMap}
            normalMap={staffLv4NormalMap}
            roughnessMap={staffLv4RoughnessMap}
            metalnessMap={staffLv4MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Staff_lv5.geometry}
          material={materials.Staff_level10}
          skeleton={nodes.Staff_lv5.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={staffLv5ColorMap}
            normalMap={staffLv5NormalMap}
            roughnessMap={staffLv5RoughnessMap}
            metalnessMap={staffLv5MetalnessMap}
          />
        </skinnedMesh>
      </group>
    </group>
  );
}
