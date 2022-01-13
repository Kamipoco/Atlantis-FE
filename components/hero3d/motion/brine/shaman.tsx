import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { HeroTextureColorBaseTypes } from "src/types/genesisHero";

type GLTFResult = GLTF & {
  nodes: {
    arm_mesh: THREE.SkinnedMesh;
    Belt_mesh: THREE.SkinnedMesh;
    Mesh036: THREE.SkinnedMesh;
    Mesh036_1: THREE.SkinnedMesh;
    Cloak_mesh: THREE.SkinnedMesh;
    Helmet_mesh: THREE.SkinnedMesh;
    pant_mesh: THREE.SkinnedMesh;
    Shoes_mesh: THREE.SkinnedMesh;
    BaseBook: THREE.SkinnedMesh;
    Level1: THREE.SkinnedMesh;
    Level2: THREE.SkinnedMesh;
    Level3: THREE.SkinnedMesh;
    Level4: THREE.SkinnedMesh;
    Level5: THREE.SkinnedMesh;
    World: THREE.Bone;
    World_1: THREE.Bone;
  };
  materials: {
    ["arm_mat.001"]: THREE.MeshStandardMaterial;
    lambert3: THREE.MeshStandardMaterial;
    lambert2: THREE.MeshStandardMaterial;
    ["bodyarmor_mat.001"]: THREE.MeshStandardMaterial;
    cloak: THREE.MeshStandardMaterial;
    ["helmet_mat.001"]: THREE.MeshStandardMaterial;
    ["shoes_mat.001"]: THREE.MeshStandardMaterial;
    Base: THREE.MeshStandardMaterial;
    Book_Lv1: THREE.MeshStandardMaterial;
    Book_Lv2: THREE.MeshStandardMaterial;
    Book_Lv3: THREE.MeshStandardMaterial;
    Book_Lv4: THREE.MeshStandardMaterial;
    Book_Lv5: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "ExportGrp|Take 001|BaseLayer.002"
  | "ExportGrp.001|Take 001|BaseLayer.002";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function ShamanBrineMotion({
  colors,
  ...props
}: JSX.IntrinsicElements["group"] & { colors: HeroTextureColorBaseTypes }) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/assets/glb/brine/shaman-motion.gltf"
  ) as GLTFResult;
  // @ts-ignore
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(() => {
    actions["ExportGrp|Take 001|BaseLayer.002"].play();
    actions["ExportGrp.001|Take 001|BaseLayer.002"].play();
  }, []);

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
    bookBaseColorMap,
    bookBaseMetalnessMap,
    bookBaseNormalMap,
    bookBaseRoughnessMap,
    bookLv1ColorMap,
    bookLv1MetalnessMap,
    bookLv1NormalMap,
    bookLv1RoughnessMap,
    bookLv2ColorMap,
    bookLv2MetalnessMap,
    bookLv2NormalMap,
    bookLv2RoughnessMap,
    bookLv3ColorMap,
    bookLv3MetalnessMap,
    bookLv3NormalMap,
    bookLv3RoughnessMap,
    bookLv4ColorMap,
    bookLv4MetalnessMap,
    bookLv4NormalMap,
    bookLv4RoughnessMap,
    bookLv5ColorMap,
    bookLv5MetalnessMap,
    bookLv5NormalMap,
    bookLv5RoughnessMap,
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
    "/assets/texture/book/Book_Base/Book_Base_BaseColor.png",
    "/assets/texture/book/Book_Base/Book_Base_Metallic.png",
    "/assets/texture/book/Book_Base/Book_Base_Normal.png",
    "/assets/texture/book/Book_Base/Book_Base_Roughness.png",
    "/assets/texture/book/Book_Lv1/Book_Book_Lv1_BaseColor.png",
    "/assets/texture/book/Book_Lv1/Book_Book_Lv1_Metallic.png",
    "/assets/texture/book/Book_Lv1/Book_Book_Lv1_Normal.png",
    "/assets/texture/book/Book_Lv1/Book_Book_Lv1_Roughness.png",
    "/assets/texture/book/Book_Lv2/Book_Book_Lv2_BaseColor.png",
    "/assets/texture/book/Book_Lv2/Book_Book_Lv2_Metallic.png",
    "/assets/texture/book/Book_Lv2/Book_Book_Lv2_Normal.png",
    "/assets/texture/book/Book_Lv2/Book_Book_Lv2_Roughness.png",
    "/assets/texture/book/Book_Lv3/Book_Book_Lv3_BaseColor.png",
    "/assets/texture/book/Book_Lv3/Book_Book_Lv3_Metallic.png",
    "/assets/texture/book/Book_Lv3/Book_Book_Lv3_Normal.png",
    "/assets/texture/book/Book_Lv3/Book_Book_Lv3_Roughness.png",
    "/assets/texture/book/Book_Lv4/Book_Book_Lv4_BaseColor.png",
    "/assets/texture/book/Book_Lv4/Book_Book_Lv4_Metallic.png",
    "/assets/texture/book/Book_Lv4/Book_Book_Lv4_Normal.png",
    "/assets/texture/book/Book_Lv4/Book_Book_Lv4_Roughness.png",
    "/assets/texture/book/Book_Lv5/Book_Book_Lv5_BaseColor.png",
    "/assets/texture/book/Book_Lv5/Book_Book_Lv5_Metallic.png",
    "/assets/texture/book/Book_Lv5/Book_Book_Lv5_Normal.png",
    "/assets/texture/book/Book_Lv5/Book_Book_Lv5_Roughness.png",
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
  bookBaseColorMap.flipY = false;
  bookBaseMetalnessMap.flipY = false;
  bookBaseNormalMap.flipY = false;
  bookBaseRoughnessMap.flipY = false;
  bookLv1ColorMap.flipY = false;
  bookLv1MetalnessMap.flipY = false;
  bookLv1NormalMap.flipY = false;
  bookLv1RoughnessMap.flipY = false;
  bookLv2ColorMap.flipY = false;
  bookLv2MetalnessMap.flipY = false;
  bookLv2NormalMap.flipY = false;
  bookLv2RoughnessMap.flipY = false;
  bookLv3ColorMap.flipY = false;
  bookLv3MetalnessMap.flipY = false;
  bookLv3NormalMap.flipY = false;
  bookLv3RoughnessMap.flipY = false;
  bookLv4ColorMap.flipY = false;
  bookLv4MetalnessMap.flipY = false;
  bookLv4NormalMap.flipY = false;
  bookLv4RoughnessMap.flipY = false;
  bookLv5ColorMap.flipY = false;
  bookLv5MetalnessMap.flipY = false;
  bookLv5NormalMap.flipY = false;
  bookLv5RoughnessMap.flipY = false;

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
        position={[0, -1.2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.013}
      >
        <primitive object={nodes.World} />
        <skinnedMesh
          geometry={nodes.arm_mesh.geometry}
          material={materials["arm_mat.001"]}
          skeleton={nodes.arm_mesh.skeleton}
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
          geometry={nodes.Belt_mesh.geometry}
          material={nodes.Belt_mesh.material}
          skeleton={nodes.Belt_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={beltColors[colors.belt]}
            normalMap={beltNormalMap}
            roughnessMap={beltRoughnessMap}
            metalnessMap={beltMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh036.geometry}
          material={materials.lambert2}
          skeleton={nodes.Mesh036.skeleton}
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
          geometry={nodes.Mesh036_1.geometry}
          material={materials["bodyarmor_mat.001"]}
          skeleton={nodes.Mesh036_1.skeleton}
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
          geometry={nodes.Cloak_mesh.geometry}
          material={materials.cloak}
          skeleton={nodes.Cloak_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={cloakColors[colors.cloak]}
            normalMap={cloakNormalMap}
            roughnessMap={cloakRoughnessMap}
            metalnessMap={cloakMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Helmet_mesh.geometry}
          material={materials["helmet_mat.001"]}
          skeleton={nodes.Helmet_mesh.skeleton}
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
          geometry={nodes.pant_mesh.geometry}
          material={materials["shoes_mat.001"]}
          skeleton={nodes.pant_mesh.skeleton}
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
          geometry={nodes.Shoes_mesh.geometry}
          material={nodes.Shoes_mesh.material}
          skeleton={nodes.Shoes_mesh.skeleton}
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
        position={[0, -1.2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.013}
      >
        <primitive object={nodes.World_1} />
        <skinnedMesh
          geometry={nodes.BaseBook.geometry}
          material={materials.Base}
          skeleton={nodes.BaseBook.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bookBaseColorMap}
            normalMap={bookBaseNormalMap}
            roughnessMap={bookBaseRoughnessMap}
            metalnessMap={bookBaseMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level1.geometry}
          material={materials.Book_Lv1}
          skeleton={nodes.Level1.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bookLv1ColorMap}
            normalMap={bookLv1NormalMap}
            roughnessMap={bookLv1RoughnessMap}
            metalnessMap={bookLv1MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level2.geometry}
          material={materials.Book_Lv2}
          skeleton={nodes.Level2.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bookLv2ColorMap}
            normalMap={bookLv2NormalMap}
            roughnessMap={bookLv2RoughnessMap}
            metalnessMap={bookLv2MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level3.geometry}
          material={materials.Book_Lv3}
          skeleton={nodes.Level3.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bookLv3ColorMap}
            normalMap={bookLv3NormalMap}
            roughnessMap={bookLv3RoughnessMap}
            metalnessMap={bookLv3MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level4.geometry}
          material={materials.Book_Lv4}
          skeleton={nodes.Level4.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bookLv4ColorMap}
            normalMap={bookLv4NormalMap}
            roughnessMap={bookLv4RoughnessMap}
            metalnessMap={bookLv4MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level5.geometry}
          material={materials.Book_Lv5}
          skeleton={nodes.Level5.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={bookLv5ColorMap}
            normalMap={bookLv5NormalMap}
            roughnessMap={bookLv5RoughnessMap}
            metalnessMap={bookLv5MetalnessMap}
          />
        </skinnedMesh>
      </group>
    </group>
  );
}
