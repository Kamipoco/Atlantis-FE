import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { HeroTextureColorBaseTypes } from "src/types/genesisHero";

type GLTFResult = GLTF & {
  nodes: {
    arm_mesh: THREE.SkinnedMesh;
    belt_mesh: THREE.SkinnedMesh;
    Mesh015: THREE.SkinnedMesh;
    Mesh015_1: THREE.SkinnedMesh;
    bodyarmor_mesh: THREE.SkinnedMesh;
    cloak_mesh: THREE.SkinnedMesh;
    helmet_mesh: THREE.SkinnedMesh;
    pant_mesh: THREE.SkinnedMesh;
    shoes_mesh: THREE.SkinnedMesh;
    Mesh016: THREE.SkinnedMesh;
    Mesh016_1: THREE.SkinnedMesh;
    Level1b_mesh: THREE.SkinnedMesh;
    Level2_mesh: THREE.SkinnedMesh;
    Level3_mesh: THREE.SkinnedMesh;
    Level4_mesh: THREE.SkinnedMesh;
    Level5_mesh: THREE.SkinnedMesh;
    Level6_mesh: THREE.SkinnedMesh;
    World: THREE.Bone;
    World_1: THREE.Bone;
  };
  materials: {
    arm1: THREE.MeshStandardMaterial;
    belt1: THREE.MeshStandardMaterial;
    lambert26: THREE.MeshStandardMaterial;
    body1: THREE.MeshStandardMaterial;
    bodyarmor1: THREE.MeshStandardMaterial;
    cloak1: THREE.MeshStandardMaterial;
    helmet1: THREE.MeshStandardMaterial;
    pant1: THREE.MeshStandardMaterial;
    shoes1: THREE.MeshStandardMaterial;
    lambert27: THREE.MeshStandardMaterial;
    lambert28: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "ExportGrp|Take 001|BaseLayer"
  | "ExportGrp.001|Take 001|BaseLayer";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function LancerBrineMotion({
  colors,
  ...props
}: JSX.IntrinsicElements["group"] & { colors: HeroTextureColorBaseTypes }) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/assets/glb/brine/king-motion.gltf"
  ) as GLTFResult;
  // @ts-ignore
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(() => {
    actions["ExportGrp.001|Take 001|BaseLayer"].play();
    actions["ExportGrp|Take 001|BaseLayer"].play();
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
    bodyColorMap,
    bodyMetalnessMap,
    bodyNormalMap,
    bodyRoughnessMap,
    tridentLayer1ColorMap,
    tridentLayer1MetalnessMap,
    tridentLayer1NormalMap,
    tridentLayer1RoughnessMap,
    tridentLayer2ColorMap,
    tridentLayer2MetalnessMap,
    tridentLayer2NormalMap,
    tridentLayer2RoughnessMap,
    tridentLayer3ColorMap,
    tridentLayer3MetalnessMap,
    tridentLayer3NormalMap,
    tridentLayer3RoughnessMap,
    tridentLayer4ColorMap,
    tridentLayer4MetalnessMap,
    tridentLayer4NormalMap,
    tridentLayer4RoughnessMap,
    tridentLayer5ColorMap,
    tridentLayer5MetalnessMap,
    tridentLayer5NormalMap,
    tridentLayer5RoughnessMap,
    tridentLayer6ColorMap,
    tridentLayer6MetalnessMap,
    tridentLayer6NormalMap,
    tridentLayer6RoughnessMap,
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
    "/assets/texture/trident/Level1/TridentLv1_Diffuse.png",
    "/assets/texture/trident/Level1/TridentLv1_Chanel.png",
    "/assets/texture/trident/Level1/TridentLv1_Normal.png",
    "/assets/texture/trident/Level1/TridentLv1_Chanel.png",
    "/assets/texture/trident/Level2/TridentLv2_Diffuse.png",
    "/assets/texture/trident/Level2/TridentLv2_Chanel.png",
    "/assets/texture/trident/Level2/TridentLv2_Normal.png",
    "/assets/texture/trident/Level2/TridentLv2_Chanel.png",
    "/assets/texture/trident/Level3/TridentLv3_Diffuse.png",
    "/assets/texture/trident/Level3/TridentLv3_Chanel.png",
    "/assets/texture/trident/Level3/TridentLv3_Normal.png",
    "/assets/texture/trident/Level3/TridentLv3_Chanel.png",
    "/assets/texture/trident/Level4/TridentLv4_Diffuse.png",
    "/assets/texture/trident/Level4/TridentLv4_Chanel.png",
    "/assets/texture/trident/Level4/TridentLv4_Normal.png",
    "/assets/texture/trident/Level4/TridentLv4_Chanel.png",
    "/assets/texture/trident/Level5/TridentLv5_Diffuse.png",
    "/assets/texture/trident/Level5/TridentLv5_Chanel.png",
    "/assets/texture/trident/Level5/TridentLv5_Normal.png",
    "/assets/texture/trident/Level5/TridentLv5_Chanel.png",
    "/assets/texture/trident/Level6/TridentLv6_Diffuse.png",
    "/assets/texture/trident/Level6/TridentLv6_Chanel.png",
    "/assets/texture/trident/Level6/TridentLv6_Normal.png",
    "/assets/texture/trident/Level6/TridentLv6_Chanel.png",
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

  tridentLayer1ColorMap.flipY = false;
  tridentLayer1MetalnessMap.flipY = false;
  tridentLayer1NormalMap.flipY = false;
  tridentLayer1RoughnessMap.flipY = false;

  tridentLayer2ColorMap.flipY = false;
  tridentLayer2MetalnessMap.flipY = false;
  tridentLayer2NormalMap.flipY = false;
  tridentLayer2RoughnessMap.flipY = false;

  tridentLayer3ColorMap.flipY = false;
  tridentLayer3MetalnessMap.flipY = false;
  tridentLayer3NormalMap.flipY = false;
  tridentLayer3RoughnessMap.flipY = false;

  tridentLayer4ColorMap.flipY = false;
  tridentLayer4MetalnessMap.flipY = false;
  tridentLayer4NormalMap.flipY = false;
  tridentLayer4RoughnessMap.flipY = false;

  tridentLayer5ColorMap.flipY = false;
  tridentLayer5MetalnessMap.flipY = false;
  tridentLayer5NormalMap.flipY = false;
  tridentLayer5RoughnessMap.flipY = false;

  tridentLayer6ColorMap.flipY = false;
  tridentLayer6MetalnessMap.flipY = false;
  tridentLayer6NormalMap.flipY = false;
  tridentLayer6RoughnessMap.flipY = false;

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
        position={[0, -0.8, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.013}
      >
        <primitive object={nodes.World} />
        <skinnedMesh
          geometry={nodes.arm_mesh.geometry}
          material={materials.arm1}
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
          geometry={nodes.belt_mesh.geometry}
          material={materials.belt1}
          skeleton={nodes.belt_mesh.skeleton}
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
          geometry={nodes.Mesh015.geometry}
          material={materials.lambert26}
          skeleton={nodes.Mesh015.skeleton}
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
          geometry={nodes.Mesh015_1.geometry}
          material={materials.body1}
          skeleton={nodes.Mesh015_1.skeleton}
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
          material={materials.bodyarmor1}
          skeleton={nodes.bodyarmor_mesh.skeleton}
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
          geometry={nodes.cloak_mesh.geometry}
          material={materials.cloak1}
          skeleton={nodes.cloak_mesh.skeleton}
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
          geometry={nodes.helmet_mesh.geometry}
          material={materials.helmet1}
          skeleton={nodes.helmet_mesh.skeleton}
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
          material={materials.pant1}
          skeleton={nodes.pant_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={pantColors[colors.arm]}
            normalMap={pantNormalMap}
            roughnessMap={pantRoughnessMap}
            metalnessMap={pantMetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.shoes_mesh.geometry}
          material={materials.shoes1}
          skeleton={nodes.shoes_mesh.skeleton}
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
        scale={0.013}
      >
        <primitive object={nodes.World_1} />
        <skinnedMesh
          geometry={nodes.Mesh016.geometry}
          material={nodes.Mesh016.material}
          skeleton={nodes.Mesh016.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer1ColorMap}
            normalMap={tridentLayer1NormalMap}
            roughnessMap={tridentLayer1RoughnessMap}
            metalnessMap={tridentLayer1MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Mesh016_1.geometry}
          material={nodes.Mesh016_1.material}
          skeleton={nodes.Mesh016_1.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer1ColorMap}
            normalMap={tridentLayer1NormalMap}
            roughnessMap={tridentLayer1RoughnessMap}
            metalnessMap={tridentLayer1MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level1b_mesh.geometry}
          material={nodes.Level1b_mesh.material}
          skeleton={nodes.Level1b_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer1ColorMap}
            normalMap={tridentLayer1NormalMap}
            roughnessMap={tridentLayer1RoughnessMap}
            metalnessMap={tridentLayer1MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level2_mesh.geometry}
          material={nodes.Level2_mesh.material}
          skeleton={nodes.Level2_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer2ColorMap}
            normalMap={tridentLayer2NormalMap}
            roughnessMap={tridentLayer2RoughnessMap}
            metalnessMap={tridentLayer2MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level3_mesh.geometry}
          material={nodes.Level3_mesh.material}
          skeleton={nodes.Level3_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer3ColorMap}
            normalMap={tridentLayer3NormalMap}
            roughnessMap={tridentLayer3RoughnessMap}
            metalnessMap={tridentLayer3MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level4_mesh.geometry}
          material={nodes.Level4_mesh.material}
          skeleton={nodes.Level4_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer4ColorMap}
            normalMap={tridentLayer4NormalMap}
            roughnessMap={tridentLayer4RoughnessMap}
            metalnessMap={tridentLayer4MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level5_mesh.geometry}
          material={nodes.Level5_mesh.material}
          skeleton={nodes.Level5_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer5ColorMap}
            normalMap={tridentLayer5NormalMap}
            roughnessMap={tridentLayer5RoughnessMap}
            metalnessMap={tridentLayer5MetalnessMap}
          />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Level6_mesh.geometry}
          material={nodes.Level6_mesh.material}
          skeleton={nodes.Level6_mesh.skeleton}
        >
          <meshStandardMaterial
            metalness={1}
            roughness={1}
            map={tridentLayer6ColorMap}
            normalMap={tridentLayer6NormalMap}
            roughnessMap={tridentLayer6RoughnessMap}
            metalnessMap={tridentLayer6MetalnessMap}
          />
        </skinnedMesh>
      </group>
    </group>
  );
}
