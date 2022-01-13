import Image from "next/image";
import { motion } from "framer-motion";
import cs from "classnames";
import Modal, { IModalProps } from "./Modal";
import NextButton from "./next-button.svg";
import useModalState from "src/utils/useModalState";
import CharacterDetailModal from "./CharacterDetailModal";

interface IProps extends Omit<IModalProps, "children"> {}

const characterMotion = {
  initial: { opacity: 0.4 },
  hover: { opacity: 1, scale: 1.1 },
};

const CharacterModal = (props: IProps) => {
  const {
    isOpen,
    data: selectedCharacterIndex,
    open,
    closeAndClearData,
  } = useModalState<number>();

  return (
    <>
      <Modal {...props}>
        <div className="relative flex flex-col items-center justify-between flex-1">
          <RaceSymbolWrapper />
          <div className="flex mt-10 w-full">
            {CHARACTERS.map(({ name, className, imageSrc }, index) => (
              <motion.div
                key={name}
                initial="initial"
                whileHover="hover"
                variants={characterMotion}
                className={cs(className, "cursor-pointer flex-1")}
                onClick={() => open(index)}
              >
                <Image
                  width={3240}
                  height={4500}
                  src={imageSrc}
                  alt={name}
                  sizes="350px"
                  layout="responsive"
                />
              </motion.div>
            ))}
          </div>
          <div className="text-xs text-white">
            Each race has many characters with different positions and has
            unique strength and appearance.
          </div>
          <div className="absolute bottom-0 right-0 flex items-center hover:opacity-60 cursor-not-allowed">
            <div className="mr-8">
              <span className="text-xl text-white">ATLANTIC</span>
              <br />
              <span className="text-sm text-gray-300">(Coming soon)</span>
            </div>

            <NextButton />
          </div>
        </div>
      </Modal>
      <CharacterDetailModal
        isOpen={isOpen}
        onClose={closeAndClearData}
        character={props?.character}
        initialIndex={selectedCharacterIndex}
      />
    </>
  );
};

const RaceSymbolWrapper = () => (
  <div className="absolute -top-32 flex gap-4 items-center">
    <motion.img
      whileHover={{ scale: 1.1 }}
      className="max-w-[60px] cursor-pointer"
      src="/assets/images/home/characters/symbol-brine.png"
      alt=""
    />
    <motion.img
      whileHover={{ scale: 1.1 }}
      className="max-w-[60px] cursor-not-allowed"
      src="/assets/images/home/characters/symbol-atlantis-shadow.png"
      alt=""
    />
    <motion.img
      whileHover={{ scale: 1.1 }}
      className="max-w-[60px] cursor-not-allowed"
      src="/assets/images/home/characters/symbol-deserter-shadow.png"
      alt=""
    />
    <motion.img
      whileHover={{ scale: 1.1 }}
      className="max-w-[60px] cursor-not-allowed"
      src="/assets/images/home/characters/symbol-fishermen-shadow.png"
      alt=""
    />
    <motion.img
      whileHover={{ scale: 1.1 }}
      className="max-w-[60px] cursor-not-allowed"
      src="/assets/images/home/characters/symbol-hidden-kingdom-shadow.png"
      alt=""
    />
    <motion.img
      whileHover={{ scale: 1.1 }}
      className="max-w-[60px] cursor-not-allowed"
      src="/assets/images/home/characters/symbol-trench-shadow.png"
      alt=""
    />
    <motion.img
      whileHover={{ scale: 1.1 }}
      className="max-w-[60px] cursor-not-allowed"
      src="/assets/images/home/characters/symbol-xebel-shadow.png"
      alt=""
    />
  </div>
);

const CHARACTERS = [
  {
    name: "solider",
    className: "mt-20",
    videoUrl: "/assets/videos/home/character-soldier.webm",
    imageSrc: "/assets/images/home/characters/Soldier.png",
  },
  {
    name: "general",
    className: "mt-10",
    videoUrl: "/assets/videos/home/character-general.webm",
    imageSrc: "/assets/images/home/characters/General.png",
  },
  {
    name: "king",
    className: "",
    videoUrl: "/assets/videos/home/character-king.webm",
    imageSrc: "/assets/images/home/characters/King.png",
  },
  {
    name: "shaman",
    className: "mt-10",
    videoUrl: "/assets/videos/home/character-shaman.webm",
    imageSrc: "/assets/images/home/characters/Shaman.png",
  },
  {
    name: "citizen",
    className: "mt-20",
    videoUrl: "/assets/videos/home/character-citizen.webm",
    imageSrc: "/assets/images/home/characters/Citizen.png",
  },
];

export default CharacterModal;
