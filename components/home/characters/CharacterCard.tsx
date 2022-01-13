import cs from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ICharacter } from './data';

const CharacterCard = ({
  character,
  onHover,
  onClick,
}: {
  character: ICharacter;
  onHover: any;
  onClick: any;
}) => {
  const { isComingSoon, image, name, symbolImage } = character;

  const handleClick = () => {
    if(!isComingSoon) {
      onClick();
    }
  }


  return (
    <motion.div
      className={cs('character brine w-[200px] h-[515px] relative', {
        'cursor-pointer': !isComingSoon,
      })}
      onMouseOver={onHover}
      whileHover="hover"
      whileTap={isComingSoon ? '' : 'tap'}
      initial="initial"
      variants={rootMotion}
      onClick={handleClick}
    >
      <div className="character-background"></div>
      {!isComingSoon && (
        <motion.div
          className="hover-background"
          variants={backgroundMotion}
        ></motion.div>
      )}
      {!isComingSoon && (
        <motion.div
          variants={borderMotion}
          className="border-background"
        ></motion.div>
      )}
      <Image src={image} layout="fill" alt="brine" className="relative" />
      <motion.div
        variants={backgroundMotion}
        className="character-foreground"
      ></motion.div>
      <div className="character-info">
        <div className="character-race">{name}</div>
        <Image
          src={symbolImage}
          width={80}
          height={80}
          alt=""
          className="race-symbol"
        />
      </div>

      {isComingSoon && (
        <>
          <div className="coming-soon-layer">
            <div className="coming-soon">{'Coming\nSoon'}</div>
          </div>
          <div className="coming-soon-overlay"></div>
        </>
      )}
    </motion.div>
  );
};

const rootMotion = {
  hover: {
    scale: 1.1,
    zIndex: 1,
  },
  tap: {
    scale: 1.05,
  },
};
const backgroundMotion = {
  initial: {
    marginTop: 100,
    opacity: 0,
  },
  hover: {
    marginTop: 0,
    opacity: 1,
  },
};

const borderMotion = {
  initial: {
    inset: '0px',
    opacity: 0,
  },
  hover: {
    inset: '10px',
    opacity: 1,
  },
};

export default CharacterCard;
