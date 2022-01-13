import { useState } from 'react';
import { motion } from 'framer-motion';
import Title from '../components/Title';
import { DATA, ICharacter } from './data';
import CharacterCard from './CharacterCard';
import CharacterModal from './CharacterModal';
import useModalState from 'src/utils/useModalState';
import { Background } from '../background';

export function Characters() {
  const {
    data: selectedCharacter,
    open,
    isOpen,
    closeAndClearData,
  } = useModalState<ICharacter>();
  const [hoveringIndex, setHoveringIndex] = useState<number>(0);
  const hoveringRace = DATA[hoveringIndex];

  return (
    <div className="relative pt-60 pb-40">
      <div className="characters-section relative z-10 overflow-hidden">
        <div className="mx-auto flex flex-col items-center px-8">
          <Title text="Characters" className="mb-4" />
          <p className="mb-20 text-white">
            7 races in Phase 1 : Brine, Trench, Atlantis, Xebel, Fisherman,
            Deserters, Hidden Kingdom.
          </p>
          <div className="relative flex justify-center gap-2 w-full  mb-20">
            {DATA.map((character, index) => (
              <CharacterCard
                key={character.race}
                character={character}
                onHover={() => setHoveringIndex(index)}
                onClick={() => open(character)}
              />
            ))}
          </div>

          <div className="hovering-race">
            <div className="hovering-index flex items-center font-extrabold text-4xl tracking-tighter">
              <span className="text-primary">{`0${hoveringIndex + 1}`}</span>
              <span className="text-[#BAB0B0] font-normal">/</span>
              <span className="text-white">07</span>
            </div>
            <motion.div
              key={hoveringIndex}
              transition={{ duration: 0.4 }}
              initial={{ marginRight: -200, opacity: 0 }}
              animate={{ marginRight: 0, opacity: 1 }}
              className="hovering-race-name"
            >
              {hoveringRace.name}
            </motion.div>
          </div>
        </div>
      </div>
      <CharacterModal
        isOpen={isOpen}
        onClose={closeAndClearData}
        character={selectedCharacter}
      />
      <Background
        className="-bottom-32"
        maskSrc="/assets/images/home/character-mask-bg.png"
        backgroundSrc="/assets/images/home/character-bg.png"
      />
      <div className="absolute w-[800px] h-[500px] top-0 right-0 mt-[-200px] overflow-hidden">
        <img src="/assets/images/home/class-logo/deserter-logo-gray.png" alt="atlantis logo" className="absolute right-[-40%]" />
      </div>
    </div>
  );
}
