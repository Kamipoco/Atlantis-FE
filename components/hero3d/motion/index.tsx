import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";

import { HeroClass, HeroTextureColorBaseTypes } from "src/types/genesisHero";
import { LancerBrineMotion, PriestBrineMotion, ShamanBrineMotion } from "..";

interface Props {
  race: string;
  heroClass: HeroClass;
  colors: HeroTextureColorBaseTypes;
}

export default function HeroMotion({ race, heroClass, colors }: Props) {
  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    return <Html center>Loading...</Html>;
  }

  const renderHeroMotion = () => {
    switch (heroClass) {
      case "Priest":
        return <PriestBrineMotion colors={colors} />;
      case "Mage":
        return <ShamanBrineMotion colors={colors} />;
      default:
        return <LancerBrineMotion colors={colors} />;
    }
  };

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 30 }} // position: [0, 8, 0], fov: 20
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.1}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
      <Suspense fallback={<Loader />}>
        {renderHeroMotion()}
        <Environment preset="sunset" />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.25}
          width={10}
          height={10}
          blur={1.5}
          far={0.8}
        />
      </Suspense>
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
        autoRotate
      />
    </Canvas>
  );
}
