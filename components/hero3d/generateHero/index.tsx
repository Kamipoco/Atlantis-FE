import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { create } from "ipfs-http-client";
import cs from "classnames";

import {
  KingPose,
  PriestPose,
  GunnerPose,
  ShamanPose,
} from "@components/hero3d";
import { HeroClass, HeroTextureColorBaseTypes } from "src/types/genesisHero";

interface Props {
  race?: string;
  heroClass?: HeroClass;
  colors?: HeroTextureColorBaseTypes;
  showLoader: boolean;
  className?: string;
  onProgress?: (progress: number) => void;
}

const GenerateHero = React.forwardRef(
  (
    { race, heroClass, colors, showLoader, className, onProgress }: Props,
    ref: any
  ) => {
    function Loader() {
      const { active, progress, errors, item, loaded, total } = useProgress();
      onProgress && onProgress(progress);
      return <Html center>Loading...</Html>;
    }

    const renderHeroMotion = () => {
      switch (heroClass) {
        case "Priest":
          return <PriestPose colorBases={colors} />;
        case "Mage":
          return <ShamanPose colorBases={colors} />;
        case "Gunner":
          return <GunnerPose colorBases={colors} />;
        default:
          return <KingPose colorBases={colors} />;
      }
    };

    return (
      <div className={cs("mx-auto text-center w-[500px] h-[750px]", className)}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 8, 0], fov: 20 }}
          ref={ref}
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
          <Suspense fallback={showLoader && <Loader />}>
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
          />
        </Canvas>
      </div>
    );
  }
);
GenerateHero.displayName = "GenerateHero";

export default GenerateHero;
